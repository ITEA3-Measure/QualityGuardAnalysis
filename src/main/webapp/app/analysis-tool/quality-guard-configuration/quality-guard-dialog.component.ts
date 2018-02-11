import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router'
import {Response} from '@angular/http';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {ResponseWrapper} from '../../shared';

import {Observable} from 'rxjs/Observable';
import {QualityGuard} from './quality-guard.model';
import {GuardCondition} from './guard-condition.model';
import {GuardConditionService} from './guard-condition.service';
import {QualityGuardPopupService} from './quality-guard-popup.service';
import {QualityGuardService} from './quality-guard.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {JhiAlertService, JhiEventManager} from 'ng-jhipster';

@Component({
  selector: 'jhi-quality-guard-configuration-dialog',
  templateUrl: './quality-guard-dialog.component.html'
})
export class QualityGuardDialogComponent implements OnInit {

  form: FormGroup;
  guardConditionsbyProject: Array<GuardCondition>;
  qualityGuard: QualityGuard;
  guardCondition: GuardCondition;
  guardConditionsbyQualityGuard: Array<GuardCondition>;
  guardConditionsData: Array<GuardCondition>;
  isSaving: boolean;
  projectId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private jhiAlertService: JhiAlertService,
    private qualityGuardService: QualityGuardService,
    private guardConditionService: GuardConditionService,
    private eventManager: JhiEventManager,
    public activeModal: NgbActiveModal
  ) {
    this.projectId = +router.parseUrl(router.url).root.children['primary'].segments[1].path;
  }

  ngOnInit() {
    this.loadAll();
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

  loadAll() {
    this.guardConditionService.getGuardConditionsByProjectId(1).subscribe(
      (res: ResponseWrapper) => {
        this.guardConditionsbyProject = res.json;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }

  /**
   * build the initial form
   */
  buildForm() {
    // build our form
    this.form = this.fb.group({
      rules: this.fb.array([
        this.createRule(),
      ])
    });
  }

  createRule() {
    return this.fb.group({
      'measureInstance': [''],
      'operator': [''],
      'warningValue': [null],
      'errorValue': [null],
      'intervalAgregation': ['']
    });
  }

  addRule() {
    const control = <FormArray>this.form.get('rules');
    control.push(this.createRule());
  }

  removeRule(i) {
    const control = <FormArray>this.form.get('rules');
    control.removeAt(i);
  }

  addRuleData() {
    const formArray = this.form.controls.rules as FormArray;
    this.guardConditionsData = formArray.value;
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }
  /**
   * CRUD methods
   */
  save() {
    this.isSaving = true;
    if (this.qualityGuard.id !== undefined) {
      this.subscribeToSaveResponseQualityGuard(
        this.qualityGuardService.update(this.qualityGuard));
    } else {
      this.qualityGuard.measureProjectId = this.projectId;
      this.subscribeToSaveResponseQualityGuard(
        this.qualityGuardService.create(this.qualityGuard));
    }
  }

  private subscribeToSaveResponseQualityGuard(result: Observable<QualityGuard>) {
    result.subscribe((res: QualityGuard) =>
      this.onSaveSuccessQualityGuard(res), (res: Response) => this.onSaveError());
  }

  private subscribeToSaveResponseGuardCondition(result: Observable<GuardCondition>) {
    result.subscribe((res: GuardCondition) =>
      this.onSaveSuccessGuardCondition(res), (res: Response) => this.onSaveError());
  }

  private onSaveSuccessQualityGuard(result: QualityGuard) {
    this.eventManager.broadcast({name: 'qualityGuardListModification', content: 'OK'});
    this.isSaving = false;
    this.activeModal.dismiss(result);
    this.addRuleData();
    for (const item of this.guardConditionsData) {
      item.qualityGuard = result;
      this.subscribeToSaveResponseGuardCondition(
      this.guardConditionService.create(item));
    }
  }

  private onSaveSuccessGuardCondition(result: GuardCondition) {
    this.eventManager.broadcast({name: 'guardConditionListModification', content: 'OK'});
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
    private qualityGuardPopupService: QualityGuardPopupService,
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      if (params['id']) {
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
