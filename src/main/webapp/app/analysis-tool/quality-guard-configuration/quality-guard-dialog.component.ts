import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuard} from './quality-guard.model';
import { GuardCondition } from './guard-condition.model';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { QualityGuardService } from './quality-guard.service';

@Component({
    selector: 'jhi-quality-guard-configuration-dialog',
    templateUrl: './quality-guard-dialog.component.html'
})
export class QualityGuardDialogComponent implements OnInit {

    qualityGuard: QualityGuard;
    guardCondition: GuardCondition[];

    isSaving: boolean;

    constructor(
       public activeModal: NgbActiveModal,
       private qualityGuardConfigurationService: QualityGuardService,
       private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
      this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.qualityGuard.id !== undefined) {
            this.subscribeToSaveResponse(
                this.qualityGuardConfigurationService.update(this.qualityGuard));
        } else {
            this.subscribeToSaveResponse(
                this.qualityGuardConfigurationService.create(this.qualityGuard));
        }
    }

    private subscribeToSaveResponse(result: Observable<QualityGuard>) {
        result.subscribe((res: QualityGuard) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: QualityGuard) {
        this.eventManager.broadcast({ name: 'qualityGuardListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

}

@Component({
    selector: 'jhi-quality-guard-configuration-popup',
    template: ''
})
export class QualityGuardPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private qualityGuardConfigurationPopupService: QualityGuardPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.qualityGuardConfigurationPopupService
                    .open(QualityGuardDialogComponent as Component, params['id']);
            } else {
                this.qualityGuardConfigurationPopupService
                    .open(QualityGuardDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
