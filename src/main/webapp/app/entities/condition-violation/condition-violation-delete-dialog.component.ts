import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ConditionViolation } from './condition-violation.model';
import { ConditionViolationPopupService } from './condition-violation-popup.service';
import { ConditionViolationService } from './condition-violation.service';

@Component({
    selector: 'jhi-condition-violation-delete-dialog',
    templateUrl: './condition-violation-delete-dialog.component.html'
})
export class ConditionViolationDeleteDialogComponent {

    conditionViolation: ConditionViolation;

    constructor(
        private conditionViolationService: ConditionViolationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.conditionViolationService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'conditionViolationListModification',
                content: 'Deleted an conditionViolation'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-condition-violation-delete-popup',
    template: ''
})
export class ConditionViolationDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private conditionViolationPopupService: ConditionViolationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.conditionViolationPopupService
                .open(ConditionViolationDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
