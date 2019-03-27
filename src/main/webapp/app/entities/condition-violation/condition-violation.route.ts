import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { ConditionViolationComponent } from './condition-violation.component';
import { ConditionViolationDetailComponent } from './condition-violation-detail.component';
import { ConditionViolationPopupComponent } from './condition-violation-dialog.component';
import { ConditionViolationDeletePopupComponent } from './condition-violation-delete-dialog.component';

export const conditionViolationRoute: Routes = [
    {
        path: 'condition-violation',
        component: ConditionViolationComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ConditionViolations'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'condition-violation/:id',
        component: ConditionViolationDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ConditionViolations'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const conditionViolationPopupRoute: Routes = [
    {
        path: 'condition-violation-new',
        component: ConditionViolationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ConditionViolations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'condition-violation/:id/edit',
        component: ConditionViolationPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ConditionViolations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'condition-violation/:id/delete',
        component: ConditionViolationDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'ConditionViolations'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
