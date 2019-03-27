import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardAnalysisSharedModule } from '../../shared';
import {
    ConditionViolationService,
    ConditionViolationPopupService,
    ConditionViolationComponent,
    ConditionViolationDetailComponent,
    ConditionViolationDialogComponent,
    ConditionViolationPopupComponent,
    ConditionViolationDeletePopupComponent,
    ConditionViolationDeleteDialogComponent,
    conditionViolationRoute,
    conditionViolationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...conditionViolationRoute,
    ...conditionViolationPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ConditionViolationComponent,
        ConditionViolationDetailComponent,
        ConditionViolationDialogComponent,
        ConditionViolationDeleteDialogComponent,
        ConditionViolationPopupComponent,
        ConditionViolationDeletePopupComponent,
    ],
    entryComponents: [
        ConditionViolationComponent,
        ConditionViolationDialogComponent,
        ConditionViolationPopupComponent,
        ConditionViolationDeleteDialogComponent,
        ConditionViolationDeletePopupComponent,
    ],
    providers: [
        ConditionViolationService,
        ConditionViolationPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisConditionViolationModule {}
