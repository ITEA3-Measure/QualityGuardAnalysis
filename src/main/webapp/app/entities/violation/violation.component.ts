import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Violation } from './violation.model';
import { ViolationService } from './violation.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-violation',
    templateUrl: './violation.component.html'
})
export class ViolationComponent implements OnInit, OnDestroy {
violations: Violation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private violationService: ViolationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.violationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.violations = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInViolations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Violation) {
        return item.id;
    }
    registerChangeInViolations() {
        this.eventSubscriber = this.eventManager.subscribe('violationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
