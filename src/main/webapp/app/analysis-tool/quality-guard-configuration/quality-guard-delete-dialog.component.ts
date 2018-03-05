import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { GuardCondition } from './guard-condition.model';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
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
    conditionViolationsbyViolation: Array<ConditionViolation>;
    projectId: number;

    constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
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
      this.qualityGuardService.find(id).subscribe((qualityGuard) => {
        this.deleteQualityGuard(qualityGuard);
      });
    }

    deleteQualityGuard(qualityGuard: QualityGuard) {
      this.qualityGuardService.delete(qualityGuard.id).subscribe((response) => {
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
