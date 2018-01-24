import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Violation } from './violation.model';
import { ViolationPopupService } from './violation-popup.service';
import { ViolationService } from './violation.service';
import { QualityGuard, QualityGuardService } from '../quality-guard';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-violation-dialog',
    templateUrl: './violation-dialog.component.html'
})
export class ViolationDialogComponent implements OnInit {

    violation: Violation;
    isSaving: boolean;

    qualityguards: QualityGuard[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private violationService: ViolationService,
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
        if (this.violation.id !== undefined) {
            this.subscribeToSaveResponse(
                this.violationService.update(this.violation));
        } else {
            this.subscribeToSaveResponse(
                this.violationService.create(this.violation));
        }
    }

    private subscribeToSaveResponse(result: Observable<Violation>) {
        result.subscribe((res: Violation) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Violation) {
        this.eventManager.broadcast({ name: 'violationListModification', content: 'OK'});
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
    selector: 'jhi-violation-popup',
    template: ''
})
export class ViolationPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private violationPopupService: ViolationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.violationPopupService
                    .open(ViolationDialogComponent as Component, params['id']);
            } else {
                this.violationPopupService
                    .open(ViolationDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
