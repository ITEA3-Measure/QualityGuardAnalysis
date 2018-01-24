import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';

@Component({
    selector: 'jhi-guard-condition-detail',
    templateUrl: './guard-condition-detail.component.html'
})
export class GuardConditionDetailComponent implements OnInit, OnDestroy {

    guardCondition: GuardCondition;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private guardConditionService: GuardConditionService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInGuardConditions();
    }

    load(id) {
        this.guardConditionService.find(id).subscribe((guardCondition) => {
            this.guardCondition = guardCondition;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInGuardConditions() {
        this.eventSubscriber = this.eventManager.subscribe(
            'guardConditionListModification',
            (response) => this.load(this.guardCondition.id)
        );
    }
}
