import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { QualityGuardAnalysisQualityGuardModule } from './quality-guard/quality-guard.module';
import { QualityGuardAnalysisGuardConditionModule } from './guard-condition/guard-condition.module';
import { QualityGuardAnalysisViolationModule } from './violation/violation.module';
import { QualityGuardAnalysisConditionViolationModule } from './condition-violation/condition-violation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        QualityGuardAnalysisQualityGuardModule,
        QualityGuardAnalysisGuardConditionModule,
        QualityGuardAnalysisViolationModule,
        QualityGuardAnalysisConditionViolationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisEntityModule {}
