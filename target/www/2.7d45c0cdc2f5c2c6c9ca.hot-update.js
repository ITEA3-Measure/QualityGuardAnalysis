webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar quality_guard_configuration_dialog_component_1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration-dialog.component.ts\");\r\nvar quality_guard_configuration_component_1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.component.ts\");\r\nexports.qualityGuardConfigurationRoute = [\r\n    {\r\n        path: 'project/:id/quality-guard-configuration',\r\n        component: quality_guard_configuration_component_1.QualityGuardConfigurationComponent,\r\n        data: {\r\n            authorities: ['ROLE_USER'],\r\n            pageTitle: 'QualityGuardsConfiguration'\r\n        },\r\n        canActivate: [shared_1.UserRouteAccessService]\r\n    }\r\n];\r\nexports.qualityGuardConfigurationPopupRoute = [\r\n    {\r\n        path: 'new-guard',\r\n        component: quality_guard_configuration_dialog_component_1.QualityGuardConfigurationPopupComponent,\r\n        outlet: 'popup',\r\n        data: {\r\n            authorities: ['ROLE_USER'],\r\n            pageTitle: 'QualityGuardsConfiguration'\r\n        },\r\n        canActivate: [shared_1.UserRouteAccessService]\r\n    }\r\n];\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5yb3V0ZS50cz9jYTBlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsNEVBQXNEO0FBQ3RELDRMQUF1RztBQUN2Ryw4S0FBMkY7QUFFOUUsc0NBQThCLEdBQVc7SUFDcEQ7UUFDRSxJQUFJLEVBQUUseUNBQXlDO1FBQy9DLFNBQVMsRUFBRSwwRUFBa0M7UUFDN0MsSUFBSSxFQUFFO1lBQ0osV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO1lBQzFCLFNBQVMsRUFBRSw0QkFBNEI7U0FDeEM7UUFDRCxXQUFXLEVBQUUsQ0FBQywrQkFBc0IsQ0FBQztLQUN0QztDQUNGLENBQUM7QUFFVywyQ0FBbUMsR0FBVztJQUN6RDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSxzRkFBdUM7UUFDbEQsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUU7WUFDSixXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDMUIsU0FBUyxFQUFFLDRCQUE0QjtTQUN4QztRQUNELFdBQVcsRUFBRSxDQUFDLCtCQUFzQixDQUFDO0tBQ3RDO0NBQ0YiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5yb3V0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcbmltcG9ydCB7UXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvblBvcHVwQ29tcG9uZW50fSBmcm9tICcuL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHtRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uQ29tcG9uZW50fSBmcm9tICcuL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25Sb3V0ZTogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICdwcm9qZWN0LzppZC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24nLFxyXG4gICAgY29tcG9uZW50OiBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgZGF0YToge1xyXG4gICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcclxuICAgICAgcGFnZVRpdGxlOiAnUXVhbGl0eUd1YXJkc0NvbmZpZ3VyYXRpb24nXHJcbiAgICB9LFxyXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uUG9wdXBSb3V0ZTogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICduZXctZ3VhcmQnLFxyXG4gICAgY29tcG9uZW50OiBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uUG9wdXBDb21wb25lbnQsXHJcbiAgICBvdXRsZXQ6ICdwb3B1cCcsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfVVNFUiddLFxyXG4gICAgICBwYWdlVGl0bGU6ICdRdWFsaXR5R3VhcmRzQ29uZmlndXJhdGlvbidcclxuICAgIH0sXHJcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXHJcbiAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24ucm91dGUudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.route.ts\n");

/***/ })

})