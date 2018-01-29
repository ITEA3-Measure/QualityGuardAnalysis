import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardConfigurationService, QualityGuardConfigurationComponent, qualityGuardConfigurationRoute } from './';

@NgModule({
imports: [
        RouterModule.forRoot([ qualityGuardConfigurationRoute ], { useHash: true })
    ],
    declarations: [
        QualityGuardConfigurationComponent,
    ],
    entryComponents: [
    ],
    providers: [
      QualityGuardConfigurationService
    ]
})
export class QualityGuardConfigurationModule {}
