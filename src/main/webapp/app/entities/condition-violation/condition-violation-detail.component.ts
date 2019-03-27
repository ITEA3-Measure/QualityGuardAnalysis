import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { ConditionViolation } from './condition-violation.model';
import { ConditionViolationService } from './condition-violation.service';

@Component({
    selector: 'jhi-condition-violation-detail',
    templateUrl: './condition-violation-detail.component.html'
})
export class ConditionViolationDetailComponent implements OnInit, OnDestroy {

    conditionViolation: ConditionViolation;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private conditionViolationService: ConditionViolationService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInConditionViolations();
    }

    load(id) {
        this.conditionViolationService.find(id).subscribe((conditionViolation) => {
            this.conditionViolation = conditionViolation;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInConditionViolations() {
        this.eventSubscriber = this.eventManager.subscribe(
            'conditionViolationListModification',
            (response) => this.load(this.conditionViolation.id)
        );
    }
}
