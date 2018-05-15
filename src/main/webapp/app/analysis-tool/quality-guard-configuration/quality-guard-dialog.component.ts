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
  allFieldNames: Array<any> = [];
  isSaving: boolean;
  projectId: number;
  measures: Array<any>= [];

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
  }

  loadAllData() {
    this.guardConditionService.getGuardConditionsByProjectId(this.projectId).subscribe(
      (res: ResponseWrapper) => {
        this.guardConditionsbyProject = res.json;
        if (this.qualityGuard.id !== undefined) {
          this.editRuleData();
        } else {
          this.addRule();
        }
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }

  retrieveMeasureInstanceType() {
    this.guardConditionService.getMeasureInstanceType(this.projectId).subscribe(
      (res: ResponseWrapper) => {
        this.allMeasureInstanceType = res.json;
        this.measures = this.formatMeasuresStructure();
      },
      (res: ResponseWrapper) => this.onError(res.json)
    )
  }

  formatMeasuresStructure() {
    const measures: Array<any> = [];
    this.allMeasureInstanceType.forEach((measure) => {
      measure.fields.forEach((field) => {
        const measureObject = {
            'measureInstance': measure.measureInstance,
            'field': field
        };
        measures.push(measureObject);
      })
    });
    return measures;
  }

  buildForm() {
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

  editRuleData() {
    const formArray = this.form.controls.rules as FormArray;
    this.guardConditionsbyQualityGuard.forEach((x) => {
      formArray.push(this.fb.group({
        id: x.id,
        measureInstance: x.measureInstance + '::' + x.measureField,
        operator: x.operator,
        warningValue: x.warningValue,
        errorValue: x.errorValue,
        intervalAgregation: x.intervalAgregation
      }))
    });
  }

  saveRulesData() {
    const formArray = this.form.controls.rules as FormArray;
    formArray.value.forEach((guard) => {
      formArray.push(this.fb.group({
        id: guard.id,
        measureInstance: guard.measureInstance.split('::', 2)[0],
        measureField: guard.measureInstance.split('::', 2)[1],
        operator: guard.operator,
        warningValue: guard.warningValue,
        errorValue: guard.errorValue,
        intervalAgregation: guard.intervalAgregation
      }));
      formArray.removeAt(0);
    });
  }

  clear() {
    this.activeModal.dismiss('cancel');
  }

  save() {
    this.isSaving = true;
    const formArray = this.form.controls.rules as FormArray;
    this.saveRulesData();
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
      })
    });
  }

  private subscribeToSaveResponseQualityGuard(result: Observable<QualityGuard>) {
    result.subscribe((res: QualityGuard) =>
      this.onSaveSuccessQualityGuard(res), (res: Response) => this.onSaveError());
  }

  private onSaveSuccessQualityGuard(result: QualityGuard) {
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
