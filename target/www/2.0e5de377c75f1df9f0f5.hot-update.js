webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar core_1 = __webpack_require__(\"./node_modules/@angular/core/esm5/core.js\");\r\nvar router_1 = __webpack_require__(\"./node_modules/@angular/router/esm5/router.js\");\r\nvar common_1 = __webpack_require__(\"./node_modules/@angular/common/esm5/common.js\");\r\nvar profile_service_1 = __webpack_require__(\"./src/main/webapp/app/layouts/profiles/profile.service.ts\");\r\nvar shared_1 = __webpack_require__(\"./src/main/webapp/app/shared/index.ts\");\r\nvar app_constants_1 = __webpack_require__(\"./src/main/webapp/app/app.constants.ts\");\r\nvar NavbarComponent = /** @class */ (function () {\r\n    function NavbarComponent(loginService, principal, loginModalService, profileService, router, location) {\r\n        var _this = this;\r\n        this.loginService = loginService;\r\n        this.principal = principal;\r\n        this.loginModalService = loginModalService;\r\n        this.profileService = profileService;\r\n        this.router = router;\r\n        this.location = location;\r\n        this.path = '';\r\n        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';\r\n        this.isNavbarCollapsed = true;\r\n        this.router.events.subscribe(function (val) {\r\n            _this.path = _this.location.path();\r\n            console.log('path = ' + _this.path);\r\n        });\r\n    }\r\n    NavbarComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.profileService.getProfileInfo().then(function (profileInfo) {\r\n            _this.inProduction = profileInfo.inProduction;\r\n            _this.swaggerEnabled = profileInfo.swaggerEnabled;\r\n        });\r\n    };\r\n    NavbarComponent.prototype.collapseNavbar = function () {\r\n        this.isNavbarCollapsed = true;\r\n    };\r\n    NavbarComponent.prototype.isAuthenticated = function () {\r\n        return this.principal.isAuthenticated();\r\n    };\r\n    NavbarComponent.prototype.login = function () {\r\n        this.modalRef = this.loginModalService.open();\r\n    };\r\n    NavbarComponent.prototype.logout = function () {\r\n        this.collapseNavbar();\r\n        this.loginService.logout();\r\n        this.router.navigate(['']);\r\n    };\r\n    NavbarComponent.prototype.toggleNavbar = function () {\r\n        this.isNavbarCollapsed = !this.isNavbarCollapsed;\r\n    };\r\n    NavbarComponent.prototype.getImageUrl = function () {\r\n        return this.isAuthenticated() ? this.principal.getImageUrl() : null;\r\n    };\r\n    NavbarComponent = __decorate([\r\n        core_1.Component({\r\n            selector: 'jhi-navbar',\r\n            template: __webpack_require__(\"./src/main/webapp/app/layouts/navbar/navbar.component.html\"),\r\n            styles: [\r\n                __webpack_require__(\"./src/main/webapp/app/layouts/navbar/navbar.css\")\r\n            ]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [shared_1.LoginService,\r\n            shared_1.Principal,\r\n            shared_1.LoginModalService,\r\n            profile_service_1.ProfileService,\r\n            router_1.Router,\r\n            common_1.Location])\r\n    ], NavbarComponent);\r\n    return NavbarComponent;\r\n}());\r\nexports.NavbarComponent = NavbarComponent;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHM/MDQxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUFrRDtBQUNsRCxvRkFBeUM7QUFDekMsb0ZBQTJDO0FBRzNDLHlHQUE2RDtBQUM3RCw0RUFBMEU7QUFFMUUsb0ZBQThDO0FBUzlDO0lBU0kseUJBQ1ksWUFBMEIsRUFDMUIsU0FBb0IsRUFDcEIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLE1BQWMsRUFDZCxRQUFrQjtRQU45QixpQkFjQztRQWJXLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFSOUIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQVVOLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHVCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFFLEtBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxXQUFXO1lBQ2xELEtBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztZQUM3QyxLQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ3JELENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3hFLENBQUM7SUF4RFEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsNkJBQWEsNkRBQXlCO1lBQ3RDLFNBQVc7Z0JBQ1AscUVBQVk7YUFDZjtTQUNKLENBQUM7eUNBVzRCLHFCQUFZO1lBQ2Ysa0JBQVM7WUFDRCwwQkFBaUI7WUFDcEIsZ0NBQWM7WUFDdEIsZUFBTTtZQUNKLGlCQUFRO09BZnJCLGVBQWUsQ0F5RDNCO0lBQUQsc0JBQUM7Q0FBQTtBQXpEWSwwQ0FBZSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaW5jaXBhbCwgTG9naW5Nb2RhbFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IFZFUlNJT04gfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbmF2YmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ25hdmJhci5jc3MnXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGluUHJvZHVjdGlvbjogYm9vbGVhbjtcbiAgICBpc05hdmJhckNvbGxhcHNlZDogYm9vbGVhbjtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuICAgIHN3YWdnZXJFbmFibGVkOiBib29sZWFuO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gICAgcGF0aCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByb2ZpbGVTZXJ2aWNlOiBQcm9maWxlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb25cbiAgICApIHtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gVkVSU0lPTiA/ICd2JyArIFZFUlNJT04gOiAnJztcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xuICAgICAgICAgIHRoaXMucGF0aCA9IHRoaXMubG9jYXRpb24ucGF0aCgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXRoID0gJysgdGhpcy5wYXRoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnRoZW4oKHByb2ZpbGVJbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluUHJvZHVjdGlvbiA9IHByb2ZpbGVJbmZvLmluUHJvZHVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc3dhZ2dlckVuYWJsZWQgPSBwcm9maWxlSW5mby5zd2FnZ2VyRW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5sb2dpbk1vZGFsU2VydmljZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlTmF2YmFyKCk7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcbiAgICB9XG5cbiAgICB0b2dnbGVOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaXNOYXZiYXJDb2xsYXBzZWQgPSAhdGhpcy5pc05hdmJhckNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPyB0aGlzLnByaW5jaXBhbC5nZXRJbWFnZVVybCgpIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/navbar/navbar.component.ts\n");

/***/ })

})