import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    QualityGuardAnalysisSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        QualityGuardAnalysisSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        QualityGuardAnalysisSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class QualityGuardAnalysisSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
