webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar QualityGuardConfigurationComponent = /** @class */ (function () {\r\n    function QualityGuardConfigurationComponent(route) {\r\n        this.route = route;\r\n        this.allQualityGuards = [\r\n            { name: 'My Quality Guard 1', rule: 'Measure 1 > (30 \\' 40) AND Measure 2 > (10 \\' 20)' },\r\n            { name: 'My Quality Guard 2', rule: 'Measure 1 > (30 \\' 40) AND Measure 2 > (10 \\' 20)' },\r\n            { name: 'My Quality Guard 3', rule: 'Measure 1 > (30 \\' 40) AND Measure 2 > (10 \\' 20)' }\r\n        ];\r\n        this.qualitGuards = [];\r\n        this.guardCondition = [];\r\n        this.route.params.subscribe(function (res) { return console.log(res.id); });\r\n    }\r\n    QualityGuardConfigurationComponent.prototype.ngOnInit = function () {\r\n        this.getAllQualityGuards();\r\n    };\r\n    QualityGuardConfigurationComponent.prototype.getAllQualityGuards = function () {\r\n        // this.qualityGuardConfigurationService.getAllQualityGuards().subscribe(\r\n        // (data) => this.qualitGuards = data,\r\n        // (error) => this.errorMessage = error\r\n        // )\r\n        return this.allQualityGuards;\r\n    };\r\n    QualityGuardConfigurationComponent.prototype.addNewQualityGuard = function (qg) {\r\n        console.log(qg.qualityGuardName);\r\n        console.log(qg.description);\r\n    };\r\n    QualityGuardConfigurationComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'jhi-quality-guard-configuration',\r\n            template: __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.component.html\"),\r\n            styles: [__webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.component.css\")]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [router_1.ActivatedRoute])\r\n    ], QualityGuardConfigurationComponent);\r\n    return QualityGuardConfigurationComponent;\r\n}());\r\nexports.QualityGuardConfigurationComponent = QualityGuardConfigurationComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5jb21wb25lbnQudHM/YzIxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUFrRDtBQUNsRCxvRkFBaUQ7QUFPakQ7SUFZRSw0Q0FBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFWekMscUJBQWdCLEdBQUc7WUFDakIsRUFBRSxJQUFJLEVBQUcsb0JBQW9CLEVBQUUsSUFBSSxFQUFHLG1EQUFtRCxFQUFFO1lBQzNGLEVBQUUsSUFBSSxFQUFHLG9CQUFvQixFQUFFLElBQUksRUFBRyxtREFBbUQsRUFBRTtZQUMzRixFQUFFLElBQUksRUFBRyxvQkFBb0IsRUFBRSxJQUFJLEVBQUcsbURBQW1ELEVBQUU7U0FDNUY7UUFFRCxpQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixtQkFBYyxHQUFlLEVBQUUsQ0FBQztRQUk5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBRyxJQUFJLGNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHFEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0VBQW1CLEdBQW5CO1FBQ0UseUVBQXlFO1FBQ3pFLHNDQUFzQztRQUN0Qyx1Q0FBdUM7UUFDdkMsSUFBSTtRQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVELCtEQUFrQixHQUFsQixVQUFtQixFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQS9CVSxrQ0FBa0M7UUFMOUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsNkJBQWEsNkdBQThDO1lBQzNELFNBQVMsbUJBQUcsNEdBQTRDO1NBQ3pELENBQUM7eUNBYTJCLHVCQUFjO09BWjlCLGtDQUFrQyxDQWlDOUM7SUFBRCx5Q0FBQztDQUFBO0FBakNZLGdGQUFrQyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvYW5hbHlzaXMtdG9vbC9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24vcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2poaS1xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydxdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgYWxsUXVhbGl0eUd1YXJkcyA9IFtcclxuICAgIHsgbmFtZSA6ICdNeSBRdWFsaXR5IEd1YXJkIDEnLCBydWxlIDogJ01lYXN1cmUgMSA+ICgzMCBcXCcgNDApIEFORCBNZWFzdXJlIDIgPiAoMTAgXFwnIDIwKScgfSxcclxuICAgIHsgbmFtZSA6ICdNeSBRdWFsaXR5IEd1YXJkIDInLCBydWxlIDogJ01lYXN1cmUgMSA+ICgzMCBcXCcgNDApIEFORCBNZWFzdXJlIDIgPiAoMTAgXFwnIDIwKScgfSxcclxuICAgIHsgbmFtZSA6ICdNeSBRdWFsaXR5IEd1YXJkIDMnLCBydWxlIDogJ01lYXN1cmUgMSA+ICgzMCBcXCcgNDApIEFORCBNZWFzdXJlIDIgPiAoMTAgXFwnIDIwKScgfVxyXG4gIF1cclxuXHJcbiAgcXVhbGl0R3VhcmRzOiBBcnJheTxhbnk+ID0gW107XHJcbiAgZ3VhcmRDb25kaXRpb246IEFycmF5PGFueT4gPSBbXTtcclxuICBlcnJvck1lc3NhZ2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzLmlkKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0QWxsUXVhbGl0eUd1YXJkcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUXVhbGl0eUd1YXJkcygpIHtcclxuICAgIC8vIHRoaXMucXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvblNlcnZpY2UuZ2V0QWxsUXVhbGl0eUd1YXJkcygpLnN1YnNjcmliZShcclxuICAgIC8vIChkYXRhKSA9PiB0aGlzLnF1YWxpdEd1YXJkcyA9IGRhdGEsXHJcbiAgICAvLyAoZXJyb3IpID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3JcclxuICAgIC8vIClcclxuICAgIHJldHVybiB0aGlzLmFsbFF1YWxpdHlHdWFyZHM7XHJcbiAgfVxyXG5cclxuICBhZGROZXdRdWFsaXR5R3VhcmQocWcpIHtcclxuICAgIGNvbnNvbGUubG9nKHFnLnF1YWxpdHlHdWFyZE5hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocWcuZGVzY3JpcHRpb24pO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5jb21wb25lbnQudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.component.ts\n");

/***/ })

})