import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { QualityGuard } from './quality-guard.model';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { QualityGuardService } from './quality-guard.service';
import { Violation, ViolationService } from '../violation';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-quality-guard-dialog',
    templateUrl: './quality-guard-dialog.component.html'
})
export class QualityGuardDialogComponent implements OnInit {

    qualityGuard: QualityGuard;
    isSaving: boolean;

    violations: Violation[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private qualityGuardService: QualityGuardService,
        private violationService: ViolationService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.violationService
            .query({filter: 'qualityguard-is-null'})
            .subscribe((res: ResponseWrapper) => {
                if (!this.qualityGuard.violation || !this.qualityGuard.violation.id) {
                    this.violations = res.json;
                } else {
                    this.violationService
                        .find(this.qualityGuard.violation.id)
                        .subscribe((subRes: Violation) => {
                            this.violations = [subRes].concat(res.json);
                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
                }
            }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.qualityGuard.id !== undefined) {
            this.subscribeToSaveResponse(
                this.qualityGuardService.update(this.qualityGuard));
        } else {
            this.subscribeToSaveResponse(
                this.qualityGuardService.create(this.qualityGuard));
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

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackViolationById(index: number, item: Violation) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-quality-guard-popup',
    template: ''
})
export class QualityGuardPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private qualityGuardPopupService: QualityGuardPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.qualityGuardPopupService
                    .open(QualityGuardDialogComponent as Component, params['id']);
            } else {
                this.qualityGuardPopupService
                    .open(QualityGuardDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
