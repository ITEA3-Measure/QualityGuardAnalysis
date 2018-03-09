import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseWrapper } from '../../shared/model/response-wrapper.model';
import { GuardCondition } from './guard-condition.model';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'jhi-quality-guard-dashboard',
  templateUrl: './quality-guard-dashboard.component.html'
})
export class QualityGuardDashboardComponent implements OnInit {

  qualityGuardsByProject: Array<QualityGuard> = [];
  guardConditionsByProject: Array<GuardCondition> = [];
  errorMessage: any;
  projectId: number;
  rowSelected: number;

  constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private jhiAlertService: JhiAlertService,
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
      },
      (resQG: ResponseWrapper) => this.onError(resQG.json)
    );
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
