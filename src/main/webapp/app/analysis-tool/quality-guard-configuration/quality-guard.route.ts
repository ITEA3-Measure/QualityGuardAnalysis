import {Routes} from '@angular/router';

import { UserRouteAccessService } from '../../shared';
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
    path: 'new-guard',
    component: QualityGuardPopupComponent,
    outlet: 'popup',
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'QualityGuardsConfiguration'
    },
    canActivate: [UserRouteAccessService]
  }
]
