import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseWrapper } from '../../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { ViolationService } from './violation.service';
import { ConditionViolationService } from './condition-violation.service';
import { Violation } from './violation.model';
import { ConditionViolation } from './condition-violation.model';

@Component({
    selector: 'jhi-quality-guard-configuration-delete-dialog',
    templateUrl: './quality-guard-delete-dialog.component.html'
})
export class QualityGuardDeleteDialogComponent {

    qualityGuard: QualityGuard;
    guardConditionsbyQualityGuard: Array<GuardCondition>;
    violationsbyQualityGuard: Array<Violation>;
    conditionViolationsbyQualityGuard: Array<ConditionViolation>;
    projectId: number;

    constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private guardConditionService: GuardConditionService,
        private violationService: ViolationService,
        private conditionViolationService: ConditionViolationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager,
        private jhiAlertService: JhiAlertService
    ) {
      this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.deleteQualityGuardAssociatedModels(id);
    }

    deleteQualityGuardAssociatedModels(idQualityGuard: number) {
      /**
       * Delete ConditionViolation
       */
      this.conditionViolationService.getConditionViolationsByProjectIdAndQualityGuardId(this.projectId, idQualityGuard).subscribe(
        (resCV: ResponseWrapper) => {
          this.conditionViolationsbyQualityGuard = resCV.json;
          this.conditionViolationsbyQualityGuard.forEach((x) => {
            this.violationService.delete(x.id).subscribe((response) => {
              this.eventManager.broadcast({
                name: 'conditionViolationListModification',
                content: 'Deleted an conditionViolation'
              });
            });
          });
          /**
           * Delete Violation
           */
          this.violationService.getViolationsByProjectIdAndQualityGuardId(this.projectId, idQualityGuard).subscribe(
            (resV: ResponseWrapper) => {
              this.conditionViolationsbyQualityGuard = resV.json;
              this.conditionViolationsbyQualityGuard.forEach((y) => {
                this.conditionViolationService.delete(y.id).subscribe((response) => {
                  this.eventManager.broadcast({
                    name: 'violationListModification',
                    content: 'Deleted an violation'
                  });
                });
              });
              this.deleteQualityGuard(idQualityGuard);
            },
            (resV: ResponseWrapper) => this.onError(resV.json)
          );
          /**
           * End treatment
           */
        },
        (resCV: ResponseWrapper) => this.onError(resCV.json)
      );
      /**
       * Delete GuardCondition
       */
      this.guardConditionService.getGuardConditionsByProjectIdAndQualityGuardId(this.projectId, idQualityGuard).subscribe(
        (resGC: ResponseWrapper) => {
          this.guardConditionsbyQualityGuard = resGC.json;
          this.guardConditionsbyQualityGuard.forEach((z) => {
            this.guardConditionService.delete(z.id).subscribe((response) => {
              this.eventManager.broadcast({
                name: 'guardConditionListModification',
                content: 'Deleted an guardCondition'
              });
            });
          });
          this.deleteQualityGuard(idQualityGuard);
        },
        /**
         * Delete QualityGuard
         */
        (resGC: ResponseWrapper) => this.onError(resGC.json)
      );
    }

    deleteQualityGuard(idQualityGuard: number) {
      this.qualityGuardService.delete(idQualityGuard).subscribe((response) => {
        this.eventManager.broadcast({
          name: 'qualityGuardListModification',
          content: 'Deleted an qualityGuard'
        });
        this.activeModal.dismiss(true);
      });
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-quality-guard-configuration-delete-popup',
    template: ''
})
export class QualityGuardDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private qualityGuardPopupService: QualityGuardPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.qualityGuardPopupService
                .open(QualityGuardDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
