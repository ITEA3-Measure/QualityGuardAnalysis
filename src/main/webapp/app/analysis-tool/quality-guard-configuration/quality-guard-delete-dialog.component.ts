import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseWrapper } from '../../shared';
import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';

@Component({
    selector: 'jhi-quality-guard-configuration-delete-dialog',
    templateUrl: './quality-guard-delete-dialog.component.html'
})
export class QualityGuardDeleteDialogComponent {

    qualityGuard: QualityGuard;
    guardConditionsbyQualityGuard: Array<GuardCondition>;
    projectId: number;

    constructor(
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private guardConditionService: GuardConditionService,
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
        this.deleteGuardConditions(id);
    }

    deleteGuardConditions(id: number) {
        this.guardConditionService.getGuardConditionsByProjectIdAndQualityGuardId(this.projectId, id).subscribe(
          (res: ResponseWrapper) => {
            this.guardConditionsbyQualityGuard = res.json;
            this.guardConditionsbyQualityGuard.forEach((x) => {
              this.guardConditionService.delete(x.id).subscribe((response) => {
                this.eventManager.broadcast({
                  name: 'guardConditionListModification',
                  content: 'Deleted an guardCondition'
                });
              });
            });
            this.deleteQualityGuard(id);
          },
          (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    deleteQualityGuard(id: number) {
      this.qualityGuardService.delete(id).subscribe((response) => {
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
