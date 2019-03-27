import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { GuardCondition } from './guard-condition.model';
import { GuardConditionPopupService } from './guard-condition-popup.service';
import { GuardConditionService } from './guard-condition.service';
import { QualityGuard, QualityGuardService } from '../quality-guard';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-guard-condition-dialog',
    templateUrl: './guard-condition-dialog.component.html'
})
export class GuardConditionDialogComponent implements OnInit {

    guardCondition: GuardCondition;
    isSaving: boolean;

    qualityguards: QualityGuard[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private guardConditionService: GuardConditionService,
        private qualityGuardService: QualityGuardService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.qualityGuardService.query()
            .subscribe((res: ResponseWrapper) => { this.qualityguards = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.guardCondition.id !== undefined) {
            this.subscribeToSaveResponse(
                this.guardConditionService.update(this.guardCondition));
        } else {
            this.subscribeToSaveResponse(
                this.guardConditionService.create(this.guardCondition));
        }
    }

    private subscribeToSaveResponse(result: Observable<GuardCondition>) {
        result.subscribe((res: GuardCondition) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: GuardCondition) {
        this.eventManager.broadcast({ name: 'guardConditionListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackQualityGuardById(index: number, item: QualityGuard) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-guard-condition-popup',
    template: ''
})
export class GuardConditionPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private guardConditionPopupService: GuardConditionPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.guardConditionPopupService
                    .open(GuardConditionDialogComponent as Component, params['id']);
            } else {
                this.guardConditionPopupService
                    .open(GuardConditionDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
