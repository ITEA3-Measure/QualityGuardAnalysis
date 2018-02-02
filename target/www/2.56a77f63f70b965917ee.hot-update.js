webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar app_constants_1 = __webpack_require__(\"./src/main/webapp/app/app.constants.ts\");\r\nvar request_util_1 = __webpack_require__(\"./src/main/webapp/app/shared/model/request-util.ts\");\r\nvar response_wrapper_model_1 = __webpack_require__(\"./src/main/webapp/app/shared/model/response-wrapper.model.ts\");\r\nvar quality_guard_configuration_model_1 = __webpack_require__(\"./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.model.ts\");\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar http_1 = __webpack_require__(\"./node_modules/@angular/http/esm5/http.js\");\r\nvar QualityGuardConfigurationService = /** @class */ (function () {\r\n    function QualityGuardConfigurationService(http) {\r\n        this.http = http;\r\n        this.resourceUrl = app_constants_1.SERVER_API_URL + 'quality-guard-manager/quality-guards';\r\n    }\r\n    QualityGuardConfigurationService.prototype.create = function (qualityGuard) {\r\n        var _this = this;\r\n        var copy = this.convert(qualityGuard);\r\n        return this.http.post(this.resourceUrl, copy).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    QualityGuardConfigurationService.prototype.update = function (qualityGuard) {\r\n        var _this = this;\r\n        var copy = this.convert(qualityGuard);\r\n        return this.http.put(this.resourceUrl, copy).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    QualityGuardConfigurationService.prototype.find = function (id) {\r\n        var _this = this;\r\n        return this.http.get(this.resourceUrl + \"/\" + id).map(function (res) {\r\n            var jsonResponse = res.json();\r\n            return _this.convertItemFromServer(jsonResponse);\r\n        });\r\n    };\r\n    QualityGuardConfigurationService.prototype.query = function (req) {\r\n        var _this = this;\r\n        var options = request_util_1.createRequestOption(req);\r\n        return this.http.get(this.resourceUrl, options)\r\n            .map(function (res) { return _this.convertResponse(res); });\r\n    };\r\n    QualityGuardConfigurationService.prototype.delete = function (id) {\r\n        return this.http.delete(this.resourceUrl + \"/\" + id);\r\n    };\r\n    QualityGuardConfigurationService.prototype.convertResponse = function (res) {\r\n        var jsonResponse = res.json();\r\n        var result = [];\r\n        for (var i = 0; i < jsonResponse.length; i++) {\r\n            result.push(this.convertItemFromServer(jsonResponse[i]));\r\n        }\r\n        return new response_wrapper_model_1.ResponseWrapper(res.headers, result, res.status);\r\n    };\r\n    /**\r\n     * Convert a returned JSON object to QualityGuard.\r\n     */\r\n    QualityGuardConfigurationService.prototype.convertItemFromServer = function (json) {\r\n        var entity = Object.assign(new quality_guard_configuration_model_1.QualityGuardConfiguration(), json);\r\n        return entity;\r\n    };\r\n    /**\r\n     * Convert a QualityGuardConfiguration to a JSON which can be sent to the server.\r\n     */\r\n    QualityGuardConfigurationService.prototype.convert = function (qualityGuard) {\r\n        var copy = Object.assign({}, qualityGuard);\r\n        return copy;\r\n    };\r\n    QualityGuardConfigurationService = __decorate([\r\n        core_1.Injectable(),\r\n        __metadata(\"design:paramtypes\", [http_1.Http])\r\n    ], QualityGuardConfigurationService);\r\n    return QualityGuardConfigurationService;\r\n}());\r\nexports.QualityGuardConfigurationService = QualityGuardConfigurationService;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzP2MyNTAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvRkFBcUQ7QUFDckQsK0ZBQXNFO0FBQ3RFLG1IQUE0RTtBQUM1RSxzS0FBZ0Y7QUFDaEYsOEVBQTJDO0FBQzNDLDhFQUErQztBQUkvQztJQUdJLDBDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUYxQixnQkFBVyxHQUFJLDhCQUFjLEdBQUcsc0NBQXNDLENBQUM7SUFFekMsQ0FBQztJQUVuQyxpREFBTSxHQUFOLFVBQU8sWUFBdUM7UUFBOUMsaUJBTUM7UUFMRyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFDNUQsSUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaURBQU0sR0FBTixVQUFPLFlBQXVDO1FBQTlDLGlCQU1DO1FBTEcsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQzNELElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtDQUFJLEdBQUosVUFBSyxFQUFVO1FBQWYsaUJBS0M7UUFKRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFhO1lBQ2hFLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdEQUFLLEdBQUwsVUFBTSxHQUFTO1FBQWYsaUJBSUM7UUFIRyxJQUFNLE9BQU8sR0FBRyxrQ0FBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUM7YUFDMUMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLFlBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsaURBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sMERBQWUsR0FBdkIsVUFBd0IsR0FBYTtRQUNqQyxJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLHdDQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7T0FFRztJQUNLLGdFQUFxQixHQUE3QixVQUE4QixJQUFTO1FBQ25DLElBQU0sTUFBTSxHQUE4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksNkRBQXlCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRixNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNLLGtEQUFPLEdBQWYsVUFBZ0IsWUFBdUM7UUFDbkQsSUFBTSxJQUFJLEdBQThCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTdEUSxnQ0FBZ0M7UUFENUMsaUJBQVUsRUFBRTt5Q0FJaUIsV0FBSTtPQUhyQixnQ0FBZ0MsQ0E4RDVDO0lBQUQsdUNBQUM7Q0FBQTtBQTlEWSw0RUFBZ0MiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FuYWx5c2lzLXRvb2wvcXVhbGl0eS1ndWFyZC1jb25maWd1cmF0aW9uL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0VSVkVSX0FQSV9VUkwgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbC9yZXF1ZXN0LXV0aWwnO1xyXG5pbXBvcnQgeyBSZXNwb25zZVdyYXBwZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWwvcmVzcG9uc2Utd3JhcHBlci5tb2RlbCc7XHJcbmltcG9ydCB7IFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvblNlcnZpY2Uge1xyXG5wcml2YXRlIHJlc291cmNlVXJsID0gIFNFUlZFUl9BUElfVVJMICsgJ3F1YWxpdHktZ3VhcmQtbWFuYWdlci9xdWFsaXR5LWd1YXJkcyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBjcmVhdGUocXVhbGl0eUd1YXJkOiBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uKTogT2JzZXJ2YWJsZTxRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uPiB7XHJcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydChxdWFsaXR5R3VhcmQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnJlc291cmNlVXJsLCBjb3B5KS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHF1YWxpdHlHdWFyZDogUXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbik6IE9ic2VydmFibGU8UXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbj4ge1xyXG4gICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvbnZlcnQocXVhbGl0eUd1YXJkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnJlc291cmNlVXJsLCBjb3B5KS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEl0ZW1Gcm9tU2VydmVyKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxSZXNwb25zZVdyYXBwZXI+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gY3JlYXRlUmVxdWVzdE9wdGlvbihyZXEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucmVzb3VyY2VVcmwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHRoaXMuY29udmVydFJlc3BvbnNlKHJlcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb252ZXJ0UmVzcG9uc2UocmVzOiBSZXNwb25zZSk6IFJlc3BvbnNlV3JhcHBlciB7XHJcbiAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGpzb25SZXNwb25zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmNvbnZlcnRJdGVtRnJvbVNlcnZlcihqc29uUmVzcG9uc2VbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZVdyYXBwZXIocmVzLmhlYWRlcnMsIHJlc3VsdCwgcmVzLnN0YXR1cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgcmV0dXJuZWQgSlNPTiBvYmplY3QgdG8gUXVhbGl0eUd1YXJkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNvbnZlcnRJdGVtRnJvbVNlcnZlcihqc29uOiBhbnkpOiBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uIHtcclxuICAgICAgICBjb25zdCBlbnRpdHk6IFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKG5ldyBRdWFsaXR5R3VhcmRDb25maWd1cmF0aW9uKCksIGpzb24pO1xyXG4gICAgICAgIHJldHVybiBlbnRpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0IGEgUXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbiB0byBhIEpTT04gd2hpY2ggY2FuIGJlIHNlbnQgdG8gdGhlIHNlcnZlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjb252ZXJ0KHF1YWxpdHlHdWFyZDogUXVhbGl0eUd1YXJkQ29uZmlndXJhdGlvbik6IFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24ge1xyXG4gICAgICAgIGNvbnN0IGNvcHk6IFF1YWxpdHlHdWFyZENvbmZpZ3VyYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBxdWFsaXR5R3VhcmQpO1xyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hbmFseXNpcy10b29sL3F1YWxpdHktZ3VhcmQtY29uZmlndXJhdGlvbi9xdWFsaXR5LWd1YXJkLWNvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/analysis-tool/quality-guard-configuration/quality-guard-configuration.service.ts\n");

/***/ })

})