import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ConditionViolation } from './condition-violation.model';
import { ConditionViolationPopupService } from './condition-violation-popup.service';
import { ConditionViolationService } from './condition-violation.service';
import { Violation, ViolationService } from '../violation';
import { GuardCondition, GuardConditionService } from '../guard-condition';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-condition-violation-dialog',
    templateUrl: './condition-violation-dialog.component.html'
})
export class ConditionViolationDialogComponent implements OnInit {

    conditionViolation: ConditionViolation;
    isSaving: boolean;

    violations: Violation[];

    guardconditions: GuardCondition[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private conditionViolationService: ConditionViolationService,
        private violationService: ViolationService,
        private guardConditionService: GuardConditionService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.violationService.query()
            .subscribe((res: ResponseWrapper) => { this.violations = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
        this.guardConditionService
            .query({filter: 'conditionviolation-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.conditionViolation.guardCondition || !this.conditionViolation.guardCondition.id) {
                    this.guardconditions = res.json;
                } else {
                    this.guardConditionService
                        .find(this.conditionViolation.guardCondition.id)
                        .subscribe((subRes: GuardCondition) => {
                            this.guardconditions = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.conditionViolation.id !== undefined) {
            this.subscribeToSaveResponse(
                this.conditionViolationService.update(this.conditionViolation));
        } else {
            this.subscribeToSaveResponse(
                this.conditionViolationService.create(this.conditionViolation));
        }
    }

    private subscribeToSaveResponse(result: Observable<ConditionViolation>) {
        result.subscribe((res: ConditionViolation) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: ConditionViolation) {
        this.eventManager.broadcast({ name: 'conditionViolationListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackViolationById(index: number, item: Violation) {
        return item.id;
    }

    trackGuardConditionById(index: number, item: GuardCondition) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-condition-violation-popup',
    template: ''
})
export class ConditionViolationPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private conditionViolationPopupService: ConditionViolationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.conditionViolationPopupService
                    .open(ConditionViolationDialogComponent as Component, params['id']);
            } else {
                this.conditionViolationPopupService
                    .open(ConditionViolationDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
