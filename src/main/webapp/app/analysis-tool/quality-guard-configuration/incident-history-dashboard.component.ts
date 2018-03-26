import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'jhi-quality-guard-dashboard',
  templateUrl: './incident-history-dashboard.component.html'
})
export class IncidentHistoryDashboardComponent implements OnInit {

  qualityGuardsByProject: Array<QualityGuard> = [];
  errorMessage: any;
  projectId: number;
  rowSelected: number;

  constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private jhiAlertService: JhiAlertService,
        private cdRef: ChangeDetectorRef,
  ) {
    // this.route.params.subscribe((res) => console.log(res.id));
    this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.qualityGuardService.getQualityGuardsByProjectId(this.projectId).subscribe(
      (resQG: ResponseWrapper) => {
        this.qualityGuardsByProject = resQG.json
        this.cdRef.markForCheck();
      },
      (resQG: ResponseWrapper) => this.onError(resQG.json)
    );
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
