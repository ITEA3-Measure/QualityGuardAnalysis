import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';
import './vendor.ts';
import { QualityGuardAnalysisSharedModule, UserRouteAccessService } from './shared';
import { QualityGuardAnalysisAppRoutingModule} from './app-routing.module';
import { QualityGuardAnalysisHomeModule } from './home/home.module';
import { QualityGuardAnalysisAdminModule } from './admin/admin.module';
import { QualityGuardAnalysisAccountModule } from './account/account.module';
import { QualityGuardEntityModule } from './analysis-tool/entity.module';
import { QualityGuardAnalysisEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        QualityGuardAnalysisAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        QualityGuardAnalysisSharedModule,
        QualityGuardAnalysisHomeModule,
        QualityGuardAnalysisAdminModule,
        QualityGuardAnalysisAccountModule,
        QualityGuardAnalysisEntityModule,
        QualityGuardEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],

    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class QualityGuardAnalysisAppModule {}
