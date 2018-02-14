import {Routes} from '@angular/router';
import { UserRouteAccessService } from '../../shared';
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
      pageTitle: 'QualityGuards'
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
