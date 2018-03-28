import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { QualityGuard } from './quality-guard.model';
import { ViolationService } from './violation.service';
import { JhiAlertService } from 'ng-jhipster';
import { QualityIssues } from './quality-issues.model';

@Component({
  selector: 'jhi-quality-guard-dashboard',
  templateUrl: './incident-history-dashboard.component.html'
})
export class IncidentHistoryDashboardComponent implements OnInit {

  qualityIssues: Array<QualityIssues> = [];
  errorMessage: any;
  projectId: number;
  rowSelected: number;

  constructor(
        private router: Router,
        private violationService: ViolationService,
        private jhiAlertService: JhiAlertService,
  ) {
    this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.violationService.getLastViolationsWithQualityGuards().subscribe(
      (resQI: ResponseWrapper) => {
        this.qualityIssues = resQI.json
      },
      (resQI: ResponseWrapper) => this.onError(resQI.json)
    );
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
