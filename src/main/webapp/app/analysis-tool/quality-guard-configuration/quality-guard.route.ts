import {Routes} from '@angular/router';
import { IncidentHistoryDashboardComponent } from './incident-history-dashboard.component';
import { ProjectHistoryComponent } from './project-history.component';
import { QualityGuardDashboardComponent } from './quality-guard-dashboard.component';
import { QualityGuardDeletePopupComponent } from './quality-guard-delete-dialog.component';
import {QualityGuardComponent} from './quality-guard.component';
import {QualityGuardPopupComponent} from './quality-guard-dialog.component';

export const qualityGuardRoute: Routes = [
  {
    path: 'project/:id/quality-guard-configuration',
    component: QualityGuardComponent,
  },
  {
    path: 'project/:id/history',
    component: ProjectHistoryComponent,
  },
  {
    path: 'project/:id/quality-guard-dashboard',
    component: QualityGuardDashboardComponent,
  },
  {
    path: 'project/:id/incident-history-dashboard',
    component: IncidentHistoryDashboardComponent,
  }
];

export const qualityGuardPopupRoute: Routes = [
  {
    path: 'quality-guard-configuration-new',
    component: QualityGuardPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'quality-guard-configuration/:id/edit',
    component: QualityGuardPopupComponent,
    outlet: 'popup'
  },
  {
    path: 'quality-guard-configuration/:id/delete',
    component: QualityGuardDeletePopupComponent,
    outlet: 'popup'
  }
]
