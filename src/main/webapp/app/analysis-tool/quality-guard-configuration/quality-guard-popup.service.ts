import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseWrapper } from '../../shared';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';
import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { JhiAlertService } from 'ng-jhipster';

@Injectable()
export class QualityGuardPopupService {

    private ngbModalRef: NgbModalRef;
    guardConditionsbyQualityGuard: Array<GuardCondition> = [];
    projectId: number;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private qualityGuardService: QualityGuardService,
        private guardConditionService: GuardConditionService,
        private jhiAlertService: JhiAlertService,
    ) {
        this.ngbModalRef = null;
        this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }
            if (id) {
                this.qualityGuardService.find(id).subscribe((qualityGuard) => {
                      this.guardConditionsbyQualityGuard = qualityGuard.guardConditions;
                      this.ngbModalRef = this.qualityGuardModalRef(component, qualityGuard, this.guardConditionsbyQualityGuard);
                      resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.qualityGuardModalRef(component, new QualityGuard(), [new GuardCondition()]);
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    qualityGuardModalRef(component: Component, qualityGuard: QualityGuard, guardConditions: Array<GuardCondition>): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.qualityGuard = qualityGuard;
        // modalRef.componentInstance.guardCondition = guardCondition;
        modalRef.componentInstance.guardConditionsbyQualityGuard = guardConditions;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }

    private onError(error) {
      this.jhiAlertService.error(error.message, null, null);
    }
}
