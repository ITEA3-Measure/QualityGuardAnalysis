import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseWrapper } from '../../shared';
import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { QualityGuardSchedulingService } from './quality-guard-scheduling.service';
import { QualityGuardService } from './quality-guard.service';
import { QualityGuard } from './quality-guard.model';
import { JhiAlertService } from 'ng-jhipster';

@Component({
  selector: 'jhi-quality-guard-configuration',
  templateUrl: './quality-guard.component.html'
})
export class QualityGuardComponent implements OnInit {

  qualityGuardsByProject: Array<QualityGuard> = [];
  guardConditionsByProject: Array<GuardCondition> = [];
  qualityGuard: QualityGuard = {};
  errorMessage: any;
  projectId: number;
  interval: any;

  constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private guardConditionService: GuardConditionService,
        private qualityGuardSchedulingService: QualityGuardSchedulingService,
        private jhiAlertService: JhiAlertService,
  ) {
    // this.route.params.subscribe((res) => console.log(res.id));
    this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
    router.events.subscribe((event) => this.loadAll());
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
    this.guardConditionService.getGuardConditionsByProjectId(this.projectId).subscribe(
      (resGC: ResponseWrapper) => {
        this.guardConditionsByProject = resGC.json;
      },
      (resGC: ResponseWrapper) => this.onError(resGC.json)
    );
  }

  startScheduling(id: number) {
    this.qualityGuardSchedulingService.startQualityGuardSchedule(id).subscribe((response) => {
      console.log('isStarted ' + response)
      this.loadAll();
    });
  }

  stopScheduling(id: number) {
    this.qualityGuardSchedulingService.stopQualityGuardSchedule(id).subscribe((response) => {
      console.log('isStopped ' + response)
      this.loadAll();
    });
  }

  private onError(error) {
    this.jhiAlertService.error(error.message, null, null);
  }

}
