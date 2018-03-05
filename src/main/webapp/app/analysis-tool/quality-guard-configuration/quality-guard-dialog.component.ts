import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Response} from '@angular/http';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {ResponseWrapper} from '../../shared';

import {Observable} from 'rxjs/Observable';
import {QualityGuard} from './quality-guard.model';
import {GuardCondition} from './guard-condition.model';
import {GuardConditionService} from './guard-condition.service';
import {MeasureInstanceType} from './measure-instance-type.model';
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
  removedGuardConditionRules: Array<GuardCondition>;
  guardConditionsbyQualityGuard: Array<GuardCondition>;
  allMeasureInstanceType: Array<MeasureInstanceType>;
  allFieldNames: Array<string> = [];
  isSaving: boolean;
  projectId: number;

  constructor(
    private router: Router,
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
    this.loadAllData();
    this.retrieveMeasureInstanceType();
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

  loadAllData() {
    this.guardConditionService.getGuardConditionsByProjectId(this.projectId).subscribe(
      (res: ResponseWrapper) => {
        this.guardConditionsbyProject = res.json;
        this.editRuleData();
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }

  retrieveMeasureInstanceType() {
    this.guardConditionService.getMeasureInstanceType().subscribe(
      (res: ResponseWrapper) => {
        this.allMeasureInstanceType = res.json;
      },
      (res: ResponseWrapper) => this.onError(res.json)
    )
  }

  /**
   * build the initial form
   */
  buildForm() {
    // build our form
    this.form = this.fb.group({
      rules: this.fb.array([
        // this.createRule(),
      ])
    });
  }

  createRule() {
    return this.fb.group({
      'id': [null],
      'measureInstance': [''],
      'measureField': [''],
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
    this.removedGuardConditionRules = this.removedGuardConditionRules || [];
    this.removedGuardConditionRules.push(control.value[i] as GuardCondition);
    control.removeAt(i);
  }

  //  addRuleData(result: QualityGuard) {
  //    const formArray = this.form.controls.rules as FormArray;
  //    let guardConditionsData: Array<GuardCondition>;
  //    guardConditionsData = formArray.value;
  //    this.qualityGuard.guardConditions = guardConditionsData;
  //    for (const item of guardConditionsData) {
  //      item.qualityGuard = result;
  //      this.subscribeToSaveResponseGuardCondition(
  //      this.guardConditionService.create(item));
  //    }
  //  }

  //  updateRuleData(result: QualityGuard) {
  //    const formArray = this.form.controls.rules as FormArray;
  //    let guardConditionsData: Array<GuardCondition>;
  //    guardConditionsData = formArray.value;
  //    // this.qualityGuard.guardConditions = guardConditionsData;
  //    for (const item of guardConditionsData) {
  //      item.qualityGuard = result;
  //      this.subscribeToSaveResponseGuardCondition(
  //      this.guardConditionService.update(item));
  //    }
  //  }

  editRuleData() {
    const formArray = this.form.controls.rules as FormArray;
    this.guardConditionsbyQualityGuard.forEach((x) => {
      formArray.push(this.fb.group({
        id: x.id,
        measureInstance: x.measureInstance,
        measureField: x.measureField,
        operator: x.operator,
        warningValue: x.warningValue,
        errorValue: x.errorValue,
        intervalAgregation: x.intervalAgregation
      }))
    });
  }

  dropDownChanged(val: any) {
    for (const obj of this.allMeasureInstanceType) {
      if (val === obj.instanceName) {
        this.allFieldNames = obj.fields;
        break;
      } else {
        this.allFieldNames = [];
      }
    }
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }
  /**
   * CRUD methods
   */
  save() {
    this.isSaving = true;
    const formArray = this.form.controls.rules as FormArray;
    this.qualityGuard.guardConditions = formArray.value;
    if (this.qualityGuard.id !== undefined) {
      this.subscribeToSaveResponseQualityGuard(
        this.qualityGuardService.update(this.qualityGuard));
    } else {
      this.qualityGuard.measureProjectId = this.projectId;
      this.subscribeToSaveResponseQualityGuard(
        this.qualityGuardService.create(this.qualityGuard));
    }
    if (this.removedGuardConditionRules !== undefined) {
      this.removeGuardConditionRules();
      console.log('remove GC')
    }
  }

  removeGuardConditionRules() {
    this.removedGuardConditionRules.forEach((guardCondition) => {
      this.guardConditionService.delete(guardCondition.id).subscribe((response) => {
        this.eventManager.broadcast({
          name: 'guardConditionListModification',
          content: 'Deleted a guardCondition'
        });
        // this.activeModal.dismiss(false);
      })
    });
  }

  private subscribeToSaveResponseQualityGuard(result: Observable<QualityGuard>) {
    result.subscribe((res: QualityGuard) =>
      this.onSaveSuccessQualityGuard(res), (res: Response) => this.onSaveError());
  }

//  private subscribeToSaveResponseGuardCondition(result: Observable<GuardCondition>) {
//    result.subscribe((res: GuardCondition) =>
//      this.onSaveSuccessGuardCondition(res), (res: Response) => this.onSaveError());
//  }

  private onSaveSuccessQualityGuard(result: QualityGuard) {
    this.eventManager.broadcast({name: 'qualityGuardListModification', content: 'OK'});
    this.isSaving = false;
    this.activeModal.dismiss(result);
    //    if (this.qualityGuard.id !== undefined) {
    //      this.updateRuleData(result);
    //    } else {
    //      this.addRuleData(result);
    //    }
  }

//  private onSaveSuccessGuardCondition(result: GuardCondition) {
//    this.eventManager.broadcast({name: 'guardConditionListModification', content: 'OK'});
//    this.isSaving = false;
//    this.activeModal.dismiss(result);
//  }

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
