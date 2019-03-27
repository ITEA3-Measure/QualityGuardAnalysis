import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuard } from './quality-guard.model';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { QualityGuardService } from './quality-guard.service';

@Component({
    selector: 'jhi-quality-guard-delete-dialog',
    templateUrl: './quality-guard-delete-dialog.component.html'
})
export class QualityGuardDeleteDialogComponent {

    qualityGuard: QualityGuard;

    constructor(
        private qualityGuardService: QualityGuardService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.qualityGuardService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'qualityGuardListModification',
                content: 'Deleted an qualityGuard'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-quality-guard-delete-popup',
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
