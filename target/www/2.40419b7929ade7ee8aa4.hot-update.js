webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar _1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/index.ts\");\r\nvar quality_guard_configuration_route_1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.route.ts\");\r\nvar ENTITY_STATES = _1.qualityGuardConfigurationRoute.concat(quality_guard_configuration_route_1.qualityGuardConfigurationPopupRoute);\r\nvar QualityGuardConfigurationModule = /** @class */ (function () {\r\n    function QualityGuardConfigurationModule() {\r\n    }\r\n    QualityGuardConfigurationModule = __decorate([\r\n        core_1.NgModule({\r\n            imports: [\r\n                router_1.RouterModule.forChild(ENTITY_STATES)\r\n            ],\r\n            declarations: [\r\n                _1.QualityGuardConfigurationComponent,\r\n                _1.QualityGuardConfigurationDialogComponent\r\n            ],\r\n            entryComponents: [],\r\n            providers: [\r\n                _1.QualityGuardConfigurationService\r\n            ]\r\n        })\r\n    ], QualityGuardConfigurationModule);\r\n    return QualityGuardConfigurationModule;\r\n}());\r\nexports.QualityGuardConfigurationModule = QualityGuardConfigurationModule;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5tb2R1bGUudHM/YTJkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhFQUF5QztBQUN6QyxvRkFBK0M7QUFFL0MseUdBRzhEO0FBQzlELHNLQUEwRjtBQUUxRixJQUFNLGFBQWEsR0FDWixpQ0FBOEIsUUFDOUIsdUVBQW1DLENBQ3pDLENBQUM7QUFnQkY7SUFBQTtJQUE4QyxDQUFDO0lBQWxDLCtCQUErQjtRQWQzQyxlQUFRLENBQUM7WUFDVixPQUFPLEVBQUU7Z0JBQ0QscUJBQVksQ0FBQyxRQUFRLENBQUUsYUFBYSxDQUFFO2FBQ3pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHFDQUFrQztnQkFDbEMsMkNBQXdDO2FBQzNDO1lBQ0QsZUFBZSxFQUFFLEVBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULG1DQUFnQzthQUNqQztTQUNKLENBQUM7T0FDVywrQkFBK0IsQ0FBRztJQUFELHNDQUFDO0NBQUE7QUFBbEMsMEVBQStCIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24ubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgICBxdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uUm91dGUsXHJcbiAgICAgICAgIFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLyc7XHJcbmltcG9ydCB7IHF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25Qb3B1cFJvdXRlIH0gZnJvbSAnLi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24ucm91dGUnO1xyXG5cclxuY29uc3QgRU5USVRZX1NUQVRFUyA9IFtcclxuICAgIC4uLnF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25Sb3V0ZSxcclxuICAgIC4uLnF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25Qb3B1cFJvdXRlLFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuaW1wb3J0czogW1xyXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZCggRU5USVRZX1NUQVRFUyApXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uRGlhbG9nQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25TZXJ2aWNlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uTW9kdWxlIHt9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24ubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.module.ts\n");

/***/ })

})