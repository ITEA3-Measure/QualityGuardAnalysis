import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { GuardConditionComponent } from './guard-condition.component';
import { GuardConditionDetailComponent } from './guard-condition-detail.component';
import { GuardConditionPopupComponent } from './guard-condition-dialog.component';
import { GuardConditionDeletePopupComponent } from './guard-condition-delete-dialog.component';

export const guardConditionRoute: Routes = [
    {
        path: 'guard-condition',
        component: GuardConditionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'GuardConditions'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'guard-condition/:id',
        component: GuardConditionDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'GuardConditions'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const guardConditionPopupRoute: Routes = [
    {
        path: 'guard-condition-new',
        component: GuardConditionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'GuardConditions'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'guard-condition/:id/edit',
        component: GuardConditionPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'GuardConditions'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'guard-condition/:id/delete',
        component: GuardConditionDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'GuardConditions'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
