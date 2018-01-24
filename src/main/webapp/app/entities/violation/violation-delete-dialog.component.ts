import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Violation } from './violation.model';
import { ViolationPopupService } from './violation-popup.service';
import { ViolationService } from './violation.service';

@Component({
    selector: 'jhi-violation-delete-dialog',
    templateUrl: './violation-delete-dialog.component.html'
})
export class ViolationDeleteDialogComponent {

    violation: Violation;

    constructor(
        private violationService: ViolationService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.violationService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'violationListModification',
                content: 'Deleted an violation'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-violation-delete-popup',
    template: ''
})
export class ViolationDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private violationPopupService: ViolationPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.violationPopupService
                .open(ViolationDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
