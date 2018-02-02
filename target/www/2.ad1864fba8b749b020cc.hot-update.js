webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar http_1 = __webpack_require__(\"./node_modules/@angular/http/esm5/http.js\");\r\nvar rxjs_1 = __webpack_require__(\"./node_modules/rxjs/Rx.js\");\r\nvar QualityGuardConfigurationService = /** @class */ (function () {\r\n    function QualityGuardConfigurationService(http) {\r\n        this.http = http;\r\n        this.baseUrl = 'http://localhost:8585/api';\r\n        this.qualityGuardsArray = [];\r\n    }\r\n    QualityGuardConfigurationService.prototype.getAllQualityGuards = function () {\r\n        return this.http.get(this.baseUrl + '/quality-guards')\r\n            .map(function (response) { return response.json(); })\r\n            .catch(this._errorHandler);\r\n    };\r\n    QualityGuardConfigurationService.prototype._errorHandler = function (error) {\r\n        console.log(error);\r\n        return rxjs_1.Observable.throw(error || 'Internal server error');\r\n    };\r\n    QualityGuardConfigurationService = __decorate([\r\n        core_1.Injectable(),\r\n        __metadata(\"design:paramtypes\", [http_1.Http])\r\n    ], QualityGuardConfigurationService);\r\n    return QualityGuardConfigurationService;\r\n}());\r\nexports.QualityGuardConfigurationService = QualityGuardConfigurationService;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzP2MyNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4RUFBMkM7QUFDM0MsOEVBQStDO0FBQy9DLDhEQUFrQztBQUlsQztJQU1JLDBDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUpoQyxZQUFPLEdBQUcsMkJBQTJCO1FBRW5DLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUl4QixDQUFDO0lBRUQsOERBQW1CLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7YUFDN0MsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHdEQUFhLEdBQWIsVUFBYyxLQUFlO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGlCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBdUIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFuQlEsZ0NBQWdDO1FBRDVDLGlCQUFVLEVBQUU7eUNBT2lCLFdBQUk7T0FOckIsZ0NBQWdDLENBb0I1QztJQUFELHVDQUFDO0NBQUE7QUFwQlksNEVBQWdDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb25TZXJ2aWNlIHtcclxuXHJcbiAgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0Ojg1ODUvYXBpJ1xyXG5cclxuICAgIHF1YWxpdHlHdWFyZHNBcnJheSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxRdWFsaXR5R3VhcmRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCArICcvcXVhbGl0eS1ndWFyZHMnKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBfZXJyb3JIYW5kbGVyKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvciB8fCAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.service.ts\n");

/***/ })

})