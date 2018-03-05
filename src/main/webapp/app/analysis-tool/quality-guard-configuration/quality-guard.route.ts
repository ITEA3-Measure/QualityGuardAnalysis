import {Routes} from '@angular/router';
import { UserRouteAccessService } from '../../shared';
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
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardsConfiguration'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'project/:id/history',
    component: ProjectHistoryComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'ProjectHistory'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'project/:id/quality-guard-dashboard',
    component: QualityGuardDashboardComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardDashboard'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'project/:id/incident-history-dashboard',
    component: IncidentHistoryDashboardComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'IncidentHistoryDashboard'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const qualityGuardPopupRoute: Routes = [
  {
    path: 'quality-guard-configuration-new',
    component: QualityGuardPopupComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardsConfiguration'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'quality-guard-configuration/:id/edit',
    component: QualityGuardPopupComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardsConfiguration'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  },
  {
    path: 'quality-guard-configuration/:id/delete',
    component: QualityGuardDeletePopupComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardsConfiguration'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
]
