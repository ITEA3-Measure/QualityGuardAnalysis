import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { QualityGuard } from './quality-guard.model';
import { QualityGuardService } from './quality-guard.service';

@Injectable()
export class QualityGuardPopupService {
    private ngbModalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
        private router: Router,
        private qualityGuardConfigurationService: QualityGuardService

    ) {
        this.ngbModalRef = null;
    }

    open(component: Component, id?: number | any): Promise<NgbModalRef> {
        return new Promise<NgbModalRef>((resolve, reject) => {
            const isOpen = this.ngbModalRef !== null;
            if (isOpen) {
                resolve(this.ngbModalRef);
            }

            if (id) {
                this.qualityGuardConfigurationService.find(id).subscribe((qualityGuardConfiguration) => {
                    this.ngbModalRef = this.qualityGuardModalRef(component, qualityGuardConfiguration);
                    resolve(this.ngbModalRef);
                });
            } else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(() => {
                    this.ngbModalRef = this.qualityGuardModalRef(component, new QualityGuard());
                    resolve(this.ngbModalRef);
                }, 0);
            }
        });
    }

    qualityGuardModalRef(component: Component, qualityGuardConfiguration: QualityGuard): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.qualityGuardConfiguration = qualityGuardConfiguration;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true, queryParamsHandling: 'merge' });
            this.ngbModalRef = null;
        });
        return modalRef;
    }
}
