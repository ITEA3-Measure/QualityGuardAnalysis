import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ConditionViolation } from './condition-violation.model';
import { ConditionViolationService } from './condition-violation.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-condition-violation',
    templateUrl: './condition-violation.component.html'
})
export class ConditionViolationComponent implements OnInit, OnDestroy {
conditionViolations: ConditionViolation[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private conditionViolationService: ConditionViolationService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.conditionViolationService.query().subscribe(
            (res: ResponseWrapper) => {
                this.conditionViolations = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInConditionViolations();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ConditionViolation) {
        return item.id;
    }
    registerChangeInConditionViolations() {
        this.eventSubscriber = this.eventManager.subscribe('conditionViolationListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
