import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-guard-condition',
    templateUrl: './guard-condition.component.html'
})
export class GuardConditionComponent implements OnInit, OnDestroy {
guardConditions: GuardCondition[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private guardConditionService: GuardConditionService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.guardConditionService.query().subscribe(
            (res: ResponseWrapper) => {
                this.guardConditions = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInGuardConditions();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: GuardCondition) {
        return item.id;
    }
    registerChangeInGuardConditions() {
        this.eventSubscriber = this.eventManager.subscribe('guardConditionListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
