import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';

@Component({
    selector: 'jhi-quality-guard-detail',
    templateUrl: './quality-guard-detail.component.html'
})
export class QualityGuardDetailComponent implements OnInit, OnDestroy {

    qualityGuard: QualityGuard;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private qualityGuardService: QualityGuardService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInQualityGuards();
    }

    load(id) {
        this.qualityGuardService.find(id).subscribe((qualityGuard) => {
            this.qualityGuard = qualityGuard;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInQualityGuards() {
        this.eventSubscriber = this.eventManager.subscribe(
            'qualityGuardListModification',
            (response) => this.load(this.qualityGuard.id)
        );
    }
}
