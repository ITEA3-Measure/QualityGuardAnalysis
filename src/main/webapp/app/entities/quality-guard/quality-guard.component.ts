import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-quality-guard',
    templateUrl: './quality-guard.component.html'
})
export class QualityGuardComponent implements OnInit, OnDestroy {
qualityGuards: QualityGuard[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private qualityGuardService: QualityGuardService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.qualityGuardService.query().subscribe(
            (res: ResponseWrapper) => {
                this.qualityGuards = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInQualityGuards();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: QualityGuard) {
        return item.id;
    }
    registerChangeInQualityGuards() {
        this.eventSubscriber = this.eventManager.subscribe('qualityGuardListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
