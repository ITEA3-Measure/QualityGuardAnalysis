import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardAnalysisSharedModule } from '../../shared';
import {
    ViolationService,
    ViolationPopupService,
    ViolationComponent,
    ViolationDetailComponent,
    ViolationDialogComponent,
    ViolationPopupComponent,
    ViolationDeletePopupComponent,
    ViolationDeleteDialogComponent,
    violationRoute,
    violationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...violationRoute,
    ...violationPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ViolationComponent,
        ViolationDetailComponent,
        ViolationDialogComponent,
        ViolationDeleteDialogComponent,
        ViolationPopupComponent,
        ViolationDeletePopupComponent,
    ],
    entryComponents: [
        ViolationComponent,
        ViolationDialogComponent,
        ViolationPopupComponent,
        ViolationDeleteDialogComponent,
        ViolationDeletePopupComponent,
    ],
    providers: [
        ViolationService,
        ViolationPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisViolationModule {}
