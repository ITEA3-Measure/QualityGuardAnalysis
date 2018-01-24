import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardAnalysisSharedModule } from '../../shared';
import {
    GuardConditionService,
    GuardConditionPopupService,
    GuardConditionComponent,
    GuardConditionDetailComponent,
    GuardConditionDialogComponent,
    GuardConditionPopupComponent,
    GuardConditionDeletePopupComponent,
    GuardConditionDeleteDialogComponent,
    guardConditionRoute,
    guardConditionPopupRoute,
} from './';

const ENTITY_STATES = [
    ...guardConditionRoute,
    ...guardConditionPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        GuardConditionComponent,
        GuardConditionDetailComponent,
        GuardConditionDialogComponent,
        GuardConditionDeleteDialogComponent,
        GuardConditionPopupComponent,
        GuardConditionDeletePopupComponent,
    ],
    entryComponents: [
        GuardConditionComponent,
        GuardConditionDialogComponent,
        GuardConditionPopupComponent,
        GuardConditionDeleteDialogComponent,
        GuardConditionDeletePopupComponent,
    ],
    providers: [
        GuardConditionService,
        GuardConditionPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisGuardConditionModule {}
