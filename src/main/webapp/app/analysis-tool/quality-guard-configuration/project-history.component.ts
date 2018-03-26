import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { IncidentStatus } from './incident-status.model';
import { QualityGuardIncidentHistoryService } from './quality-guard-incident-history.service';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'jhi-project-history',
  templateUrl: './project-history.component.html'
})
export class ProjectHistoryComponent implements OnInit {
  qualityGuardsByProject: Array<QualityGuard> = [];
  incidentsHistory: Array<IncidentStatus> = [];
  errorMessage: any;
  projectId: number;
  rowSelected: number;

  constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private qualityGuardIncidentHistoryService: QualityGuardIncidentHistoryService,
        private jhiAlertService: JhiAlertService,
        private cdRef: ChangeDetectorRef,
  ) {
    this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.qualityGuardService.getQualityGuardsByProjectId(this.projectId).subscribe(
      (resQG: ResponseWrapper) => {
        this.qualityGuardsByProject = resQG.json.filter((qualityGuard) => qualityGuard.isSchedule === true);
        this.cdRef.markForCheck();
      },
      (resQG: ResponseWrapper) => this.onError(resQG.json)
    );
  }

  getIncidentStatus(interval: string) {
    this.qualityGuardsByProject.forEach((qualityGuard) => {
        this.qualityGuardIncidentHistoryService.retrieveIncidentsHistory(qualityGuard.id, interval).subscribe(
            (resGS: ResponseWrapper) => {
              qualityGuard.incidentsHistory = resGS.json;
              this.cdRef.markForCheck();
            },
            (resGS: ResponseWrapper) => this.onError(resGS.json)
          );
    })
  }

  public toggleRowDetails(rowId: number): void {
    if (this.rowSelected === -1) {
      this.rowSelected = rowId
    } else if (this.rowSelected === rowId) {
        this.rowSelected = -1
      } else {
        this.rowSelected = rowId
      }
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
