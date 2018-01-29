import { Route } from '@angular/router';

import { QualityGuardConfigurationComponent } from './';

export const qualityGuardConfigurationRoute: Route = {
    path: 'project/:id/quality-guard-configuration',
    component: QualityGuardConfigurationComponent,
    data: {
        authorities: [],
        pageTitle: 'QualityGuardConfiguration'
    }
};
