import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { QualityGuardAnalysisQualityGuardModule } from './quality-guard-configuration/quality-guard.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        QualityGuardAnalysisQualityGuardModule
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardEntityModule {}
