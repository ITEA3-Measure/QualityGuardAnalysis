import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QualityGuardAnalysisSharedModule } from '../../shared';
import { ConditionViolationService } from './condition-violation.service';
import { GuardConditionService } from './guard-condition.service';
import { IncidentHistoryDashboardComponent } from './incident-history-dashboard.component';
import { ProjectHistoryComponent } from './project-history.component';
import { QualityGuardDashboardComponent } from './quality-guard-dashboard.component';
import { QualityGuardPopupComponent, QualityGuardDialogComponent} from './quality-guard-dialog.component';
import { QualityGuardDeleteDialogComponent, QualityGuardDeletePopupComponent } from './quality-guard-delete-dialog.component';
import { QualityGuardIncidentHistoryService } from './quality-guard-incident-history.service';
import { QualityGuardPopupService } from './quality-guard-popup.service';
import { QualityGuardSchedulingService } from './quality-guard-scheduling.service';
import { QualityGuardComponent } from './quality-guard.component';
import { qualityGuardRoute, qualityGuardPopupRoute } from './quality-guard.route';
import { QualityGuardService } from './quality-guard.service';
import { ViolationService } from './violation.service';

const ENTITY_STATES = [
    ...qualityGuardRoute,
    ...qualityGuardPopupRoute,
];

@NgModule({
    imports: [
        QualityGuardAnalysisSharedModule,
        RouterModule.forChild( ENTITY_STATES ),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        QualityGuardComponent,
        QualityGuardDialogComponent,
        QualityGuardPopupComponent,
        QualityGuardDeleteDialogComponent,
        QualityGuardDeletePopupComponent,
        ProjectHistoryComponent,
        QualityGuardDashboardComponent,
        IncidentHistoryDashboardComponent,
    ],
    entryComponents: [
        QualityGuardComponent,
        QualityGuardDialogComponent,
        QualityGuardPopupComponent,
        QualityGuardDeleteDialogComponent,
        QualityGuardDeletePopupComponent
    ],
    providers: [
        QualityGuardService,
        QualityGuardPopupService,
        GuardConditionService,
        ViolationService,
        ConditionViolationService,
        QualityGuardSchedulingService,
        QualityGuardIncidentHistoryService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualityGuardAnalysisQualityGuardModule {}
