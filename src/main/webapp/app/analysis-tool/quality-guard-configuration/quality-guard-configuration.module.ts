import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QualityGuardConfigurationComponent, qualityGuardConfigurationRoute } from './';

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
    ]
})
export class QualityGuardConfigurationModule {}
