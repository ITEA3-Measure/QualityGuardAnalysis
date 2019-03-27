import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardAnalysisSharedModule } from '../../shared';
import {
    QualityGuardService,
    QualityGuardPopupService,
    QualityGuardComponent,
    QualityGuardDetailComponent,
    QualityGuardDialogComponent,
    QualityGuardPopupComponent,
    QualityGuardDeletePopupComponent,
    QualityGuardDeleteDialogComponent,
    qualityGuardRoute,
    qualityGuardPopupRoute,
} from './';

const ENTITY_STATES = [
    ...qualityGuardRoute,
    ...qualityGuardPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        QualityGuardComponent,
        QualityGuardDetailComponent,
        QualityGuardDialogComponent,
        QualityGuardDeleteDialogComponent,
        QualityGuardPopupComponent,
        QualityGuardDeletePopupComponent,
    ],
    entryComponents: [
        QualityGuardComponent,
        QualityGuardDialogComponent,
        QualityGuardPopupComponent,
        QualityGuardDeleteDialogComponent,
        QualityGuardDeletePopupComponent,
    ],
    providers: [
        QualityGuardService,
        QualityGuardPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisQualityGuardModule {}
