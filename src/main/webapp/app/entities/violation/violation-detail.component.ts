import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { Violation } from './violation.model';
import { ViolationService } from './violation.service';

@Component({
    selector: 'jhi-violation-detail',
    templateUrl: './violation-detail.component.html'
})
export class ViolationDetailComponent implements OnInit, OnDestroy {

    violation: Violation;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private violationService: ViolationService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInViolations();
    }

    load(id) {
        this.violationService.find(id).subscribe((violation) => {
            this.violation = violation;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInViolations() {
        this.eventSubscriber = this.eventManager.subscribe(
            'violationListModification',
            (response) => this.load(this.violation.id)
        );
    }
}
