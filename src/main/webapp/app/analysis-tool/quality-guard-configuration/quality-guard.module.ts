import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardAnalysisSharedModule } from '../../shared';
import {
    QualityGuardService,
    QualityGuardPopupService,
    QualityGuardComponent,
    QualityGuardDialogComponent,
    qualityGuardRoute,
    qualityGuardPopupRoute,
} from './';

import {QualityGuardPopupComponent} from './quality-guard-dialog.component';

const ENTITY_STATES = [
    ...qualityGuardRoute,
    ...qualityGuardPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild( ENTITY_STATES )
    ],
    declarations: [
        QualityGuardComponent,
        QualityGuardDialogComponent,
        QualityGuardPopupComponent
    ],
    entryComponents: [
        QualityGuardComponent,
        QualityGuardDialogComponent,
        QualityGuardPopupComponent
    ],
    providers: [
      QualityGuardService,
      QualityGuardPopupService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardModule {}
