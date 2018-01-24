import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { QualityGuardComponent } from './quality-guard.component';
import { QualityGuardDetailComponent } from './quality-guard-detail.component';
import { QualityGuardPopupComponent } from './quality-guard-dialog.component';
import { QualityGuardDeletePopupComponent } from './quality-guard-delete-dialog.component';

export const qualityGuardRoute: Routes = [
    {
        path: 'quality-guard',
        component: QualityGuardComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'QualityGuards'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'quality-guard/:id',
        component: QualityGuardDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'QualityGuards'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const qualityGuardPopupRoute: Routes = [
    {
        path: 'quality-guard-new',
        component: QualityGuardPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'QualityGuards'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'quality-guard/:id/edit',
        component: QualityGuardPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'QualityGuards'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'quality-guard/:id/delete',
        component: QualityGuardDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'QualityGuards'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
