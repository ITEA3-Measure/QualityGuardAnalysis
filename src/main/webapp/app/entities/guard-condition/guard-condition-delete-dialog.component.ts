import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { GuardCondition } from './guard-condition.model';
import { GuardConditionPopupService } from './guard-condition-popup.service';
import { GuardConditionService } from './guard-condition.service';

@Component({
    selector: 'jhi-guard-condition-delete-dialog',
    templateUrl: './guard-condition-delete-dialog.component.html'
})
export class GuardConditionDeleteDialogComponent {

    guardCondition: GuardCondition;

    constructor(
        private guardConditionService: GuardConditionService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.guardConditionService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'guardConditionListModification',
                content: 'Deleted an guardCondition'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-guard-condition-delete-popup',
    template: ''
})
export class GuardConditionDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private guardConditionPopupService: GuardConditionPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.guardConditionPopupService
                .open(GuardConditionDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
