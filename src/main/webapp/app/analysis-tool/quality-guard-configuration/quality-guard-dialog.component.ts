import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ResponseWrapper } from '../../shared';

import { Observable } from 'rxjs/Observable';
import { QualityGuard } from './quality-guard.model';
import { GuardCondition } from './guard-condition.model';
import { GuardConditionService } from './guard-condition.service';
import { QualityGuardService } from './quality-guard.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';
import { QualityGuardPopupService } from './quality-guard-popup.service';

@Component({
    selector: 'jhi-quality-guard-configuration-dialog',
    templateUrl: './quality-guard-dialog.component.html'
})
export class QualityGuardDialogComponent implements OnInit {

    form: FormGroup;
    qualityGuard: QualityGuard;
    guardCondition: GuardCondition = {};
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private jhiAlertService: JhiAlertService,
        private qualityGuardService: QualityGuardService,
        private guardConditionService: GuardConditionService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.buildForm();
        this.isSaving = false;
        this.guardConditionService
              .query({filter: 'qualityguard-is-null'})
              .subscribe((res: ResponseWrapper) => {
  //                if (!this.qualityGuard.violation || !this.qualityGuard.violation.id) {
  //                    this.violations = res.json;
  //                } else {
  //                    this.violationService
  //                        .find(this.qualityGuard.violation.id)
  //                        .subscribe((subRes: Violation) => {
  //                            this.violations = [subRes].concat(res.json);
  //                        }, (subRes: ResponseWrapper) => this.onError(subRes.json));
  //                }
              }, (res: ResponseWrapper) => this.onError(res.json));
    }

    /**
     * build the initial form
     */
    buildForm() {
      // build our form
      this.form = this.fb.group({
        rules: this.fb.array([
          this.createRule()
        ])
      });
    }

    createRule() {
      return this.fb.group({
        measureField: [''],
        operator: [''],
        warningValue: [''],
        errorValue: ['']
      });
    }

    addRule() {
      const rules = <FormArray>this.form.get('rules');
      rules.push(this.createRule());
    }

    removeRule(i) {
      const rules = <FormArray>this.form.get('rules');
      rules.removeAt(i);
    }

    clear() {
      this.activeModal.dismiss('cancel');
    }

    save() {
      this.isSaving = true;
      if (this.qualityGuard.id !== undefined) {
        this.subscribeToSaveResponse(
          this.qualityGuardService.update(this.qualityGuard));
      } else {
        this.subscribeToSaveResponse(
          this.qualityGuardService.create(this.qualityGuard));
      }
    }

    private subscribeToSaveResponse(result: Observable<QualityGuard>) {
      result.subscribe((res: QualityGuard) =>
        this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: QualityGuard) {
      this.eventManager.broadcast({name: 'qualityGuardListModification', content: 'OK'});
      this.isSaving = false;
      this.activeModal.dismiss(result);
    }

    private onSaveError() {
      this.isSaving = false;
    }

    private onError(error: any) {
      this.jhiAlertService.error(error.message, null, null);
    }

    trackViolationById(index: number, item: GuardCondition) {
      return item.id;
    }

}

@Component({
    selector: 'jhi-quality-guard-configuration-popup',
    template: ''
})
export class QualityGuardPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private qualityGuardPopupService: QualityGuardPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.qualityGuardPopupService
                    .open(QualityGuardDialogComponent as Component, params['id']);
            } else {
                this.qualityGuardPopupService
                    .open(QualityGuardDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
