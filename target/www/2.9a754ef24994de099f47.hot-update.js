webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar core_2 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar _1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/index.ts\");\r\nvar quality_guard_dialog_component_1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-dialog.component.ts\");\r\nvar ENTITY_STATES = _1.qualityGuardRoute.concat(_1.qualityGuardPopupRoute);\r\nvar QualityGuardModule = /** @class */ (function () {\r\n    function QualityGuardModule() {\r\n    }\r\n    QualityGuardModule = __decorate([\r\n        core_2.NgModule({\r\n            imports: [\r\n                shared_1.QualityGuardAnalysisSharedModule,\r\n                router_1.RouterModule.forChild(ENTITY_STATES)\r\n            ],\r\n            declarations: [\r\n                _1.QualityGuardComponent,\r\n                _1.QualityGuardDialogComponent,\r\n                quality_guard_dialog_component_1.QualityGuardPopupComponent\r\n            ],\r\n            entryComponents: [\r\n                _1.QualityGuardComponent,\r\n                _1.QualityGuardDialogComponent,\r\n                quality_guard_dialog_component_1.QualityGuardPopupComponent\r\n            ],\r\n            providers: [\r\n                _1.QualityGuardService,\r\n                _1.QualityGuardPopupService\r\n            ],\r\n            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]\r\n        })\r\n    ], QualityGuardModule);\r\n    return QualityGuardModule;\r\n}());\r\nexports.QualityGuardModule = QualityGuardModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQubW9kdWxlLnRzP2Q4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4RUFBdUQ7QUFDdkQsOEVBQXlDO0FBQ3pDLG9GQUErQztBQUUvQyw0RUFBZ0U7QUFDaEUseUdBT1k7QUFFWixnS0FBNEU7QUFFNUUsSUFBTSxhQUFhLEdBQ1osb0JBQWlCLFFBQ2pCLHlCQUFzQixDQUM1QixDQUFDO0FBdUJGO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixrQkFBa0I7UUFyQjlCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx5Q0FBZ0M7Z0JBQ2hDLHFCQUFZLENBQUMsUUFBUSxDQUFFLGFBQWEsQ0FBRTthQUN6QztZQUNELFlBQVksRUFBRTtnQkFDVix3QkFBcUI7Z0JBQ3JCLDhCQUEyQjtnQkFDM0IsMkRBQTBCO2FBQzdCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLHdCQUFxQjtnQkFDckIsOEJBQTJCO2dCQUMzQiwyREFBMEI7YUFDN0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Qsc0JBQW1CO2dCQUNuQiwyQkFBd0I7YUFDekI7WUFDRCxPQUFPLEVBQUUsQ0FBQyw2QkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csa0JBQWtCLENBQUc7SUFBRCx5QkFBQztDQUFBO0FBQXJCLGdEQUFrQiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYW5hbHlzaXMtdG9vbC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24vcXVhbGl0eS1ndWFyZC5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBRdWFsaXR5R3VhcmRBbmFseXNpc1NoYXJlZE1vZHVsZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcbmltcG9ydCB7XHJcbiAgICBRdWFsaXR5R3VhcmRTZXJ2aWNlLFxyXG4gICAgUXVhbGl0eUd1YXJkUG9wdXBTZXJ2aWNlLFxyXG4gICAgUXVhbGl0eUd1YXJkQ29tcG9uZW50LFxyXG4gICAgUXVhbGl0eUd1YXJkRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgcXVhbGl0eUd1YXJkUm91dGUsXHJcbiAgICBxdWFsaXR5R3VhcmRQb3B1cFJvdXRlLFxyXG59IGZyb20gJy4vJztcclxuXHJcbmltcG9ydCB7UXVhbGl0eUd1YXJkUG9wdXBDb21wb25lbnR9IGZyb20gJy4vcXVhbGl0eS1ndWFyZC1kaWFsb2cuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IEVOVElUWV9TVEFURVMgPSBbXHJcbiAgICAuLi5xdWFsaXR5R3VhcmRSb3V0ZSxcclxuICAgIC4uLnF1YWxpdHlHdWFyZFBvcHVwUm91dGUsXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFF1YWxpdHlHdWFyZEFuYWx5c2lzU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZCggRU5USVRZX1NUQVRFUyApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUXVhbGl0eUd1YXJkQ29tcG9uZW50LFxyXG4gICAgICAgIFF1YWxpdHlHdWFyZERpYWxvZ0NvbXBvbmVudCxcclxuICAgICAgICBRdWFsaXR5R3VhcmRQb3B1cENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgICAgIFF1YWxpdHlHdWFyZENvbXBvbmVudCxcclxuICAgICAgICBRdWFsaXR5R3VhcmREaWFsb2dDb21wb25lbnQsXHJcbiAgICAgICAgUXVhbGl0eUd1YXJkUG9wdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgUXVhbGl0eUd1YXJkU2VydmljZSxcclxuICAgICAgUXVhbGl0eUd1YXJkUG9wdXBTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWFsaXR5R3VhcmRNb2R1bGUge31cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard.module.ts\n");

/***/ })

})