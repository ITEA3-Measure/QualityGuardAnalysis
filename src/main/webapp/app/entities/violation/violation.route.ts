import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ViolationComponent } from './violation.component';
import { ViolationDetailComponent } from './violation-detail.component';
import { ViolationPopupComponent } from './violation-dialog.component';
import { ViolationDeletePopupComponent } from './violation-delete-dialog.component';

export const violationRoute: Routes = [
    {
        path: 'violation',
        component: ViolationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Violations'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'violation/:id',
        component: ViolationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Violations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const violationPopupRoute: Routes = [
    {
        path: 'violation-new',
        component: ViolationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Violations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'violation/:id/edit',
        component: ViolationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Violations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'violation/:id/delete',
        component: ViolationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Violations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
