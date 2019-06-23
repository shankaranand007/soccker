webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEnvironment; });
var Config = /** @class */ (function () {
    function Config() {
        this.environment = '';
        this.basUrl = '';
        this.sapUrl = '';
        this.trendUrl = '';
    }
    return Config;
}());

var AppEnvironment;
(function (AppEnvironment) {
    AppEnvironment[AppEnvironment["Dev"] = 0] = "Dev";
    AppEnvironment[AppEnvironment["Prod"] = 1] = "Prod";
    AppEnvironment[AppEnvironment["Local"] = 2] = "Local";
})(AppEnvironment || (AppEnvironment = {}));
//# sourceMappingURL=config.interface.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__okta_okta_auth_js__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__okta_okta_auth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__okta_okta_auth_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_state_state__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_login_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_signup__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reset_reset__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











// import { LoginverifyPage } from '../loginverify/loginverify';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, spinner, login_serive, storage, state, oauthService, navParam, menuCtrl) {
        this.navCtrl = navCtrl;
        this.spinner = spinner;
        this.login_serive = login_serive;
        this.storage = storage;
        this.state = state;
        this.oauthService = oauthService;
        this.navParam = navParam;
        this.menuCtrl = menuCtrl;
        this.username = "";
        this.password = "";
        this.type = 'password';
        this.showPass = false;
        this.error = '';
        this.isTokenRequired = true;
        this.login_values = {};
        this.touchIDFailed = false;
        this.isTouchIDFailed();
        this.isTokenRequired = __WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* Settings */].isOktaRequired;
    }
    LoginPage.prototype.isTouchIDFailed = function () {
        var isFailed = this.navParam.get('touchIDFailed');
        this.touchIDFailed = isFailed ? true : false; //if true then do not flush settings
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.spinner.showforce();
        setTimeout(function () {
            _this.mobile.setFocus();
        }, 3500);
        if (!__WEBPACK_IMPORTED_MODULE_6__providers_settings_settings__["a" /* Settings */].isOktaRequired) {
            return this.spinner.hide();
        }
        this.spinner.hide();
        this.validateLogin();
    };
    LoginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__reset_reset__["a" /* ResetPage */]);
    };
    LoginPage.prototype.validateLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.oauthService.loadDiscoveryDocument().then(function () {
                        _this.oauthService.tryLogin();
                    });
                }
                catch (err) {
                    this.spinner.hide();
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(this.login_values);
                this.clearStorages();
                this.login_serive.login(this.login_values)
                    .subscribe(function (data) {
                    console.log(data, "login page");
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.clearStorages = function () {
        this.storage.removeAll();
        localStorage.clear();
        sessionStorage.clear();
    };
    LoginPage.prototype.setUsername = function () {
        this.state.set(this.state.data.userid, this.username);
    };
    LoginPage.prototype.authSignIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setAuthClient();
                        this.setUsername();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.authClient.signIn({
                                username: this.username,
                                password: this.password
                            })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, this.storage.set(this.storage.data.username, this.username)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set(this.storage.data.password, this.password)];
                    case 4:
                        _a.sent();
                        this.processResponse(response);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        this.addError(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.setAuthClient = function () {
        this.authClient = new __WEBPACK_IMPORTED_MODULE_2__okta_okta_auth_js__({
            clientId: this.oauthService.clientId,
            redirectUri: this.oauthService.redirectUri,
            url: this.oauthService.issuer,
            issuer: this.oauthService.issuer,
            tokenManager: { storage: 'localStorage' }
        });
    };
    LoginPage.prototype.processResponse = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.processTokens = function (tokens) {
        var idToken = tokens[0].idToken;
        var accessToken = tokens[1].accessToken;
        var keyValuePair = "#id_token=" + encodeURIComponent(idToken) + "&access_token=" + encodeURIComponent(accessToken);
        this.oauthService.tryLogin({
            customHashFragment: keyValuePair,
            disableOAuth2StateCheck: true
        });
        this.storage.set(this.storage.data.idToken, tokens[0].idToken);
        this.storage.set(this.storage.data.accessToken, tokens[1].accessToken);
        this.spinner.hide();
    };
    LoginPage.prototype.addError = function (err) {
        this.error = err.message;
        this.spinner.hide();
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    LoginPage.prototype.nagivateTo = function (page, hard) {
        if (hard === void 0) { hard = false; }
        var deeplinks = this.state.get(this.state.data.deeplinks);
        if (deeplinks && deeplinks.page) {
            if (hard) {
                return this.navCtrl.setRoot(page, {
                    url: deeplinks.page,
                    param: deeplinks.data
                });
            }
            return this.navCtrl.setRoot(deeplinks.page, deeplinks.data);
        }
        return this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mobile'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "mobile", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/login/login.html"*/'<ion-content class="login-background">\n  <ion-card no-margin login-card class="fullWidth">\n    <img src="../../assets/imgs/loginbg.png" />\n    <div class="card-title">\n        <span class="icon-iff"></span>\n      Welcome!\n      <div class="card-subtitle">Login to continue</div>\n    </div>\n  </ion-card>\n  <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10 mx-auto text-center>\n          <ion-item logintextfield>\n            <ion-label color="primary" floating>Mobile</ion-label>\n            <ion-input name="username" id="mob" type="number" max="10" required [(ngModel)]="login_values.mobile" name="mobile" #mobile></ion-input>\n          </ion-item>\n          <ion-item logintextfield>\n            <ion-label color="primary" floating>Password</ion-label>\n            <ion-input name="username" id="pass" type="password" required [(ngModel)]="login_values.password" name="password" ></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-10 mx-auto text-center *ngIf="isTokenRequired">\n          <ion-item logintextfield>\n            <ion-label color="primary" floating>Common Password</ion-label>\n            <ion-input name="password" id="passwordField" type="{{type}}" required [(ngModel)]="password"></ion-input>\n            <button eyeIcon *ngIf="!showPass" ion-button clear type="button" item-right (click)="showPassword()">\n              <span class="icon-eye"></span>\n            </button>\n            <button eyeIcon *ngIf="showPass" ion-button clear type="button" item-right (click)="showPassword()">\n              <span class="icon-hide-eye"></span>\n            </button>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-10 mx-auto text-center>\n          <div *ngIf="error" red text-left>{{error}}</div>\n          <button loginbutton ion-button block type="submit" [disabled]="!loginForm.form.valid">Submit\n          </button>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-10 mx-auto text-center>\n          <p (click)="signup()">Signup</p>\n          <p (click)="forgot()">Forgot password</p>   \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <!-- <button type="button" (click)="checktouchid()">touchID\n  </button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* Spinner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* Spinner */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__providers_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_service_login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__providers_state_state__["a" /* State */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_state_state__["a" /* State */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_oauth2_oidc__["OAuthService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_module_sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var NotificationProvider = /** @class */ (function () {
    function NotificationProvider() {
    }
    NotificationProvider.prototype.resetBadge = function () {
        try {
            ParsePushPlugin.resetBadge();
        }
        catch (error) {
        }
    };
    NotificationProvider.prototype.pushregister = function () {
        try {
            ParsePushPlugin.register();
        }
        catch (error) {
        }
    };
    NotificationProvider.prototype.pushInit = function (baseObject) {
        try {
            ParsePushPlugin.register();
            ParsePushPlugin.on('receivePN', function () { });
            ParsePushPlugin.on('openPN', function (pn) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.resetBadge();
                        if (pn.url && pn.param) {
                            baseObject.navCtrl.setRoot(pn.url, pn.param);
                        }
                        else if (pn.url && !pn.param) {
                            baseObject.navCtrl.setRoot(pn.url);
                        }
                        else {
                            baseObject.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_home_module_sub_tab_sub_tab__["a" /* SubTabPage */]);
                        }
                        return [2 /*return*/];
                    });
                });
            }).bind(this);
        }
        catch (error) { }
    };
    NotificationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NotificationProvider);
    return NotificationProvider;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendors_add_vendors_add__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employee_module_employees_view_employees_view__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the VendorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorDetailsPage = /** @class */ (function () {
    function VendorDetailsPage(navCtrl, navParams, mockData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.vendor = {};
        this.employees = [];
        this.today = new Date();
        this.vendor = this.mockData.vendors.find(function (vendor) { return vendor.id == _this.navParams.data; });
        this.getEmployees();
    }
    VendorDetailsPage.prototype.ionViewDidLoad = function () {
    };
    VendorDetailsPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    VendorDetailsPage.prototype.getEmployees = function () {
        var _this = this;
        this.employees = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"])(this.mockData.employees, function (employee) { return employee.vendorId == _this.navParams.data; });
        this.employees.forEach(function (emp) {
            var timeDiff = Math.abs(emp['ExpiryDate'].getTime() - _this.today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 7 && diffDays > 0) {
                emp['showExpires'] = diffDays;
            }
            emp['indicator'] = _this.getIndicator(emp.DesignationID);
        });
    };
    VendorDetailsPage.prototype.getIndicator = function (Id) {
        switch (Id) {
            case 1:
                return 'role1';
            case 2:
                return 'role2';
            case 3:
                return 'role3';
            case 4:
                return 'role4';
            case 5:
                return 'role5';
        }
    };
    VendorDetailsPage.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vendors_add_vendors_add__["a" /* VendorsAddPage */], this.navParams.data);
    };
    VendorDetailsPage.prototype.viewEmployee = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__employee_module_employees_view_employees_view__["a" /* EmployeesView */], id);
    };
    VendorDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendor-details',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor-details/vendor-details.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button text-only (click)="pop()">\n              <span> Back </span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 header-title>\n          <ion-title>{{vendor.name}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="edit()">\n              <span class="icon-edit"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid class="vendor-details-card">\n\n    <ion-row margin-bottom>\n      <ion-col mb-1 no-padding col-12 text-left>\n        <img [src]="vendor.logoFullView" class="vendorLogo">\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding col-12>\n        Company Name:\n      </ion-col>\n      <ion-col no-padding col-12>\n        {{vendor.name}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding col-12>\n        No of Employees:\n      </ion-col>\n      <ion-col no-padding col-12>\n        {{vendor.employeesCount}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding col-12>\n        Address:\n      </ion-col>\n      <ion-col no-padding col-12>\n        {{vendor.address}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding col-12>\n        Primary Contacts:\n      </ion-col>\n      <ion-col no-padding col-12 class="highlight-text-blue" *ngFor="let contact of vendor.primaryContacts">\n        <ion-label no-margin>\n          {{contact}}\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col no-padding col-12>\n        Contact Number:\n      </ion-col>\n      <ion-col no-padding col-12 class="highlight-text-blue">\n        {{vendor.contactNo}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col no-padding col-12>\n        Contact Period:\n      </ion-col>\n      <ion-col no-padding col-12>\n        {{vendor.startDate}} to {{vendor.expiryDate}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-row class="vendor-Employees-count">\n    <ion-col no-padding col-12>\n      No of Employees ({{vendor.employeesCount}})\n    </ion-col>\n  </ion-row>\n\n\n\n  <ion-list class="custom-item-sliding-list">\n    <ng-container *ngFor="let emp of employees;let i = index;" >\n      <ion-item-sliding #item class="custom-item-sliding">\n        <ion-item class="custom-ion-item" (click)="viewEmployee(emp.id)">\n          <ion-row custom-sliding-design>\n\n            <ion-col no-padding col-2 class="vendor-card-img">\n              <ion-avatar item-start>\n                <img [src]="emp.ProfileImg">\n              </ion-avatar>\n              <div [class]="emp.indicator"></div>\n            </ion-col>\n\n            <ion-col no-padding col-10 class="vendor-card-content">\n              <ion-row>\n                <ion-col class="vendor-card-title" no-padding col-12>\n                  <ion-row>\n                    <ion-col no-padding>\n                      <span class="employee-name" [innerText]="emp.Name"></span>\n                    </ion-col>\n                  </ion-row>\n\n\n                  <div class="expires-alert" *ngIf="emp.showExpires != undefined">\n                    <span class="expires-alert-title">Expires in:</span>\n                    <span class="expires-alert-info">{{emp.showExpires}}D</span>\n                  </div>\n                </ion-col>\n                <ion-col no-padding col-12 class="vendor-description">\n                  {{emp.Designation}}&nbsp;at&nbsp;{{emp.Vendor}}\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n\n\n\n\n\n          </ion-row>\n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button color="primary" (click)="openTrack(project)">\n            <ion-icon name="icon-email"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="openFeedback(project)">\n            <ion-icon name="icon-call"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="openNotes(project)">\n            <span class="icon-Notes"></span>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ng-container>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor-details/vendor-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__["a" /* MockData */]])
    ], VendorDetailsPage);
    return VendorDetailsPage;
}());

//# sourceMappingURL=vendor-details.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VendorsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorsAddPage = /** @class */ (function () {
    function VendorsAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Add Vendor';
        if (navParams.data && navParams.data != undefined && navParams.data > 0) {
            this.title = 'Edit Vendor';
        }
    }
    VendorsAddPage.prototype.ionViewDidLoad = function () {
    };
    VendorsAddPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    VendorsAddPage.prototype.saveVendor = function () {
        this.navCtrl.pop();
    };
    VendorsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendors-add',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendors-add/vendors-add.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              <span class="font-1point5rem">Cancel</span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>{{title}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n          <ion-buttons padding-right>\n            <button (click)="saveVendor()" ion-button icon-only>\n              <span class="icon-save" font20></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contentbg" padding>\n  <ion-row>\n    <div class="roundedImg">\n      <img src="../../../assets/imgs/profile-image.png" alt="User" />\n    </div>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendors-add/vendors-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], VendorsAddPage);
    return VendorsAddPage;
}());

//# sourceMappingURL=vendors-add.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EmployeesViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeesView = /** @class */ (function () {
    function EmployeesView(navCtrl, navParams, mockData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.homepagetab = "personaldetials";
        console.log(this.navParams.data);
        this.employee = this.mockData.employees.find(function (emp) { return emp.id == _this.navParams.data; });
    }
    EmployeesView.prototype.ionViewDidLoad = function () {
    };
    EmployeesView.prototype.pop = function () {
        this.navCtrl.pop();
    };
    EmployeesView.prototype.edit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add__["a" /* EmployeesAdd */], this.navParams.data);
    };
    EmployeesView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-employees-view',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-view/employees-view.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button ion-button icon-only (click)="pop()">\n              <span class="font-1point5rem"> Back </span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>{{employee.Name}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n          <ion-buttons padding-right>\n            <button class="header-icon" ion-button icon-only (click)="edit()">\n              <span class="icon-edit"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid class="employee-details-card">\n\n    <ion-row>\n      <ion-col col-12 no-padding class="employee-profile">\n        <div class="employee-profile-img-wrapper">\n          <img [src]="employee.ProfileImg">\n        </div>\n        <div class="employee-profile-img-shadow"></div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class="employee-profile-header">\n      <ion-col no-padding col-12>\n        {{employee.Name}}\n      </ion-col>\n      <ion-col no-padding col-12>\n        {{employee.Vendor}}\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row margin-bottom>\n      <ion-col col-12 no-padding>\n        <ion-segment class="customSegment w-100" [(ngModel)]="homepagetab">\n          <ion-segment-button class="custom-segment-button" value="personaldetials">\n            Personal Detials\n          </ion-segment-button>\n          <ion-segment-button class="custom-segment-button" value="projectdetails">\n            Project Details\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n\n\n\n\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <div [ngSwitch]="homepagetab">\n\n          <ion-list *ngSwitchCase="\'personaldetials\'">\n            <ion-grid class="Segment-content personal-detials-Segment">\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Name:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  {{employee.Name}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Company Name:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  {{employee.Vendor}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Address:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  {{employee.address}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Primary contact:\n                </ion-col>\n                <ion-col no-padding col-12 class="highlight-text-blue">\n                  {{employee.mailID}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Contact Number:\n                </ion-col>\n                <ion-col no-padding col-12 class="highlight-text-blue">\n                  {{employee.contactNo}}\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Contact Period:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  25-Jan-2019 to 25-Aug-2019\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-list>\n\n\n          <ion-list *ngSwitchCase="\'projectdetails\'">\n            <ion-grid class="Segment-content project-detials-Segment">\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Project Name:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  {{employee.projectName}}\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col no-padding col-12>\n                  Duration:\n                </ion-col>\n                <ion-col no-padding col-12>\n                  3 months\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-list>\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-view/employees-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__["a" /* MockData */]])
    ], EmployeesView);
    return EmployeesView;
}());

//# sourceMappingURL=employees-view.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesAdd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmployeesAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeesAdd = /** @class */ (function () {
    function EmployeesAdd(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Add Employee';
        if (navParams.data && navParams.data != undefined && navParams.data > 0) {
            this.title = 'Edit Employee';
        }
    }
    EmployeesAdd.prototype.ionViewDidLoad = function () {
    };
    EmployeesAdd.prototype.pop = function () {
        this.navCtrl.pop();
    };
    EmployeesAdd.prototype.saveEmployee = function () {
        this.navCtrl.pop();
    };
    EmployeesAdd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-employees-add',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-add/employees-add.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button (click)="pop()" ion-button text-only>\n              Cancel\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>{{title}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n          <ion-buttons padding-right>\n            <button (click)="saveEmployee()" ion-button icon-only>\n              <span class="icon-save"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-add/employees-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], EmployeesAdd);
    return EmployeesAdd;
}());

//# sourceMappingURL=employees-add.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_state__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_endpoints__ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Request = /** @class */ (function () {
    function Request(http, state, oAuthSvc) {
        this.http = http;
        this.state = state;
        this.oAuthSvc = oAuthSvc;
    }
    Request.prototype.get = function (qry, prm) {
        var aQry = this.formatQuery(qry, prm);
        return this.http.get(aQry, this.getOptions());
    };
    Request.prototype.post = function (qry, prm, data) {
        var aQry = this.formatQuery(qry, prm);
        return this.http.post(aQry, data, this.getOptions());
    };
    Request.prototype.put = function (qry, prm, data) {
        var aQry = this.formatQuery(qry, prm);
        return this.http.put(aQry, data, this.getOptions());
    };
    Request.prototype.delete = function (qry, prm) {
        var aQry = this.formatQuery(qry, prm);
        return this.http.delete(aQry, this.getOptions());
    };
    Request.prototype.postToSap = function (qry, prm, data) {
        var _this = this;
        var sapHeaders = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': 'Fetch',
            'Accept': 'application/json'
        };
        var sapUrl = __WEBPACK_IMPORTED_MODULE_5__settings_endpoints__["a" /* Endpoints */].uri.sap.r3TokenURI;
        return this.http.get(sapUrl, { headers: sapHeaders, observe: 'response' }).switchMap(function (result) {
            var sapPostHeaders = {
                'Content-Type': 'application/json',
                'X-CSRF-Token': result.headers.get("x-csrf-token"),
                'Accept': 'application/json'
            };
            var postoptions = { headers: sapPostHeaders };
            var aQry = _this.formatQuery(qry, prm);
            return _this.http.post(aQry, data, postoptions);
        });
    };
    Request.prototype.formatQuery = function (qry, prm) {
        var theString = arguments[0];
        if (arguments.length !== 2) {
            return theString;
        }
        var theParams = arguments[1];
        for (var i = 0; i < theParams.length; i++) {
            if (theParams[i] !== undefined && theParams[i] !== null) {
                // tslint:disable-next-line:quotemark
                var regEx = new RegExp("\\{" + i + "\\}", "gm");
                theString = theString.replace(regEx, theParams[i]);
            }
        }
        return theString;
    };
    Request.prototype.getOptions = function () {
        var heads = {
            "Cache-control": 'no-cache,no-store',
            'Expires': '0',
            'Pragma': 'no-cache',
            'x-access-token': this.getToken(),
            'x-userid': this.getId()
        };
        return { headers: heads };
    };
    Request.prototype.getToken = function () {
        var token = this.oAuthSvc.getIdToken();
        token = token ? token : '';
        return __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* Settings */].isOktaRequired ? token : 'test';
    };
    Request.prototype.getId = function () {
        return this.state.get(this.state.data.userid) ? this.state.get(this.state.data.userid) : '';
    };
    Request.prototype.getSAPData = function (qry, prm) {
        var heads = {
            'accept': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Authorization': 'Basic QUxFUkVNT1RFOlN5c2FkbWluMQ==',
            'Access-Control-Allow-Origin': '*',
            'x-userid': this.getId()
        };
        var options = { headers: heads, withCredentials: true };
        var aQry = this.formatQuery(qry, prm);
        var response = this.http.get(aQry, options);
        return response;
    };
    Request.prototype.getImageUrl = function (qry, prm) {
        return this.formatQuery(qry, prm);
    };
    Request = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_4__state_state__["a" /* State */],
            __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__["OAuthService"]])
    ], Request);
    return Request;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_touch_id__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TouchIdProvider = /** @class */ (function () {
    function TouchIdProvider(touchid, alertController) {
        this.touchid = touchid;
        this.alertController = alertController;
    }
    TouchIdProvider.prototype.getMessage = function (err) {
        if (err === 'cordova_not_available') {
            return 'Platform isn\'t available';
        }
        if (!err || !err.localizedDescription) {
            return 'Something went wrong';
        }
        return err.localizedDescription;
    };
    TouchIdProvider.prototype.isTouchAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var err_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.touchid.isAvailable()];
                                case 1:
                                    _a.sent();
                                    resolve(true);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_1 = _a.sent();
                                    this.alertController.create({
                                        title: 'Error',
                                        subTitle: this.getMessage(err_1),
                                        buttons: ['Ok']
                                    }).present();
                                    resolve(false);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    TouchIdProvider.prototype.verifyFingerPrint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var err_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.touchid.verifyFingerprint('Scan your fingerprint please')];
                                case 1:
                                    _a.sent();
                                    resolve(true);
                                    return [3 /*break*/, 3];
                                case 2:
                                    err_2 = _a.sent();
                                    this.alertController.create({
                                        title: 'Error',
                                        subTitle: this.getMessage(err_2),
                                        buttons: ['Ok']
                                    }).present();
                                    resolve(false);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    TouchIdProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_touch_id__["a" /* TouchID */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], TouchIdProvider);
    return TouchIdProvider;
}());

//# sourceMappingURL=touch-id.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n    <ion-content class="login-background">\n        <ion-card no-margin login-card class="fullWidth">\n          <img src="../../assets/imgs/loginbg.png" />\n          <div class="card-title">\n              <span class="icon-iff"></span>\n            Welcome!\n            <div class="card-subtitle">Signup to continue</div>\n          </div>\n        </ion-card>\n        <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n          <ion-grid>\n            <ion-row>\n              <ion-col col-10 mx-auto text-center>\n                  <ion-item logintextfield>\n                      <ion-label color="primary" floating>username</ion-label>\n                      <ion-input name="username" id="username" type="text"  required  name="username" ></ion-input>\n                    </ion-item>\n                <ion-item logintextfield>\n                  <ion-label color="primary" floating>Mobile</ion-label>\n                  <ion-input name="username" id="mob" type="number" max="10" required  name="mobile" ></ion-input>\n                </ion-item>\n                <ion-item logintextfield>\n                  <ion-label color="primary" floating>Password</ion-label>\n                  <ion-input name="username" id="pass" type="password" required ></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-10 mx-auto text-center *ngIf="isTokenRequired">\n                <ion-item logintextfield>\n                  <ion-label color="primary" floating>Common Password</ion-label>\n                  <ion-input name="password" id="passwordField" type="{{type}}" required [(ngModel)]="password"></ion-input>\n                  <button eyeIcon *ngIf="!showPass" ion-button clear type="button" item-right (click)="showPassword()">\n                    <span class="icon-eye"></span>\n                  </button>\n                  <button eyeIcon *ngIf="showPass" ion-button clear type="button" item-right (click)="showPassword()">\n                    <span class="icon-hide-eye"></span>\n                  </button>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n      \n            <ion-row>\n              <ion-col col-10 mx-auto text-center>\n                <div *ngIf="error" red text-left>{{error}}</div>\n                <button loginbutton ion-button block type="submit" [disabled]="!loginForm.form.valid">Submit\n                </button>\n      \n              </ion-col>\n            </ion-row>\n      \n            <ion-row>\n              <ion-col col-10 mx-auto text-center>\n                <p (click)="signup()">signup</p>\n      \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n        <!-- <button type="button" (click)="checktouchid()">touchID\n        </button> -->\n      </ion-content>\n      \n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth-module/reset/reset.module": [
		924,
		1
	],
	"../pages/auth-module/signup/signup.module": [
		925,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockData = /** @class */ (function () {
    function MockData() {
        this.vendors = [
            { id: 1, name: 'Aspire Systems India Pvt Ltd', logoFullView: './../assets/imgs/vendor-logo/AS_Full.png', logo: './../assets/imgs/vendor-logo/AS.png', employeesCount: 6, address: '94 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@aspiresys.com', 'santhosh@aspiresys.com'], contactNo: '044-79865489', startDate: '28 Feb 2018 ', expiryDate: '1 Mar 2019 ' },
            { id: 2, name: 'Cognizant Technology Solutions Corporation(CTS)', logoFullView: './../assets/imgs/vendor-logo/cts_full.png', logo: './../assets/imgs/vendor-logo/CTS.jpeg', employeesCount: 4, address: '95 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@cts.com', 'santhosh@cts.com'], contactNo: '044-49865489', startDate: '28 Mar 2018 ', expiryDate: '28 Mar 2020 ' },
            { id: 3, name: 'ObjectFrontier Software(OFS)', logoFullView: './../assets/imgs/vendor-logo/ofs_full.png', logo: './../assets/imgs/vendor-logo/OFS.png', employeesCount: 4, address: '96 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@ofs.com', 'santhosh@ofs.com'], contactNo: '044-29865489', startDate: '28 Apr  2018 ', expiryDate: '28 Apr 2021 ' },
            { id: 4, name: 'SwaaS Systems Private Limited', logoFullView: './../assets/imgs/vendor-logo/swaas_full.png', logo: './../assets/imgs/vendor-logo/swaas.png', employeesCount: 4, address: '94 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@aspiresys.com', 'santhosh@aspiresys.com'], contactNo: '044-79865489', startDate: '28 Feb 2018 ', expiryDate: '1 Mar 2019 ' },
            { id: 5, name: 'Infosys Private Limited', logoFullView: './../assets/imgs/vendor-logo/infosys.jpg', logo: './../assets/imgs/vendor-logo/infosys.jpg', employeesCount: 2, address: '95 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@cts.com', 'santhosh@cts.com'], contactNo: '044-49865489', startDate: '28 Mar 2018 ', expiryDate: '28 Mar 2020 ' },
            { id: 6, name: 'CSS Corp Private Limited', logoFullView: './../assets/imgs/vendor-logo/css_full.jpg', logo: './../assets/imgs/vendor-logo/csscorp.png', employeesCount: 2, address: '96 NE. Magnolia street Branford, CT 06405', primaryContacts: ['ramesh@ofs.com', 'santhosh@ofs.com'], contactNo: '044-29865489', startDate: '28 Apr 2018 ', expiryDate: '28 Apr 2021 ' },
        ];
        this.employees = [
            { id: 1, vendorId: 4, Vendor: "Swaas", Name: "Kuttimani", ProfileImg: './../assets/imgs/user1.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kuttimani@swaas.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Feb 28 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 2, vendorId: 3, Vendor: "OFS", Name: "Thamaraiselvam Thangavel", ProfileImg: './../assets/imgs/user2.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Thamaraiselvam@ofs.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 2, projectName: 'CRS - Mobile App' },
            { id: 3, vendorId: 2, Vendor: "CTS", Name: "Srinivasan Lakshminarayanan", ProfileImg: './../assets/imgs/user3.png', Designation: "Scrum Master", DesignationID: 2, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Srinivasan@cts.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Apr 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 3, projectName: '4D - Web Development' },
            { id: 4, vendorId: 3, Vendor: "OFS", Name: "Sivaramakrishnan Muralidharan", ProfileImg: './../assets/imgs/user1.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sivaramakrishnan@ofs.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Jun 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 4, projectName: '4D - Mobile App' },
            { id: 5, vendorId: 4, Vendor: "Swaas", Name: "Sangeetha Krishnamoorthy", ProfileImg: './../assets/imgs/user4.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sangeetha@swaas.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed July 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 5, projectName: 'DCT - Web Development' },
            { id: 6, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Irshad", ProfileImg: './../assets/imgs/user1.png', Designation: "Designer", DesignationID: 3, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Irshad@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Aug 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 6, projectName: 'DCT - Mobile App' },
            { id: 7, vendorId: 3, Vendor: "OFS", Name: "Anu", ProfileImg: './../assets/imgs/user4.png', Designation: "Tester", DesignationID: 4, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Anu@ofs.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Sep 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 7, projectName: 'Colors - Web Development' },
            { id: 8, vendorId: 3, Vendor: "OFS", Name: "UD", ProfileImg: './../assets/imgs/user1.png', Designation: "Business Analyst", DesignationID: 5, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'UD@ofs.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Oct 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 8, projectName: 'Colors - Mobile App' },
            { id: 9, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Sathish", ProfileImg: './../assets/imgs/user2.png', Designation: "Designer", DesignationID: 3, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sathish@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Nov 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 9, projectName: 'Pop - Web Development' },
            { id: 10, vendorId: 2, Vendor: "CTS", Name: "Rajesh", ProfileImg: './../assets/imgs/user3.png', Designation: "Scrum Master", DesignationID: 2, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Rajesh@cts.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Apr 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 11, vendorId: 2, Vendor: "CTS", Name: "Narayanan", ProfileImg: './../assets/imgs/user3.png', Designation: "Scrum Master", DesignationID: 2, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Narayanan@cts.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Apr 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 12, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Kumar", ProfileImg: './../assets/imgs/user2.png', Designation: "Business Analyst", DesignationID: 5, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kumar@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Nov 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 13, vendorId: 2, Vendor: "CTS", Name: "Vasu", ProfileImg: './../assets/imgs/user3.png', Designation: "Scrum Master", DesignationID: 2, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Vasu@cts.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Apr 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 14, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Shakthi", ProfileImg: './../assets/imgs/user1.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Shakthi@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Nov 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 15, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Sathish", ProfileImg: './../assets/imgs/user3.png', Designation: "Tester", DesignationID: 4, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sathish@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Nov 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 16, vendorId: 1, Vendor: "Aspire Systems India Pvt Ltd", Name: "Sunish", ProfileImg: './../assets/imgs/user2.png', Designation: "Designer", DesignationID: 3, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sunish@aspiresys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Nov 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 17, vendorId: 4, Vendor: "Swaas", Name: "Anand", ProfileImg: './../assets/imgs/user2.png', Designation: "Tester", DesignationID: 4, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Anand@swaas.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 1 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 18, vendorId: 4, Vendor: "Swaas", Name: "Sathish", ProfileImg: './../assets/imgs/user1.png', Designation: "Designer", DesignationID: 3, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Sathish@swaas.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 2 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 19, vendorId: 5, Vendor: "Infosys", Name: "Arjun", ProfileImg: './../assets/imgs/user3.png', Designation: "Business Analyst", DesignationID: 5, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kuttimani@infosys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 6 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 20, vendorId: 5, Vendor: "Infosys", Name: "Rakesh", ProfileImg: './../assets/imgs/user1.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kuttimani@infosys.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 3 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 21, vendorId: 6, Vendor: "CSS Corp", Name: "Arun", ProfileImg: './../assets/imgs/user2.png', Designation: "Developer", DesignationID: 1, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kuttimani@csscorp.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 4 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
            { id: 22, vendorId: 6, Vendor: "CSS Corp", Name: "Shri", ProfileImg: './../assets/imgs/user1.png', Designation: "Business Analyst", DesignationID: 5, address: '94 NE. Magnolia street Branford, CT 06405', mailID: 'Kuttimani@csscorp.com', contactNo: '044-79865489', startDate: new Date('Wed Feb 28 2018 12:09:08 GMT+0530 (India Standard Time)'), ExpiryDate: new Date('Wed Mar 5 2019 12:09:08 GMT+0530 (India Standard Time)'), projectId: 1, projectName: 'CRS - Web Development' },
        ];
        this.projects = [
            { id: 1, name: 'CRS - Web Development', poNumber: 12345, projectHeadAvatar: './../assets/imgs/user1.png', teamMembersCount: 9 },
            { id: 2, name: 'CRS - Mobile App', poNumber: 54321, projectHeadAvatar: './../assets/imgs/user2.png', teamMembersCount: 5 },
            { id: 3, name: '4D - Web Development', poNumber: 21345, projectHeadAvatar: './../assets/imgs/user3.png', teamMembersCount: 13 },
            { id: 4, name: '4D - Mobile App', poNumber: 12435, projectHeadAvatar: './../assets/imgs/user4.png', teamMembersCount: 5 },
            { id: 5, name: 'DCT - Web Development', poNumber: 52341, projectHeadAvatar: './../assets/imgs/user1.png', teamMembersCount: 8 },
            { id: 6, name: 'DCT - Mobile App', poNumber: 13245, projectHeadAvatar: './../assets/imgs/user2.png', teamMembersCount: 9 },
            { id: 7, name: 'Colors - Web Development', poNumber: 23154, projectHeadAvatar: './../assets/imgs/user3.png', teamMembersCount: 10 },
            { id: 8, name: 'Colors - Mobile App', poNumber: 23451, projectHeadAvatar: './../assets/imgs/user4.png', teamMembersCount: 6 },
            { id: 9, name: 'Pop - Web Development', poNumber: 23451, projectHeadAvatar: './../assets/imgs/user2.png', teamMembersCount: 3 },
        ];
    }
    MockData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MockData);
    return MockData;
}());

//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Endpoints; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__(56);

var Endpoints = /** @class */ (function () {
    function Endpoints() {
    }
    Endpoints.uri = {
        user: {
            info: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.basUrl + 'userservice/{0}',
            photo: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.basUrl + 'userservice/{0}/photo',
            search: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.basUrl + 'userservice?displayname={0}',
            preferences: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.basUrl + 'preferences/user/{0}',
        },
        trend: {
            list: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.trendUrl + 'trends?index={0}&limit={1}',
            getComment: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.trendUrl + "comments/{0}?index={1}&limit={2}",
            postComment: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.trendUrl + "comments/{0}",
            image: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.trendUrl + 's3/{0}?token={1}',
        },
        sap: {
            r3TokenURI: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].AppUrl.sapurl + 'ZR3_MASTER_DATA_SRV/',
        }
    };
    return Endpoints;
}());

//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.authenticate = function (user) {
        var fd = new FormData();
        fd.append('username', user.username);
        fd.append('password', user.password);
        return this.http.post('/auth/login', fd);
        //return this.http.get('./assets/mocks/login-res.mock.json');
    };
    LoginService.prototype.resetPassword = function (data) {
        var session = JSON.parse(sessionStorage.getItem('user-data'));
        var value = {
            "loginId": (session['loginId']) ? session['loginId'] : "",
            "oldPassword": (data.oldPassword) ? data.oldPassword : "",
            "newPassword": (data.newPassword) ? data.newPassword : ""
        };
        console.log('value', value);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/users/resetPassword', value, { headers: headers });
    };
    LoginService.prototype.login = function (data) {
        return this.http.post('/login', data);
    };
    LoginService.prototype.forget_password = function (data) {
        return this.http.post('/password/sms', data);
    };
    LoginService.prototype.reset_password = function (data) {
        //   return this.http.post('')
    };
    LoginService.prototype.otp = function (data) {
        this.http.post('/password/sms', data);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login_service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_broadcast_app_broadcast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(network, appBroadcast) {
        this.network = network;
        this.appBroadcast = appBroadcast;
        this.previousStatus = ConnectionStatusEnum.Online;
    }
    NetworkProvider.prototype.initializeNetworkEvents = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                _this.appBroadcast.doCheckNetwork({ type: 'internet_offline' });
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Offline) {
                _this.appBroadcast.doCheckNetwork({ type: 'internet_online' });
            }
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    };
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2__app_broadcast_app_broadcast__["a" /* AppBroadcast */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_details_vendor_details__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_search_vendor_search__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendors_add_vendors_add__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VendorPage = /** @class */ (function () {
    function VendorPage(navCtrl, navParams, mockData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.vendors = [];
        this.vendors = this.mockData.vendors;
    }
    VendorPage.prototype.ionViewDidLoad = function () {
    };
    VendorPage.prototype.getDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vendor_details_vendor_details__["a" /* VendorDetailsPage */], id);
    };
    VendorPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vendor_search_vendor_search__["a" /* VendorSearchPage */]);
    };
    VendorPage.prototype.addVendor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__vendors_add_vendors_add__["a" /* VendorsAddPage */]);
    };
    VendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendor',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor/vendor.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n\n        <ion-col no-padding col-4 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col no-padding col-4 header-title>\n          <ion-title>Vendor List</ion-title>\n        </ion-col>\n\n        <ion-col no-padding col-4 header-right-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="addVendor()">\n              <span class="icon-add"></span>\n            </button>\n          </ion-buttons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="search()">\n              <span class="icon-search"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card class="vendor-card" *ngFor="let vendor of vendors">\n    <ion-row (click)="getDetails(vendor.id)">\n\n      <ion-col no-padding col-2 class="vendor-card-user-profile">\n        <img [src]="vendor.logo">\n      </ion-col>\n\n      <ion-col no-padding col-10 class="vendor-card-content">\n        <ion-row col-12>\n          <ion-col no-padding col-12 class="vendor-card-title">\n            {{vendor.name}}\n          </ion-col>\n          <ion-col no-padding col-12 class="vendor-description">\n            {{vendor.employeesCount}} Employees\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor/vendor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__["a" /* MockData */]])
    ], VendorPage);
    return VendorPage;
}());

//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_details_vendor_details__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VendorSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorSearchPage = /** @class */ (function () {
    function VendorSearchPage(navCtrl, navParams, mockData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
    }
    VendorSearchPage.prototype.ionViewDidLoad = function () {
    };
    VendorSearchPage.prototype.searchedData = function (searchTxt) {
        if (searchTxt.target.value && searchTxt.target.value.trim() != '') {
            this.searchedVendorList = Object(__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"])(this.mockData.vendors, function (vendor) { return vendor.name.toLowerCase().includes(searchTxt.target.value.toLowerCase()); });
        }
        else {
            this.searchedVendorList = [];
        }
    };
    VendorSearchPage.prototype.getDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__vendor_details_vendor_details__["a" /* VendorDetailsPage */], id);
    };
    VendorSearchPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    VendorSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vendor-search',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor-search/vendor-search.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              <span class="font-1point5rem txt-transform-none"> Back </span>\n        \n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title> Search</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentbg" padding>\n  <ion-grid no-padding>\n    <ion-row margin-bottom no-padding align-items-center>\n      <ion-col no-padding>\n          <ion-searchbar class="customSearchBar" placeholder="Search Vendors" (ionClear)="searchedData($event)"   (ionInput)="searchedData($event)"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card class="vendor-card" *ngFor="let vendor of searchedVendorList">\n    <ion-row (click)="getDetails(vendor.id)">\n\n      <ion-col no-padding col-2 class="vendor-card-user-profile">\n        <img [src]="vendor.logo">\n      </ion-col>\n\n      <ion-col no-padding col-10 class="vendor-card-content">\n        <ion-row col-12>\n          <ion-col no-padding col-12 class="vendor-card-title">\n            {{vendor.name}}\n          </ion-col>\n          <ion-col no-padding col-12 class="vendor-description">\n            {{vendor.employeesCount}} Employees\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-card>\n \n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/vendor-module/vendor-search/vendor-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_mock_data_mock_data__["a" /* MockData */]])
    ], VendorSearchPage);
    return VendorSearchPage;
}());

//# sourceMappingURL=vendor-search.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_add_employees_add__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_search_employees_search__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_view_employees_view__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_mock_data_mock_data__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeesList = /** @class */ (function () {
    function EmployeesList(navCtrl, actCtrl, mockData) {
        this.navCtrl = navCtrl;
        this.actCtrl = actCtrl;
        this.mockData = mockData;
        this.employees = [];
        this.EmployeeSortFields = [
            { field: 'Name', displayName: 'Name' },
            { field: 'Designation', displayName: 'Designation' },
            { field: 'Vendor', displayName: 'Vendor' },
        ];
        this.sortbyfield = "Name";
        this.sortbyorder = "asc";
        this.today = new Date();
        this.getEmployees();
    }
    EmployeesList.prototype.addEmployee = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employees_add_employees_add__["a" /* EmployeesAdd */]);
    };
    EmployeesList.prototype.filterEmployee = function () {
        var actionSheet = this.actCtrl.create({
            title: 'Sort By',
            cssClass: '',
            buttons: this.getActionSheetitem()
        });
        actionSheet.present();
    };
    EmployeesList.prototype.getIcons = function (item) {
        if (this.sortbyfield == item.field) {
            if (this.sortbyorder == 'asc') {
                return 'showIconAsc';
            }
            else {
                return 'showIconDesc';
            }
        }
        else {
            return null;
        }
    };
    EmployeesList.prototype.getActionSheetitem = function () {
        var _this = this;
        var actionlist = [];
        this.EmployeeSortFields.forEach(function (item) {
            actionlist.push({
                text: item.displayName,
                icon: _this.getIcons(item),
                handler: function () {
                    if (_this.sortbyfield != item.field) {
                        _this.sortbyfield = item.field;
                        _this.sortbyorder = 'asc';
                    }
                    else {
                        if (_this.sortbyorder == 'asc') {
                            _this.sortbyorder = 'desc';
                        }
                        else {
                            _this.sortbyorder = 'asc';
                        }
                    }
                    _this.sortEmployees();
                }
            });
        });
        actionlist.push({
            text: 'Cancel',
            role: 'cancel',
            handler: function () {
            }
        });
        return actionlist;
    };
    EmployeesList.prototype.getEmployees = function () {
        var _this = this;
        this.employees = this.mockData.employees;
        this.employees.forEach(function (emp) {
            var timeDiff = Math.abs(emp['ExpiryDate'].getTime() - _this.today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 7 && diffDays > 0) {
                emp['showExpires'] = diffDays;
            }
            emp['indicator'] = _this.getIndicator(emp.DesignationID);
        });
        this.sortEmployees();
    };
    EmployeesList.prototype.getIndicator = function (Id) {
        switch (Id) {
            case 1:
                return 'active-status role1';
            case 2:
                return 'active-status role2';
            case 3:
                return 'active-status role3';
            case 4:
                return 'active-status role4';
            case 5:
                return 'active-status role5';
        }
    };
    EmployeesList.prototype.sortEmployees = function () {
        this.employees = Object(__WEBPACK_IMPORTED_MODULE_5_lodash__["orderBy"])(this.employees, [this.sortbyfield], [this.sortbyorder]);
    };
    EmployeesList.prototype.searchEmployee = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__employees_search_employees_search__["a" /* EmployeesSearch */]);
    };
    EmployeesList.prototype.viewEmployee = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__employees_view_employees_view__["a" /* EmployeesView */], id);
    };
    EmployeesList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'employees-list',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-list/employees-list.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col no-padding col-6 text-center>\n          <ion-title>Employees List</ion-title>\n        </ion-col>\n\n        <ion-col no-padding col-4 header-right-icons>\n          <ion-buttons>\n            <button (click)="addEmployee()" ion-button icon-only>\n              <span class="icon-add"></span>\n            </button>\n          </ion-buttons>\n          <ion-buttons>\n            <button (click)="filterEmployee()" ion-button icon-only>\n              <span class="icon-filter"></span>\n            </button>\n          </ion-buttons>\n          <ion-buttons>\n            <button (click)="searchEmployee()" ion-button icon-only>\n              <span class="icon-search"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list class="custom-item-sliding-list">\n    <ng-container *ngFor="let emp of employees;let i = index;" >\n      <ion-item-sliding #item class="custom-item-sliding">\n        <ion-item (click)="viewEmployee(emp.id)" class="custom-ion-item">\n          <ion-row custom-sliding-design>\n\n            <ion-col no-padding col-2 class="employee-card-img">\n              <ion-avatar item-start>\n                <img [src]="emp.ProfileImg">\n              </ion-avatar>\n              <div [class]="emp.indicator"></div>\n            </ion-col>\n\n            <ion-col no-padding col-10 class="employee-card-content">\n              <ion-row>\n                <ion-col class="employee-card-title" no-padding col-12>\n                  <span class="employee-name" [innerText]="emp.Name"></span>\n                  <div class="expires-alert" *ngIf="emp.showExpires != undefined">\n                    <span class="expires-alert-title">Expires in:</span>\n                    <span class="expires-alert-info">{{emp.showExpires}}D</span>\n                  </div>\n                </ion-col>\n                <ion-col no-padding col-12 class="employee-description">\n                  <span>{{emp.Designation}}</span> at <span>{{emp.Vendor}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n\n\n\n\n\n          </ion-row>\n        </ion-item>\n\n        \n        <ion-item-options>\n          <button ion-button (click)="openTrack(project)">\n            <span class="icon-email"></span>\n          </button>\n          <button ion-button (click)="openFeedback(project)">\n            <span class="icon-call"></span>\n          </button>\n          <button ion-button (click)="openNotes(project)">\n            <span class="icon-comment"></span>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ng-container>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-list/employees-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_mock_data_mock_data__["a" /* MockData */]])
    ], EmployeesList);
    return EmployeesList;
}());

//# sourceMappingURL=employees-list.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EmployeesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeesSearch = /** @class */ (function () {
    function EmployeesSearch(navCtrl, navParams, mockData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.employees = [];
        this.today = new Date();
        this.searchedEmployeeList = [];
        this.getEmployees();
    }
    EmployeesSearch.prototype.ionViewDidLoad = function () {
    };
    EmployeesSearch.prototype.pop = function () {
        this.navCtrl.pop();
    };
    EmployeesSearch.prototype.getEmployees = function () {
        var _this = this;
        this.employees = this.mockData.employees;
        this.employees.forEach(function (emp) {
            var timeDiff = Math.abs(emp['ExpiryDate'].getTime() - _this.today.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if (diffDays < 7 && diffDays > 0) {
                emp['showExpires'] = diffDays;
            }
            emp['indicator'] = _this.getIndicator(emp.DesignationID);
        });
    };
    EmployeesSearch.prototype.getIndicator = function (Id) {
        switch (Id) {
            case 1:
                return 'active-status role1';
            case 2:
                return 'active-status role2';
            case 3:
                return 'active-status role3';
            case 4:
                return 'active-status role4';
            case 5:
                return 'active-status role5';
        }
    };
    EmployeesSearch.prototype.searchedData = function (searchTxt) {
        if (searchTxt.target.value && searchTxt.target.value.trim() != '') {
            this.searchedEmployeeList = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"])(this.employees, function (emp) { return emp.Name.toLowerCase().includes(searchTxt.target.value.toLowerCase()); });
        }
        else {
            this.searchedEmployeeList = [];
        }
    };
    EmployeesSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-employees-search',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-search/employees-search.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="pop()">\n              <span class="font-1point5rem txt-transform-none"> Back </span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 header-title>\n          <ion-title> Search</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="contentbg" padding>\n  <ion-grid no-padding>\n    <ion-row margin-bottom no-padding align-items-center>\n      <ion-col no-padding>\n        <ion-searchbar class="customSearchBar" placeholder="Search Employee" (ionClear)="searchedData($event)"\n          (ionInput)="searchedData($event)"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list class="custom-item-sliding-list">\n    <ng-container *ngFor="let emp of searchedEmployeeList;let i = index;" (click)="viewEmployee()">\n      <ion-item-sliding #item class="custom-item-sliding">\n        <ion-item class="custom-ion-item">\n          <ion-row custom-sliding-design>\n\n            <ion-col no-padding col-2 class="vendor-card-img">\n              <ion-avatar item-start>\n                <img [src]="emp.ProfileImg">\n              </ion-avatar>\n              <div [class]="emp.indicator"></div>\n            </ion-col>\n\n            <ion-col no-padding col-10 class="vendor-card-content">\n              <ion-row>\n                <ion-col class="vendor-card-title" no-padding col-12>\n                  <ion-row>\n                    <ion-col no-padding>\n                      <span class="employee-name" [innerText]="emp.Name"></span>\n                    </ion-col>\n                  </ion-row>\n\n\n                  <div class="expires-alert" *ngIf="emp.showExpires != undefined">\n                    <span class="expires-alert-title">Expires in:</span>\n                    <span class="expires-alert-info">{{emp.showExpires}}D</span>\n                  </div>\n                </ion-col>\n                <ion-col no-padding col-12 class="vendor-description">\n                  <span>{{emp.Designation}}</span> at <span>{{emp.Vendor}}</span>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n\n          </ion-row>\n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button color="primary" (click)="openTrack(project)">\n            <ion-icon name="icon-email"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="openFeedback(project)">\n            <ion-icon name="icon-call"></ion-icon>\n          </button>\n          <button ion-button color="primary" (click)="openNotes(project)">\n            <span class="icon-Notes"></span>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ng-container>\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/employee-module/employees-search/employees-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__["a" /* MockData */]])
    ], EmployeesSearch);
    return EmployeesSearch;
}());

//# sourceMappingURL=employees-search.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastController, menuCtrl, state) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.state = state;
        this.trends = [];
        this.trendsCount = 0;
        this.menuCtrl.swipeEnable(true);
        this.setGreeting();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.setUserInfo();
    };
    HomePage.prototype.setUserInfo = function () {
        this.userInfo = this.state.get(this.state.data.userInfo);
        // this.displayName = userInfo.DisplayName;
    };
    HomePage.prototype.setGreeting = function () {
        var currentData = new Date();
        var time = currentData.getHours();
        if (time < 12) {
            this.greeting = "Good Morning";
        }
        else if (time >= 12 && time < 16) {
            this.greeting = "Good Afternoon";
        }
        else {
            this.greeting = "Good Evening";
        }
    };
    HomePage.prototype.openSearch = function () {
        var toast = this.toastController.create({
            message: 'Search Clicked',
            duration: 1000,
            position: 'bottom',
            cssClass: 'customToaster-error'
        });
        toast.present(toast);
    };
    HomePage.prototype.getRelativeTime = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(date).fromNow();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/home-module/home/home.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 header-title>\n          <ion-title>Home</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n          <ion-buttons padding-right>\n            <button (click)="openSearch()" ion-button icon-only>\n              <span class="icon-search"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/home-module/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* State */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StorageProvider = /** @class */ (function () {
    function StorageProvider(secureStorage, platform, storage) {
        this.secureStorage = secureStorage;
        this.platform = platform;
        this.storage = storage;
        this.data = {
            isTouchid: 'istouchid',
            userInfo: 'userinfo',
            skipIntro: 'skipintropage',
            accessToken: 'accessToken',
            idToken: 'idToken',
            username: 'username',
            password: 'password',
            MFAAnswer: 'MFAAnswer',
            test: 'test'
        };
    }
    StorageProvider.prototype.isCordovaPlatform = function () {
        return this.platform.is('cordova');
    };
    StorageProvider.prototype.setSecureStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.secureStorage.create('iff_crs')];
                    case 1:
                        _a.secureStorageObject = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isCordovaPlatform()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.get(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.setSecureStorage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.secureStorageObject.get(key)];
                    case 5:
                        data = _a.sent();
                        try {
                            return [2 /*return*/, JSON.parse(data)];
                        }
                        catch (err) {
                            return [2 /*return*/, data];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        return [2 /*return*/, ''];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isCordovaPlatform()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.set(key, value)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.setSecureStorage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        if (typeof value === 'object') {
                            value = JSON.stringify(value);
                        }
                        return [4 /*yield*/, this.secureStorageObject.set(key, value)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        err_2 = _a.sent();
                        return [2 /*return*/, ''];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider.prototype.remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isCordovaPlatform()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.storage.remove(key)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.setSecureStorage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, this.secureStorageObject.remove(key)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        err_3 = _a.sent();
                        return [2 /*return*/, ''];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    StorageProvider.prototype.removeAll = function () {
        var _this = this;
        Object.keys(this.data).forEach(function (ele) {
            _this.remove(_this.data[ele]);
        });
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["a" /* SecureStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_search_project_search__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_add_projects_add__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectListPage = /** @class */ (function () {
    function ProjectListPage(navCtrl, navParams, mockData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.projectList = [];
        this.getProjectList();
    }
    ProjectListPage.prototype.getProjectList = function () {
        this.projectList = this.mockData.projects;
    };
    ProjectListPage.prototype.ionViewDidLoad = function () {
    };
    ProjectListPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__project_search_project_search__["a" /* ProjectSearchPage */]);
    };
    ProjectListPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__projects_add_projects_add__["a" /* ProjectsAddPage */]);
    };
    ProjectListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-list',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/project-list/project-list.html"*/'\n<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n\n        <ion-col no-padding col-4 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n        <ion-col no-padding col-4 header-title>\n          <ion-title>Projects</ion-title>\n        </ion-col>\n\n        <ion-col no-padding col-4 header-right-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="add()">\n              <span class="icon-add"></span>\n            </button>\n          </ion-buttons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="search()">\n              <span class="icon-search"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n  <div *ngIf="projectList.length>0">\n\n    <ion-card class="project-card" *ngFor="let project of projectList">\n      <ion-row>\n\n        <ion-col no-padding col-8 class="project-card-content">\n          <ion-row col-12>\n            <ion-col no-padding col-12 class="project-card-title">\n              <span>\n                {{project.name}}\n              </span>\n            </ion-col>\n            <ion-col no-padding col-12 class="project-description">\n              <span>\n                {{project.poNumber}}\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col no-padding col-4 class="project-card-user-profile">\n          <ion-avatar>\n            <img [src]="project.projectHeadAvatar" />\n          </ion-avatar>\n          <div class="user-profile-background">\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;{{project.teamMembersCount}}\n          </div>\n        </ion-col>\n\n      </ion-row>\n    </ion-card>\n\n    <!-- <h2 class="card-title-text toolbar-title">{{project.name}}</h2>\n      <h2 class="card-description-text">{{project.poNumber}}</h2>\n      <div  item-end class="cusToggle">\n      <ion-avatar item-end animated-background float-left class="margin-0px pr-6px">\n        <img [src]="project.projectHeadAvatar"  \n        onerror="this.onerror=null;this.src=\'../assets/imgs/profile-image.png\';"\n        alt="Project" />\n    </ion-avatar>\n    <h2 item-end  class="card-description-text float-left pt-8px margin-0px">+ {{project.teamMembersCount}}</h2> -->\n  </div>\n\n  <div *ngIf="projectList.length==0">\n    Currently there\'s no projects.\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/project-list/project-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__["a" /* MockData */]])
    ], ProjectListPage);
    return ProjectListPage;
}());

//# sourceMappingURL=project-list.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProjectSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectSearchPage = /** @class */ (function () {
    function ProjectSearchPage(navCtrl, navParams, mockData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mockData = mockData;
        this.projectList = [];
        this.searchedProjectList = [];
        this.getProjectList();
    }
    ProjectSearchPage.prototype.getProjectList = function () {
        this.projectList = this.mockData.projects;
    };
    ProjectSearchPage.prototype.ionViewDidLoad = function () {
    };
    ProjectSearchPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ProjectSearchPage.prototype.searchedData = function (searchTxt) {
        if (searchTxt.target.value && searchTxt.target.value.trim() != '') {
            this.searchedProjectList = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"])(this.projectList, function (project) { return project.name.toLowerCase().includes(searchTxt.target.value.toLowerCase()); });
        }
        else {
            this.searchedProjectList = [];
        }
    };
    ProjectSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-project-search',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/project-search/project-search.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="pop()">\n              <span class="font-1point5rem txt-transform-none"> Back </span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 header-title>\n          <ion-title> Search</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentbg" padding>\n  <ion-grid no-padding>\n    <ion-row margin-bottom no-padding align-items-center>\n      <ion-col no-padding>\n        <ion-searchbar class="customSearchBar" placeholder="Search Project" (ionClear)="searchedData($event)"\n          (ionInput)="searchedData($event)"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list *ngIf="searchedProjectList.length>0">\n    <ion-item *ngFor="let project of searchedProjectList" no-border-top no-border-bottom margin-bottom-8>\n\n\n      <h2 class="card-title-text toolbar-title">{{project.name}}</h2>\n      <h2 class="card-description-text">{{project.poNumber}}</h2>\n      <div item-end class="cusToggle">\n        <ion-avatar item-end animated-background float-left class="margin-0px pr-6px">\n          <img [src]="project.projectHeadAvatar"\n            onerror="this.onerror=null;this.src=\'../assets/imgs/profile-image.png\';" alt="Project" />\n        </ion-avatar>\n        <h2 item-end class="card-description-text float-left pt-8px margin-0px">+ {{project.teamMembersCount}}</h2>\n      </div>\n    </ion-item>\n  </ion-list>\n \n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/project-search/project-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_mock_data_mock_data__["a" /* MockData */]])
    ], ProjectSearchPage);
    return ProjectSearchPage;
}());

//# sourceMappingURL=project-search.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProjectsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsAddPage = /** @class */ (function () {
    function ProjectsAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = 'Add Project';
        if (navParams.data && navParams.data != undefined && navParams.data > 0) {
            this.title = 'Edit Project';
        }
    }
    ProjectsAddPage.prototype.ionViewDidLoad = function () {
    };
    ProjectsAddPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ProjectsAddPage.prototype.saveProject = function () {
        this.navCtrl.pop();
    };
    ProjectsAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-projects-add',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/projects-add/projects-add.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              <span class="font-1point5rem">Cancel</span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>{{title}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n          <ion-buttons padding-right>\n            <button (click)="saveProject()" ion-button icon-only>\n              <span class="icon-save" font20></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contentbg" padding>\n  <ion-row>\n    <div class="roundedImg">\n      <img src="../../../assets/imgs/profile-image.png" alt="User" />\n    </div>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/project-module/projects-add/projects-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ProjectsAddPage);
    return ProjectsAddPage;
}());

//# sourceMappingURL=projects-add.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_search_notification_search__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the NotificationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationListPage = /** @class */ (function () {
    function NotificationListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationListPage.prototype.ionViewDidLoad = function () {
    };
    NotificationListPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__notification_search_notification_search__["a" /* NotificationSearchPage */]);
    };
    NotificationListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification-list',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/notification-module/notification-list/notification-list.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-4 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-4 header-title>\n          <ion-title>Notification</ion-title>\n        </ion-col>\n        <ion-col no-padding col-4 header-right-icons>\n          <ion-buttons padding-right>\n            <button (click)="search()" ion-button icon-only>\n              <span class="icon-search"></span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n  <ion-list class="pd-15px">\n    <ion-row>\n      <ion-col col-12 no-padding class="day">\n        <strong>Today(2)</strong>\n      </ion-col>\n      <ion-col col-12 no-padding class="">\n\n\n\n        <ion-card margin-bottom no-margin w-100 class="notification-card">\n          <ion-card-content class="notification-card-content">\n            <ion-row>\n              <ion-col col-2 no-padding class="notification-left-icon">\n                <span class="icon-delivered"></span>\n              </ion-col>\n\n              <ion-col col-10 no-padding>\n                <ion-row>\n                  <div><strong class="card-title-text">Colin Ochel</strong> <span class="card-title-text-type-1">\n                      Contract</span><strong Strong-text-one class="card-alert-text-bold-large"> Expires</strong><span\n                      class="card-title-text-type-1"> in </span><b class="card-title-text">2 days.</b></div>\n                </ion-row>\n                <ion-row mt-10 class="notification-meta">\n                  <div>\n                    <span>12.30 AM</span>\n                    <span class="separator">|</span>\n                    <span>From - <strong>Aspire Systems India Pvt Ltd</strong></span>\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n\n        <ion-card margin-bottom no-margin w-100 mt-10 class="notification-card">\n          <ion-card-content class="notification-card-content">\n            <ion-row>\n              <ion-col col-2 no-padding class="notification-left-icon">\n                <span class="icon-calender"></span>\n              </ion-col>\n\n              <ion-col col-10 no-padding>\n                <ion-row>\n                  <div> <strong class="card-title-text">Aspire Systems India Pvt Ltd</strong> <span\n                      class="card-title-text-type-1">Contract</span> <strong Strong-text-one\n                      class="card-alert-text-bold-large"> Expires</strong><span class="card-title-text-type-1"> in</span> <b\n                      class="card-title-text">3 days.</b></div>\n                </ion-row>\n                <ion-row mt-10>\n                  <div class="notification-meta">\n                    <span>10.30 AM</span>\n\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col col-12 no-padding class="day">\n        <strong>Yesterday(2)</strong>\n      </ion-col>\n\n      <ion-col col-12 no-padding class="">\n        <ion-card margin-bottom no-margin w-100 mt-10 class="notification-card">\n          <ion-card-content class="notification-card-content">\n            <ion-row>\n              <ion-col col-2 no-padding class="notification-left-icon">\n                <span class="icon-comment"></span>\n              </ion-col>\n\n              <ion-col col-10 no-padding>\n                <ion-row>\n                  <div><strong class="card-title-text">Sridhar Mahlingam </strong><span\n                      class="card-title-text-type-1">assigned to </span><strong class="card-title-text">4D Web\n                      Development.</strong></div>\n                </ion-row>\n                <ion-row mt-10>\n                  <div class="notification-meta">\n                    <span>10.30 AM</span>\n                    <span class="separator">|</span>\n                    <span>From - <strong Strong-text-one>Aspire Systems India Pvt Ltd</strong></span>\n\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card margin-bottom no-margin w-100 class="notification-card">\n          <ion-card-content class="notification-card-content">\n            <ion-row>\n              <ion-col col-2 no-padding class="notification-left-icon">\n                <span class="icon-delivered"></span>\n              </ion-col>\n\n              <ion-col col-10 no-padding>\n                <ion-row>\n                  <div><strong class="card-title-text">Colin Ochel</strong> <span\n                      class="card-title-text-type-1">Contract</span><strong Strong-text-one class="card-alert-text-bold-large">\n                      Expires</strong><span class="card-title-text-type-1"> in </span><b class="card-title-text-type-1">3\n                      days.</b></div>\n                </ion-row>\n                <ion-row mt-10 class="notification-meta">\n                  <div>\n                    <span>12.30 AM</span>\n                    <span class="separator">|</span>\n                    <span>From - <strong Strong-text-one>Aspire Systems India Pvt Ltd</strong></span>\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/notification-module/notification-list/notification-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], NotificationListPage);
    return NotificationListPage;
}());

//# sourceMappingURL=notification-list.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationSearchPage = /** @class */ (function () {
    function NotificationSearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationSearchPage.prototype.ionViewDidLoad = function () {
    };
    NotificationSearchPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    NotificationSearchPage.prototype.searchedData = function (searchTxt) {
    };
    NotificationSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification-search',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/notification-module/notification-search/notification-search.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 header-left-icons>\n          <ion-buttons>\n            <button ion-button icon-only (click)="pop()">\n              <span class="font-1point5rem txt-transform-none"> Back </span>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 header-title>\n          <ion-title>Search</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 header-right-icons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid no-padding>\n    <ion-row margin-bottom no-padding align-items-center>\n      <ion-col no-padding>\n        <ion-searchbar class="customSearchBar" placeholder="Search Notification" (ionClear)="searchedData($event)"\n          (ionInput)="searchedData($event)"></ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/notification-module/notification-search/notification-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], NotificationSearchPage);
    return NotificationSearchPage;
}());

//# sourceMappingURL=notification-search.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_touch_id_touch_id__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, touchIdProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.touchIdProvider = touchIdProvider;
        this.frmSetting = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            pushNotification: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: true, disabled: true }),
            touchID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: false, disabled: false }),
            vibrate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: false, disabled: true }),
            locationTracking: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: false, disabled: true }),
            emailNotification: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: false, disabled: true })
        });
    }
    SettingsPage.prototype.onchangeTouch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.frmSetting.controls.touchID.value) {
                            return [2 /*return*/, this.storage.set(this.storage.data.isTouchid, false)];
                        }
                        return [4 /*yield*/, this.touchIdProvider.isTouchAvailable()];
                    case 1:
                        if (!(_a.sent())) {
                            this.frmSetting.controls.touchID.setValue(false);
                            this.storage.set(this.storage.data.isTouchid, false);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.touchIdProvider.verifyFingerPrint()];
                    case 2:
                        if (_a.sent()) {
                            this.storage.set(this.storage.data.isTouchid, this.frmSetting.controls.touchID.value);
                        }
                        else {
                            this.frmSetting.controls.touchID.setValue(false);
                            this.storage.set(this.storage.data.isTouchid, false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/settings/settings.html"*/'<ion-header color="light" class="custom-ion-header">\n\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Settings</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contentbg" padding>\n  <form [formGroup]="frmSetting">\n    <ion-grid no-padding>\n      <ion-row align-items-start margin-bottom padding page-list-box>\n        <ion-col col-12>\n          <ion-item font14 no-border-bottom no-padding no-inner-padding-right>\n            <ion-label no-margin font-weight-bold>Push Notification</ion-label>\n            <ion-toggle customtoggleblue formControlName="pushNotification"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start margin-bottom padding page-list-box>\n        <ion-col col-12>\n          <ion-item font14 no-border-bottom no-padding no-inner-padding-right>\n            <ion-label no-margin font-weight-bold>Touch ID</ion-label>\n            <ion-toggle customtoggleblue formControlName="touchID" (ionChange)="onchangeTouch();"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start margin-bottom padding page-list-box>\n        <ion-col col-12>\n          <ion-item font14 no-border-bottom no-padding no-inner-padding-right>\n            <ion-label no-margin font-weight-bold>Sound</ion-label>\n            <ion-toggle customtoggleblue formControlName="vibrate"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start margin-bottom padding page-list-box>\n        <ion-col col-12>\n          <ion-item font14 no-border-bottom no-padding no-inner-padding-right>\n            <ion-label no-margin font-weight-bold>Vibrate</ion-label>\n            <ion-toggle customtoggleblue formControlName="locationTracking"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-start padding page-list-box>\n        <ion-col col-12>\n          <ion-item font14 no-border-bottom no-padding no-inner-padding-right>\n            <ion-label no-margin font-weight-bold>Email Notification</ion-label>\n            <ion-toggle customtoggleblue formControlName="emailNotification"></ion-toggle>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_touch_id_touch_id__["a" /* TouchIdProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_detail_help_detail__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, emailComposer) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.mailLink = "mailto:contact@iff.com";
        this.questions = [
            {
                'title': 'How to search?',
                'key': 'search',
                'steps': [
                    "Enter keywords on <span class=\"blackBold\">Search input box</span> from home page or result page",
                    "Click on <span class=\"blackBold\">Search </span> icon",
                    "Results will be shown",
                ]
            },
            {
                'title': 'How to filter results?',
                'key': 'filterResults',
                'steps': [
                    "Click on <span class=\"blackBold\">Filter icon</span> from right top corner",
                    "Apply filters and click on <span class=\"blackBold\">Tick mark icon </span> from right top corner",
                    "Results will be filtered"
                ]
            },
            {
                'title': 'How to logout?',
                'key': 'logout',
                'steps': [
                    "Click on <span class=\"blackBold\">Menu Icon</span> from left top corner",
                    "Click on <span class=\"blackBold\">Logout </span> option"
                ]
            }
        ];
        this.viewQuestions = [];
        this.viewQuestions = this.questions;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
    };
    HelpPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    HelpPage.prototype.openHelpDetailedPage = function (key, steps) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__help_detail_help_detail__["a" /* HelpDetailPage */], {
            'content': {
                title: key,
                steps: steps
            }
        });
    };
    HelpPage.prototype.filterQuestions = function (searchTerm) {
        var _this = this;
        this.viewQuestions = [];
        this.questions.map(function (question) {
            if (question.title.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
                _this.viewQuestions.push(question);
            }
        });
    };
    HelpPage.prototype.sendEmail = function () {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var email = {
                    to: 'help@iff.com',
                    cc: 'admin@iff.com',
                    bcc: ['admin2@iff.com'],
                    attachments: [],
                    subject: 'Demo Subject',
                    body: 'This is demo for email composer.',
                    isHtml: true
                };
                // Send a text message using default options
                _this.emailComposer.open(email);
            }
        });
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/help/help.html"*/'<ion-header class="custom-ion-header">\n    <ion-navbar hideBackButton="true" color="primary">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col no-padding col-2 text-left>\n            <ion-buttons pl-1>\n              <button ion-button icon-only menuToggle>\n                <ion-icon name=\'menu\'></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col no-padding col-8 text-center>\n            <ion-title>Help</ion-title>\n          </ion-col>\n          <ion-col no-padding col-2 text-right>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content class="contentbg" padding>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col col-12>\n          <h1 class="heading-help" no-margin font-weight-bold>Trending Questions?</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-bottom>\n        <ion-col col-12>\n          <ion-item ion-textfield no-padding no-bg> -->\n            <ion-label lightgrey floating><span class="custom-icon-Search-Icon"></span> Search your questions</ion-label>\n            <ion-input #searchQuestion (keyup)="filterQuestions(searchQuestion.value)" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-bottom>\n        <ion-col col-12  *ngFor="let question of viewQuestions">\n          <ion-item (click)="openHelpDetailedPage(question.key, question.steps)" class="customIonItem">\n            <ion-label>\n              <p>{{question.title}}</p>\n            </ion-label>\n            <ion-note item-end>\n              <span class="icon-right-arrow"></span>\n            </ion-note>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row mb-5>\n        <ion-col col-12>\n          <h1 class="heading-help" no-margin font-weight-bold>How can we help</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-bottom>\n        <ion-col col-12>\n          <ion-note lightgrey>\n            If you have any other issues, Please write to us and Helpdesk clarify your doubts as soon as possible\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row margin-top>\n          <ion-col col-4>\n            <a [href]="mailLink">\n            <button class="help-custom-button" ion-button >\n              <span class="icon-email"></span>\n              <ion-note>SEND EMAIL</ion-note>\n            </button>\n          </a>\n          </ion-col>\n          <ion-col>\n            <button no-margin no-padding class="help-custom-button" ion-button>\n              <span class="icon-chatbox"></span>\n              <ion-note>LET\'S CHAT</ion-note>\n            </button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpDetailPage = /** @class */ (function () {
    function HelpDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mailLink = "mailto:contact@iff.com";
        this.content = navParams.get('content');
    }
    HelpDetailPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    HelpDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help-detail',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/help-detail/help-detail.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>{{content?.title}}</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentbg" padding>\n  <ion-grid no-padding>\n    <ion-row margin-bottom>\n      <ion-col col-12 class="stepsWizard">\n        <ion-item lightgrey *ngFor="let step of content.steps; let count = index">\n          <ion-note item-start>\n            <span class="countCircle">\n              {{count + 1}}\n            </span>\n          </ion-note>\n          <span [innerHTML]="step">\n          </span>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row mb-5>\n      <ion-col col-12>\n        <h1 class="heading-help" no-margin font-weight-bold>How can we help</h1>\n      </ion-col>\n    </ion-row>\n\n\n\n\n    <ion-row margin-bottom>\n      <ion-col col-12>\n        <ion-note lightgrey>\n          If you have any other issues, Please write to us and Helpdesk clarify your doubts as soon as possible\n        </ion-note>\n      </ion-col>\n    </ion-row>\n    <ion-row margin-top>\n      <ion-col col-4>\n        <a [href]="mailLink">\n          <button class="help-custom-button" ion-button>\n            <span class="icon-email"></span>\n            <ion-note>SEND EMAIL</ion-note>\n          </button>\n        </a>\n      </ion-col>\n      <ion-col>\n        <button no-margin no-padding class="help-custom-button" ion-button>\n          <span class="icon-chatbox"></span>\n          <ion-note>LET\'S CHAT</ion-note>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/help-detail/help-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HelpDetailPage);
    return HelpDetailPage;
}());

//# sourceMappingURL=help-detail.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* Settings */].AppName;
        this.version = __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* Settings */].AppVersion;
    }
    AboutPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/about/about.html"*/'<ion-header class="custom-ion-header">\n    <ion-navbar hideBackButton="true" color="primary">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col no-padding col-2 text-left>\n            <ion-buttons pl-1>\n              <button ion-button icon-only menuToggle>\n                <ion-icon name=\'menu\'></ion-icon>\n              </button>\n            </ion-buttons>\n          </ion-col>\n          <ion-col no-padding col-8 text-center>\n            <ion-title>About</ion-title>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="contentbg">\n\n  <div text-center id="about">\n    <span class="icon-iff"></span>\n    <div id="name">\n      {{name}}\n    </div>\n    <div id="version">\n        Version {{version}}\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/menu-module/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_touch_id_touch_id__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_module_sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LockScreenPage = /** @class */ (function () {
    function LockScreenPage(navCtrl, storage, navParams, touchIdProvider) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.touchIdProvider = touchIdProvider;
        this.verifyTouch();
    }
    LockScreenPage.prototype.verifyTouch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.touchIdProvider.isTouchAvailable()];
                    case 1:
                        if (!(_a.sent())) {
                            this.redirectToLogin();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.touchIdProvider.verifyFingerPrint()];
                    case 2:
                        if (_a.sent()) {
                            this.redirectToHome();
                        }
                        else {
                            this.redirectToLogin();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LockScreenPage.prototype.redirectToLogin = function () {
        this.storage.removeAll();
        localStorage.clear();
        sessionStorage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], { touchIDFailed: true });
    };
    LockScreenPage.prototype.redirectToHome = function () {
        if (this.navParams.data.url && this.navParams.data.param) {
            var pn = this.navParams.data;
            this.navCtrl.setRoot(pn.url, pn.param);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_module_sub_tab_sub_tab__["a" /* SubTabPage */]);
        }
    };
    LockScreenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lock-screen',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/lock-screen/lock-screen.html"*/'<ion-content class="login-background"></ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/lock-screen/lock-screen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_touch_id_touch_id__["a" /* TouchIdProvider */]])
    ], LockScreenPage);
    return LockScreenPage;
}());

//# sourceMappingURL=lock-screen.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker_modal_picker_modal__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_events__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__infinite_scroller_infinite_scroller__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_chart__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accordion_accordion__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__share_share__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__speech_recognition_speech_recognition__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DemoPage = /** @class */ (function () {
    function DemoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.setLists();
    }
    DemoPage.prototype.setLists = function () {
        this.lists = [
            {
                title: 'Picker Modal',
                page: __WEBPACK_IMPORTED_MODULE_2__picker_modal_picker_modal__["a" /* PickerModalPage */],
            },
            {
                title: 'Events',
                page: __WEBPACK_IMPORTED_MODULE_3__events_events__["a" /* EventsPage */],
            },
            {
                title: 'Infinite Scroller',
                page: __WEBPACK_IMPORTED_MODULE_4__infinite_scroller_infinite_scroller__["a" /* InfiniteScrollerPage */],
            },
            {
                title: 'Charts',
                page: __WEBPACK_IMPORTED_MODULE_5__chart_chart__["a" /* ChartPage */],
            },
            {
                title: 'Accordion',
                page: __WEBPACK_IMPORTED_MODULE_6__accordion_accordion__["a" /* AccordionPage */],
            },
            {
                title: 'Share Message',
                page: __WEBPACK_IMPORTED_MODULE_7__share_share__["a" /* SharePage */],
            },
            {
                title: 'Speech Recognition',
                page: __WEBPACK_IMPORTED_MODULE_8__speech_recognition_speech_recognition__["a" /* SpeechRecognitionPage */],
            },
        ];
    };
    DemoPage.prototype.openPage = function (data) {
        this.navCtrl.push(data.page, { data: data });
    };
    DemoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-demo',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/demo/demo.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button ion-button icon-only menuToggle>\n              <ion-icon name=\'menu\'></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Demos</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item *ngFor="let list of lists" (click)="openPage(list)">\n    <ion-label>\n      {{list.title}}\n    </ion-label>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/demo/demo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], DemoPage);
    return DemoPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickerModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickerModalPage = /** @class */ (function () {
    function PickerModalPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.maxSelect = 4; // -1 removes restrictions
        this.extras = {
            title: 'People',
            maxSelect: 4,
            key: 'people'
        };
        this.setData();
    }
    PickerModalPage.prototype.setData = function () {
        this.list = [
            {
                id: 1,
                name: 'Thamarai',
                checked: false
            },
            {
                id: 2,
                name: 'Siva',
                checked: false
            },
            {
                id: 3,
                name: 'Sathish',
                checked: false
            },
            {
                id: 4,
                name: 'Sangeetha',
                checked: false
            },
            {
                id: 5,
                name: 'Ashok',
                checked: false
            },
            {
                id: 6,
                name: 'Kutti mani',
                checked: false
            }
        ];
        this.selectedItems = [{
                id: 1,
                name: 'Thamarai',
                checked: true
            }];
    };
    PickerModalPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    PickerModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-picker-modal',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/picker-modal/picker-modal.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Picker Modal</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="contentbg">\n<picker [list]="list" [selectedList]="selectedItems" [extras]="extras"></picker>\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/picker-modal/picker-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], PickerModalPage);
    return PickerModalPage;
}());

//# sourceMappingURL=picker-modal.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.lists = [
            {
                title: "item 1",
            }, {
                title: "item 2",
            }, {
                title: "item 3",
            }, {
                title: "item 4",
            },
        ];
    }
    EventsPage.prototype.pressEvent = function (item) {
        var toast = this.toastController.create({
            message: "Pressed: " + item.title,
            duration: 1000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    EventsPage.prototype.tapEvent = function (item) {
        var toast = this.toastController.create({
            message: "Tapped: " + item.title,
            duration: 1000,
            position: 'bottom'
        });
        toast.present(toast);
    };
    EventsPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/events/events.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-10 text-center>\n          <ion-title>Events</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-item (press)="pressEvent(list)" (tap)="tapEvent(list)" *ngFor="let list of lists">\n    <ion-label>\n      {{list.title}}\n    </ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfiniteScrollerPage = /** @class */ (function () {
    function InfiniteScrollerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.count = 0;
        this.addLists(20);
    }
    InfiniteScrollerPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.count >= 100) {
            infiniteScroll.enable(false);
            return;
        }
        setTimeout(function () {
            _this.addLists(10);
            infiniteScroll.complete();
        }, 1000);
    };
    InfiniteScrollerPage.prototype.addLists = function (add) {
        if (add === void 0) { add = 0; }
        var tmpCount = this.count;
        for (tmpCount = this.count; tmpCount < this.count + add; tmpCount++) {
            this.lists.push({
                title: 'Item ' + tmpCount
            });
        }
        this.count = tmpCount;
    };
    InfiniteScrollerPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    InfiniteScrollerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infinite-scroller',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/infinite-scroller/infinite-scroller.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-10 text-center>\n          <ion-title>Infinite Scroller</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor="let list of lists">\n    <ion-label>\n      {{list.title}}\n    </ion-label>\n  </ion-item>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" threshold="100px">\n    <ion-infinite-scroll-content class="custom-spinner" loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/infinite-scroller/infinite-scroller.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], InfiniteScrollerPage);
    return InfiniteScrollerPage;
}());

//# sourceMappingURL=infinite-scroller.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl) {
        this.navCtrl = navCtrl;
        /*
          Refer: https://valor-software.com/ng2-charts/
        */
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
    }
    ChartPage.prototype.chartClicked = function (e) {
    };
    ChartPage.prototype.chartHovered = function (e) {
    };
    ChartPage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    ChartPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chart',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/chart/chart.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Charts</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="contentbg">\n\n  <div>\n    <h3>Bar Chart</h3>\n    <div style="display: block">\n      <canvas baseChart [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [legend]="barChartLegend"\n        [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n    </div>\n    <button (click)="randomize()">Update</button>\n  </div>\n\n  <div style="display: block">\n    <h3>Doughnut Chart</h3>\n    <canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType"\n      (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n  </div>\n\n\n  <div style="display: block">\n    <h3>Pie Chart</h3>\n    <canvas baseChart [data]="pieChartData" [labels]="pieChartLabels" [chartType]="pieChartType" (chartHover)="chartHovered($event)"\n      (chartClick)="chartClicked($event)"></canvas>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionPage = /** @class */ (function () {
    function AccordionPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.projectTab = "currentProjects";
        this.currentProjects = [
            {
                id: "8012424",
                customerName: "Nature's Kitchen",
                accordionStatus: true,
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }, {
                id: "2332322",
                accordionStatus: false,
                customerName: "Nature's Kitchen",
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }, {
                id: "9012444",
                customerName: "Nature's Kitchen",
                accordionStatus: false,
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Ready for Shipment',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }
        ];
        this.completedProjects = [
            {
                id: "8012424",
                customerName: "Nature's Kitchen",
                accordionStatus: false,
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }, {
                id: "2332322",
                accordionStatus: false,
                customerName: "Nature's Kitchen",
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }, {
                id: "9012444",
                customerName: "Nature's Kitchen",
                accordionStatus: false,
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                ],
            }, {
                id: "5012987",
                customerName: "Nature's Kitchen",
                accordionStatus: false,
                orders: [
                    {
                        id: '5232791',
                        date: '1-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '878232',
                        date: '3-Jan-2019',
                        currentStatus: 'Shipped',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '982328',
                        date: '5-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    },
                    {
                        id: '292328',
                        date: '7-Jan-2019',
                        currentStatus: 'Delivered',
                        status: [
                            {
                                name: 'Review',
                                date: '01 Dec',
                                status: 'COMPLETED'
                            },
                            {
                                name: 'Make',
                                date: '3 Dec',
                                status: 'IN_PROGRESS'
                            },
                            {
                                name: 'Ship',
                                date: '15 Dec',
                                status: 'NOT_INITIATED'
                            },
                            {
                                name: 'Delivery',
                                date: '20 Dec',
                                status: 'NOT_INITIATED'
                            },
                        ],
                        meta: {
                            date: {
                                day: '03',
                                month: 'Dec'
                            },
                            comment: 'Sample send to manufacturing unit',
                            location: 'Hazlet',
                            time: '4:30PM',
                        },
                    }
                ],
            }
        ];
    }
    AccordionPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    AccordionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accordion',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/accordion/accordion.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Accordion</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="contentbg" padding>\n  <ion-row margin-bottom>\n    <ion-col col-12 no-padding>\n      <ion-segment class="customSegment w-100" [(ngModel)]="projectTab">\n        <ion-segment-button class="custom-segment-button" value="currentProjects">\n          <strong> Open ({{currentProjects.length}}) </strong>\n        </ion-segment-button>\n        <ion-segment-button class="custom-segment-button" value="completedProjects">\n          <strong>Completed ({{completedProjects.length}}) </strong>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 no-padding>\n\n      <div [ngSwitch]="projectTab">\n        <ion-list class="custom-item-sliding-list" *ngSwitchCase="\'currentProjects\'">\n          <ng-container *ngFor="let project of currentProjects">\n\n            <accordion [accordionExpanded]=project.accordionStatus>\n              <accordion-header>\n                <div style="color:#1f1e1e">\n                  Project #: <span class="bold-title">{{project.id}}</span>\n                  <br>\n                  Customer: <span class="bold-title">{{project.customerName}}</span>\n                </div>\n              </accordion-header>\n              <accordion-body>\n                <hr style="margin-bottom:0.5px">\n                <ion-list>\n                  <ng-container *ngFor="let order of project.orders">\n                    <ion-item>\n                      <div class="order-item">\n                        Order: <span class="bold-title">{{order.id}}</span>\n                      </div>\n                      <div class="order-status">\n                        <span> {{order.date}} </span> |\n                        <span> {{order.currentStatus}} </span>\n                      </div>\n                    </ion-item>\n                    <hr>\n                  </ng-container>\n                </ion-list>\n\n              </accordion-body>\n            </accordion>\n          </ng-container>\n\n        </ion-list>\n\n        <ion-list class="custom-item-sliding-list" *ngSwitchCase="\'completedProjects\'">\n          <ng-container *ngFor="let project of completedProjects">\n\n            <accordion [accordionExpanded]=project.accordionStatus>\n              <accordion-header>\n                <div style="color:#1f1e1e">\n                  Project #: <span class="bold-title">{{project.id}}</span>\n                  <br>\n                  Customer: <span class="bold-title">{{project.customerName}}</span>\n                </div>\n              </accordion-header>\n              <accordion-body>\n                <hr style="margin-bottom:0.5px">\n                <ion-list>\n                  <ng-container *ngFor="let order of project.orders">\n                    <ion-item>\n                      <div class="order-item">\n                        Order: <span class="bold-title">{{order.id}}</span>\n                      </div>\n                      <div class="order-status">\n                        <span> {{order.date}} </span> |\n                        <span> {{order.currentStatus}} </span>\n                      </div>\n                    </ion-item>\n                    <hr>\n                  </ng-container>\n                </ion-list>\n\n              </accordion-body>\n            </accordion>\n          </ng-container>\n\n        </ion-list>\n\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/accordion/accordion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], AccordionPage);
    return AccordionPage;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharePage = /** @class */ (function () {
    function SharePage(navCtrl, navParams, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.note = "Share this secret xxx";
    }
    SharePage.prototype.share = function () {
        this.socialSharing.share(this.note, null, null, null);
    };
    SharePage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-share',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/share/share.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Share</ion-title>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="contentbg" >\n<ion-item>\n  <ion-textarea placeholder="Tap here" [(ngModel)]="note" name="note" autocomplete="off" autocorrect="off">\n  </ion-textarea>\n</ion-item>\n\n<div class="wrapper">\n  <button (click)="share()" ion-button color="primary">Share Note</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/share/share.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_speech_recognition_speech_recognition__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeechRecognitionPage = /** @class */ (function () {
    function SpeechRecognitionPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.responseText = '';
    }
    SpeechRecognitionPage.prototype.testSpeechRecognition = function () {
        var _this = this;
        var VoiceSearchModel = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_speech_recognition_speech_recognition__["a" /* SpeechRecognitionComponent */], {});
        VoiceSearchModel.onDidDismiss(function (selectedItems) {
            if (selectedItems === 'cancel') {
                return;
            }
            _this.responseText = selectedItems[0]; //get first response
        });
        VoiceSearchModel.present();
    };
    SpeechRecognitionPage.prototype.pop = function () {
        this.navCtrl.pop();
    };
    SpeechRecognitionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-speech-recognition',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/speech-recognition/speech-recognition.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="pop()" class="subpage-header-icon" ion-button icon-only>\n              Back\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Speech Recognition</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="contentbg">\n  <button (click)="testSpeechRecognition()" ion-button color="primary"> Test Speech Recognition </button>\n\n\n  <br>\n  <br>\n  <div *ngIf="responseText">Response: <br>{{responseText}}</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/speech-recognition/speech-recognition.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], SpeechRecognitionPage);
    return SpeechRecognitionPage;
}());

//# sourceMappingURL=speech-recognition.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_open_native_settings__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SpeechRecognitionComponent = /** @class */ (function () {
    function SpeechRecognitionComponent(speechRecognition, viewCtrl, changeDetectorRef, alertCtrl, openNativeSettings) {
        this.speechRecognition = speechRecognition;
        this.viewCtrl = viewCtrl;
        this.changeDetectorRef = changeDetectorRef;
        this.alertCtrl = alertCtrl;
        this.openNativeSettings = openNativeSettings;
        this.isRecording = false;
        this.defaultText = "Speak now";
        this.idle = false;
    }
    SpeechRecognitionComponent.prototype.ionViewDidLoad = function () {
        this.startListening();
    };
    SpeechRecognitionComponent.prototype.startListening = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.checkPermission()];
                    case 1:
                        if (!!(_b.sent())) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.requestPermission()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a = this;
                        return [4 /*yield*/, this.start()];
                    case 4:
                        _a.voiceSearchKey = _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        this.openAppSetting(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SpeechRecognitionComponent.prototype.openAppSetting = function (msg) {
        var _this = this;
        var pMsg = msg == "User denied access to microphone" ? "microphone" : "speech recognition";
        var prompt = this.alertCtrl.create({
            title: 'Enable Permission',
            message: "To search with your voice, tab on settings to let Colors use your " + pMsg,
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Settings',
                    handler: function (data) {
                        _this.openNativeSettings.open("application_details").then(function (data) {
                        }, function (error) { console.log('failed to open settings', error); });
                    }
                }
            ]
        });
        prompt.present();
    };
    SpeechRecognitionComponent.prototype.checkPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speechRecognition.hasPermission()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpeechRecognitionComponent.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.speechRecognition.requestPermission()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SpeechRecognitionComponent.prototype.start = function () {
        var _this = this;
        this.checkVoice();
        this.isRecording = true;
        var option = {
            language: "en-US",
            matches: 1,
            showPartial: true
        };
        this.speechRecognition.startListening(option)
            .subscribe(function (matches) {
            _this.voiceSearchKey = matches;
            try {
                if (!_this.changeDetectorRef['destroyed']) {
                    _this.changeDetectorRef.detectChanges();
                }
                _this.idle = false;
            }
            catch (error) { }
        });
    };
    SpeechRecognitionComponent.prototype.checkVoice = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.idle === false) {
                return _this.idle = true;
            }
            if (_this.voiceSearchKey && _this.voiceSearchKey.length > 0) {
                clearInterval(_this.interval);
                _this.dismiss('search');
            }
        }, 1500);
    };
    SpeechRecognitionComponent.prototype.stop = function (cancelled) {
        if (cancelled === void 0) { cancelled = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isRecording = false;
                        return [4 /*yield*/, this.speechRecognition.stopListening()];
                    case 1:
                        _a.sent();
                        if (cancelled) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeechRecognitionComponent.prototype.dismiss = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (option === "cancel") {
                            this.voiceSearchKey = "";
                            this.stop(true);
                            this.viewCtrl.dismiss('cancel');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.stop()];
                    case 1:
                        _a.sent();
                        this.viewCtrl.dismiss(this.voiceSearchKey);
                        return [2 /*return*/];
                }
            });
        });
    };
    SpeechRecognitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'speech-recognition',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/components/speech-recognition/speech-recognition.html"*/'<ion-content>\n  <ion-grid class="filter-model-grid">\n\n    <ion-row class="circle-ripple-wrapper" *ngIf="isRecording">\n      <ion-col col-12>\n        <div class="circle-ripple">\n          <ion-icon name="mic"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class="filter-model-info" text-center>\n      <ion-col col-12>\n        <div *ngIf="!voiceSearchKey && isRecording">\n          {{defaultText}}\n        </div>\n        <div scroll-area *ngIf="voiceSearchKey">\n          {{voiceSearchKey}}\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row class="footer-bar">\n      <ion-col col-6>\n        <button cancel-text ion-button clear (click)="dismiss(\'cancel\')">\n          Cancel\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/components/speech-recognition/speech-recognition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]])
    ], SpeechRecognitionComponent);
    return SpeechRecognitionComponent;
}());

//# sourceMappingURL=speech-recognition.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_accordion__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__picker_picker__ = __webpack_require__(910);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_recognition_speech_recognition__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_3__picker_picker__["a" /* PickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__speech_recognition_speech_recognition__["a" /* SpeechRecognitionComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_3__picker_picker__["a" /* PickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__speech_recognition_speech_recognition__["a" /* SpeechRecognitionComponent */],
            ],
            schemas: [],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__picker_picker__["a" /* PickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__speech_recognition_speech_recognition__["a" /* SpeechRecognitionComponent */]
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalComponent = /** @class */ (function () {
    function ModalComponent(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listRearrange = [];
        this.lists = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"])(navParams.get('list'));
        this.selectedList = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"])(navParams.get('selected'));
        this.extras = navParams.get('extras');
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.setItems();
    };
    ModalComponent.prototype.setItems = function () {
        var _this = this;
        this.listRearrange = [];
        this.selectedList = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"])(this.selectedList, [function (item) { return item.name.toLowerCase(); }], ['asc']);
        this.selectedList.forEach(function (element) {
            _this.listRearrange.push(element);
        });
        var list = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["differenceBy"])(this.lists, this.selectedList, 'id');
        list = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"])(list, [function (item) { return item.name.toLowerCase(); }], ['asc']);
        list.forEach(function (element) {
            _this.listRearrange.push(element);
        });
    };
    ModalComponent.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.listRearrange = this.listRearrange.filter(function (item) {
                return item.name.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    ModalComponent.prototype.dismiss = function (option) {
        if (option == "save") {
            this.viewCtrl.dismiss(this.selectedList);
        }
        else {
            this.viewCtrl.dismiss('cancel');
        }
    };
    ModalComponent.prototype.selectItem = function (data) {
        if (data.checked == true) {
            this.selectedList.push(data);
        }
        else {
            var newArray = this.selectedList.filter(function (el) {
                return el.id !== data.id;
            });
            this.selectedList = newArray;
        }
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/components/modal/modal.html"*/'<ion-content>\n\n  <ion-grid class="filter-model-grid">\n    <ion-row class="filter-model-info">\n      <ion-col col-11>\n        <div [innerHTML]="extras?.title">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-card class="search-tag-card">\n      <ion-searchbar placeholder="Search Flavors" (ionInput)="filterItems($event)"></ion-searchbar>\n    </ion-card>\n\n\n    <ion-card class="items-list-card">\n      <ion-list>\n\n        <div *ngIf="extras?.key === -1">\n          <ion-item class="item-checkbox-right" *ngFor="let item of listRearrange">\n            <ion-label>{{item?.name || \'N/A\'}}</ion-label>\n            <ion-checkbox (click)="selectItem(item)" [(ngModel)]="item.checked"></ion-checkbox>\n          </ion-item>\n        </div>\n\n        <div *ngIf="extras?.maxSelect != -1 && selectedList.length < extras?.maxSelect">\n          <ion-item class="item-checkbox-right" *ngFor="let item of listRearrange">\n            <ion-label>{{item?.name || \'N/A\'}}</ion-label>\n            <ion-checkbox disabled="false" (click)="selectItem(item)" [(ngModel)]="item.checked"></ion-checkbox>\n          </ion-item>\n        </div>\n\n        <div *ngIf="extras?.maxSelect != -1 && selectedList.length >= extras?.maxSelect">\n          <ion-item class="item-checkbox-right" *ngFor="let item of listRearrange">\n            <ion-label>{{item?.name || \'N/A\'}}</ion-label>\n            <ion-checkbox disabled="{{!item.checked}}" (click)="selectItem(item)" [(ngModel)]="item.checked"></ion-checkbox>\n          </ion-item>\n        </div>\n\n\n      </ion-list>\n    </ion-card>\n    <ion-row class="footer-bar">\n      <ion-col col-6 class="filter-model-cancel">\n        <button ion-button clear (click)="dismiss(\'cancel\')">Cancel</button>\n      </ion-col>\n      <ion-col col-6 class="filter-model-Done">\n        <button ion-button clear (click)="dismiss(\'save\')">Done</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/components/modal/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], ModalComponent);
    return ModalComponent;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_login_service__ = __webpack_require__(401);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPage = /** @class */ (function () {
    function ResetPage(navCtrl, navParams, login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.login = login;
        this.reset = {};
    }
    ResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPage');
    };
    ResetPage.prototype.reset_pass = function () {
        // this.login.reset_password()
    };
    ResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/reset/reset.html"*/'<!--\n  Generated template for the ResetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>reset</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-background">\n    <ion-card no-margin login-card class="fullWidth">\n      <!-- <img src="../../assets/imgs/loginbg.png" /> -->\n      <div class="card-title">\n          <span class="icon-iff"></span>\n        <!-- Welcome! -->\n        <div class="card-subtitle">Reset Password</div>\n      </div>\n    </ion-card>\n    <form #loginForm="ngForm" (ngSubmit)="reset_pass()" autocomplete="off">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-10 mx-auto text-center>\n              <ion-item logintextfield>\n                  <ion-label color="primary" floating>OTP</ion-label>\n                  <ion-input name="otp" id="" type="number"  required [(ngModel)]="reset.otp" name="otp" ></ion-input>\n                </ion-item>\n            <ion-item logintextfield>\n              <ion-label color="primary" floating>Enter New Password</ion-label>\n              <ion-input name="password" id="" type="password"  required [(ngModel)]="reset.password" name="password" ></ion-input>\n            </ion-item>\n            <ion-item logintextfield>\n              <ion-label color="primary" floating>Enter New Password</ion-label>\n              <ion-input name="re_password" id="pass" type="password" required [(ngModel)]="reset.re_password" name="re_password" ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10 mx-auto text-center *ngIf="isTokenRequired">\n            <ion-item logintextfield>\n              <ion-label color="primary" floating>Common Password</ion-label>\n              <ion-input name="password" id="passwordField" type="{{type}}" required [(ngModel)]="password"></ion-input>\n              <button eyeIcon *ngIf="!showPass" ion-button clear type="button" item-right (click)="showPassword()">\n                <span class="icon-eye"></span>\n              </button>\n              <button eyeIcon *ngIf="showPass" ion-button clear type="button" item-right (click)="showPassword()">\n                <span class="icon-hide-eye"></span>\n              </button>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n  \n        <ion-row>\n          <ion-col col-10 mx-auto text-center>\n            <div *ngIf="error" red text-left>{{error}}</div>\n            <button loginbutton ion-button block type="submit" [disabled]="!loginForm.form.valid">Submit\n            </button>\n  \n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n    </form>\n    <!-- <button type="button" (click)="checktouchid()">touchID\n    </button> -->\n  </ion-content>\n  \n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/reset/reset.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service_login_service__["a" /* LoginService */]) === "function" && _c || Object])
    ], ResetPage);
    return ResetPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=reset.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(563);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_interface__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dev_config__ = __webpack_require__(905);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prod_config__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__local_config__ = __webpack_require__(907);




var Settings = /** @class */ (function () {
    function Settings() {
    }
    Settings.config = function () {
        switch (Settings.Env) {
            case __WEBPACK_IMPORTED_MODULE_0__config_interface__["a" /* AppEnvironment */].Dev:
                return new __WEBPACK_IMPORTED_MODULE_1__dev_config__["a" /* DevConfig */]();
            case __WEBPACK_IMPORTED_MODULE_0__config_interface__["a" /* AppEnvironment */].Prod:
                return new __WEBPACK_IMPORTED_MODULE_2__prod_config__["a" /* ProdConfig */]();
            case __WEBPACK_IMPORTED_MODULE_0__config_interface__["a" /* AppEnvironment */].Local:
                return new __WEBPACK_IMPORTED_MODULE_3__local_config__["a" /* LocalConfig */]();
        }
    };
    Settings.Env = __WEBPACK_IMPORTED_MODULE_0__config_interface__["a" /* AppEnvironment */].Dev;
    Settings.EnvValue = Settings.config();
    Settings.AppEnv = Settings.EnvValue.environment; // 'dev',  prd;
    Settings.AppName = 'MOBI SEED';
    Settings.AppVersion = '0.0.1';
    Settings.AppIdentifier = Settings.AppEnv + Settings.AppName + Settings.AppVersion;
    Settings.isOktaRequired = false;
    Settings.AppUrl = {
        basUrl: Settings.EnvValue.basUrl,
        sapurl: Settings.EnvValue.sapUrl,
        trendUrl: Settings.EnvValue.trendUrl
    };
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_deeplinks__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_native_http_connection_backend__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_oauth2_oidc__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_touch_id__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_charts_ng4_charts__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng4_charts_ng4_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng4_charts_ng4_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_secure_storage__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_speech_recognition__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_open_native_settings__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_network_network__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_notification_notification__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_request_request__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_spinner_spinner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_state_state__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_service_login_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_touch_id_touch_id__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_components_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_auth_module_auth_module__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_demo_module_demo_module__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_module_home_module__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_menu_module_menu_module__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_vendor_module_vendor_module__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_interceptor_interceptor__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_app_broadcast_app_broadcast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_employee_module_employee_module__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_project_module_project_module__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_notification_module_notification_module__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_mock_data_mock_data__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_29__pages_auth_module_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_30__pages_demo_module_demo_module__["a" /* DemoModule */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_module_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_36__pages_employee_module_employee_module__["a" /* EmployeeModule */],
                __WEBPACK_IMPORTED_MODULE_32__pages_menu_module_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_vendor_module_vendor_module__["a" /* VendorModule */],
                __WEBPACK_IMPORTED_MODULE_37__pages_project_module_project_module__["a" /* ProjectModule */],
                __WEBPACK_IMPORTED_MODULE_38__pages_notification_module_notification_module__["a" /* NotificationModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_28__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    scrollAssist: true,
                    autoFocusAssist: false,
                    inputBlurring: false,
                }, {
                    links: [
                        { loadChildren: '../pages/auth-module/reset/reset.module#ResetPageModule', name: 'ResetPage', segment: 'reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/auth-module/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '_mobiseed',
                    driverOrder: ['localstorage']
                }),
                __WEBPACK_IMPORTED_MODULE_6_ionic_native_http_connection_backend__["c" /* NativeHttpModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng4_charts_ng4_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular_oauth2_oidc__["OAuthModule"].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpBackend"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_native_http_connection_backend__["b" /* NativeHttpFallback */], deps: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6_ionic_native_http_connection_backend__["a" /* NativeHttpBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpXhrBackend"]] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HTTP_INTERCEPTORS"], useClass: __WEBPACK_IMPORTED_MODULE_34__providers_interceptor_interceptor__["a" /* InterceptorProvider */], multi: true },
                __WEBPACK_IMPORTED_MODULE_21__providers_request_request__["a" /* Request */],
                __WEBPACK_IMPORTED_MODULE_22__providers_settings_settings__["a" /* Settings */],
                __WEBPACK_IMPORTED_MODULE_24__providers_state_state__["a" /* State */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_touch_id__["a" /* TouchID */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_23__providers_spinner_spinner__["a" /* Spinner */],
                __WEBPACK_IMPORTED_MODULE_25__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_service_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_notification_notification__["a" /* NotificationProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_deeplinks__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_27__providers_touch_id_touch_id__["a" /* TouchIdProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_secure_storage__["a" /* SecureStorage */],
                __WEBPACK_IMPORTED_MODULE_35__providers_app_broadcast_app_broadcast__["a" /* AppBroadcast */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_open_native_settings__["a" /* OpenNativeSettings */],
                __WEBPACK_IMPORTED_MODULE_39__providers_mock_data_mock_data__["a" /* MockData */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Spinner = /** @class */ (function () {
    function Spinner(loading) {
        this.loading = loading;
    }
    Spinner.prototype.show = function () {
        var _this = this;
        if (!this.loader) {
            this.loader = this.loading.create({
                spinner: 'hide',
                content: "\n        <div class=\"loading-custom-spinner-container\">\n        <img src=\"../../assets/imgs/loader.gif\" />\n        </div>",
            });
            this.loader.present();
        }
        setTimeout(function () {
            if (_this.loader) {
                _this.loader.dismissAll();
                _this.loader = null;
            }
        }, 35000);
    };
    Spinner.prototype.showforce = function () {
        var _this = this;
        if (this.loader) {
            this.loader.dismissAll();
            this.loader = null;
        }
        this.loader = this.loading.create({
            spinner: 'hide',
            content: "\n      <div class=\"loading-custom-spinner-container\">\n      <img src=\"../../assets/imgs/loader.gif\" />\n      </div>\n     ",
        });
        this.loader.present();
        setTimeout(function () {
            if (_this.loader) {
                _this.loader.dismissAll();
                _this.loader = null;
            }
        }, 35000);
    };
    Spinner.prototype.hide = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.loader) {
                _this.loader.dismissAll();
                _this.loader = null;
            }
        }, 300);
    };
    Spinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], Spinner);
    return Spinner;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var State = /** @class */ (function () {
    function State() {
        this.data = {
            isLoggedIn: 'isLoggedIn',
            trends: 'trends',
            userInfo: 'userInfo',
            userid: 'userid',
            deeplinks: 'deeplinks'
        };
        this._state = {};
    }
    Object.defineProperty(State.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    State.prototype.get = function (prop) {
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : null;
    };
    State.prototype.remove = function (prop) {
        var state = this.state;
        if (state.hasOwnProperty(prop)) {
            delete state[prop];
        }
    };
    State.prototype.set = function (prop, value) {
        return this._state[prop] = value;
    };
    State.prototype.removeAll = function () {
        var _this = this;
        Object.keys(this._state).forEach(function (ele) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.remove(ele);
                return [2 /*return*/];
            });
        }); });
    };
    State.prototype._clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    State = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], State);
    return State;
}());

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_module_vendor_vendor__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_module_employees_list_employees_list__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_module_project_list_project_list__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_module_notification_list_notification_list__ = __webpack_require__(539);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubTabPage = /** @class */ (function () {
    function SubTabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subtab1Root = __WEBPACK_IMPORTED_MODULE_2__vendor_module_vendor_vendor__["a" /* VendorPage */];
        this.subtab2Root = __WEBPACK_IMPORTED_MODULE_3__employee_module_employees_list_employees_list__["a" /* EmployeesList */];
        this.subtab3Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.subtab4Root = __WEBPACK_IMPORTED_MODULE_5__project_module_project_list_project_list__["a" /* ProjectListPage */];
        this.subtab5Root = __WEBPACK_IMPORTED_MODULE_6__notification_module_notification_list_notification_list__["a" /* NotificationListPage */];
    }
    SubTabPage.prototype.ionViewDidLoad = function () {
    };
    SubTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sub-tab',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/home-module/sub-tab/sub-tab.html"*/'<ion-tabs class="customtabs" color="light" selectedIndex={{defaultSelectedPage}}>\n  <ion-tab [root]="subtab1Root" tabTitle="Vendor" tabIcon="icon-inspire"></ion-tab>\n  <ion-tab [root]="subtab2Root" tabTitle="Employees" tabIcon="icon-design"></ion-tab>\n  <ion-tab [root]="subtab3Root" tabTitle="Home" tabIcon="icon-home"><div></div></ion-tab>\n  <ion-tab [root]="subtab3Root" tabTitle="Home" tabIcon="icon-home"><div></div></ion-tab>\n  <ion-tab [root]="subtab4Root" tabTitle="Projects" tabIcon="icon-product-bank"></ion-tab>\n  <ion-tab [root]="subtab5Root" tabTitle="Notification" tabIcon="icon-notification"></ion-tab>\n</ion-tabs>˝\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/home-module/sub-tab/sub-tab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SubTabPage);
    return SubTabPage;
}());

//# sourceMappingURL=sub-tab.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBroadcast; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBroadcast = /** @class */ (function () {
    function AppBroadcast() {
        this.userData = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this._checkNetwork = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.checkNetwork = this._checkNetwork.asObservable();
    }
    AppBroadcast.prototype.doCheckNetwork = function (error) {
        this._checkNetwork.next(error);
    };
    AppBroadcast = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppBroadcast);
    return AppBroadcast;
}());

//# sourceMappingURL=app-broadcast.js.map

/***/ }),

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__okta_okta_auth_js__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__okta_okta_auth_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__okta_okta_auth_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_settings_endpoints__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_network_network__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_request_request__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_spinner_spinner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_state_state__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_module_settings_settings__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_module_help_help__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_menu_module_about_about__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_auth_module_lock_screen_lock_screen__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_app_broadcast_app_broadcast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_demo_module_demo_form__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_home_module_sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { Deeplinks } from '@ionic-native/deeplinks';


// import { DeeplinksPage } from '../pages/demo-module/deeplinks/deeplinks';
















var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oauthService, storage, notificationProvider, state, request, networkProvider, toastController, 
        // public deeplinks: Deeplinks,
        keyboard, spinner, appBroadcast) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oauthService = oauthService;
        this.storage = storage;
        this.notificationProvider = notificationProvider;
        this.state = state;
        this.request = request;
        this.networkProvider = networkProvider;
        this.toastController = toastController;
        this.keyboard = keyboard;
        this.spinner = spinner;
        this.appBroadcast = appBroadcast;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__["a" /* LoginPage */];
        this.user = {};
        this.deepLinkState = {};
        this.initSideMenu();
        this.keyboardFix();
        // this.setOauthCredentials();
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.initNetworkEvents();
            _this.validateUser();
        });
    };
    MyApp.prototype.initSideMenu = function () {
        var _this = this;
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_21__pages_home_module_sub_tab_sub_tab__["a" /* SubTabPage */], icon: 'icon-home' },
            { title: 'Demo', component: __WEBPACK_IMPORTED_MODULE_20__pages_demo_module_demo_form__["a" /* DemoPage */], icon: 'icon-design' },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_15__pages_menu_module_settings_settings__["a" /* SettingsPage */], icon: 'icon-settings' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_16__pages_menu_module_help_help__["a" /* HelpPage */], icon: 'icon-help' },
            { title: 'App Info', component: __WEBPACK_IMPORTED_MODULE_17__pages_menu_module_about_about__["a" /* AboutPage */], icon: 'icon-details' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__["a" /* LoginPage */], icon: 'icon-logout' },
        ];
        this.appBroadcast.userData.subscribe(function (userInfo) {
            if (!userInfo) {
                return;
            }
            _this.user = userInfo;
            _this.userPhotoUrl = _this.request.getImageUrl(__WEBPACK_IMPORTED_MODULE_6__providers_settings_endpoints__["a" /* Endpoints */].uri.user.photo, [_this.user.Id]);
        });
    };
    MyApp.prototype.setOauthCredentials = function () {
        this.oauthService.redirectUri = __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.oktaCredentials.redirectUri;
        this.oauthService.clientId = __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.oktaCredentials.clientId;
        this.oauthService.scope = __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.oktaCredentials.scope;
        this.oauthService.issuer = __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.oktaCredentials.issuer;
        this.oauthService.requireHttps = __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.oktaCredentials.requireHttps;
    };
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.initDeeplinks();
        });
    };
    MyApp.prototype.initDeeplinks = function () {
    };
    MyApp.prototype.setDeeplinkState = function (page, data) {
        if (data === void 0) { data = {}; }
        if (this.user) {
            this.deepLinkState = {
                page: page,
                data: data
            };
        }
        else {
            this.deepLinkState = {
                page: __WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__["a" /* LoginPage */],
                data: data
            };
        }
        this.state.set(this.state.data.deeplinks, this.deepLinkState);
        this.nav.setRoot(this.deepLinkState.page, this.deepLinkState.data);
    };
    MyApp.prototype.nagivateTo = function (page, hard) {
        if (hard === void 0) { hard = false; }
        if (this.deepLinkState && this.deepLinkState.page) {
            if (hard) {
                return this.nav.setRoot(page, {
                    url: this.deepLinkState.page,
                    param: this.deepLinkState.data
                });
            }
            return this.nav.setRoot(this.deepLinkState.page, this.deepLinkState.data);
        }
        return this.nav.setRoot(page);
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component.name === 'LoginPage') {
            this.clearStorage();
        }
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.clearStorage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.storage.removeAll();
                localStorage.clear();
                sessionStorage.clear();
                this.state.removeAll();
                return [2 /*return*/];
            });
        });
    };
    MyApp.prototype.initNetworkEvents = function () {
        this.networkProvider.initializeNetworkEvents();
        this.checkNetwork();
    };
    MyApp.prototype.validateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isLogin, _a, istouchid, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        this.spinner.show();
                        return [4 /*yield*/, this.login()];
                    case 1:
                        isLogin = _b.sent();
                        this.spinner.hide();
                        this.silentTokenRefresh();
                        if (!isLogin) {
                            throw new Error('Login data not found redirect to Login Page');
                        }
                        _a = this;
                        return [4 /*yield*/, this.storage.get(this.storage.data.userInfo)];
                    case 2:
                        _a.user = _b.sent();
                        return [4 /*yield*/, this.storage.get(this.storage.data.isTouchid)];
                    case 3:
                        istouchid = _b.sent();
                        if (__WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].isOktaRequired) {
                            if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
                                return [2 /*return*/];
                            }
                        }
                        if (this.user) {
                            this.initNotification();
                            this.setUserInfo();
                            this.getUserPhotoUri();
                            this.redirectByTouchID(istouchid);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        this.clearStorage();
                        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__["a" /* LoginPage */];
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.silentTokenRefresh = function () {
        var _this = this;
        setInterval(function () {
            _this.login(true);
        }, __WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].EnvValue.loginInterval);
    };
    MyApp.prototype.login = function (redirectOnFail) {
        if (redirectOnFail === void 0) { redirectOnFail = false; }
        return __awaiter(this, void 0, void 0, function () {
            var username, password, nonce, authClient, signInresponse, answer, verifyResponse, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 13, , 14]);
                        return [4 /*yield*/, this.storage.get(this.storage.data.username)];
                    case 1:
                        username = _a.sent();
                        return [4 /*yield*/, this.storage.get(this.storage.data.password)];
                    case 2:
                        password = _a.sent();
                        if (!__WEBPACK_IMPORTED_MODULE_11__providers_settings_settings__["a" /* Settings */].isOktaRequired) {
                            return [2 /*return*/, true];
                        }
                        if (!username || !password) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.oauthService.loadDiscoveryDocument()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.oauthService.tryLogin()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.oauthService.createAndSaveNonce()];
                    case 5:
                        nonce = _a.sent();
                        authClient = new __WEBPACK_IMPORTED_MODULE_5__okta_okta_auth_js__({
                            clientId: this.oauthService.clientId,
                            redirectUri: this.oauthService.redirectUri,
                            url: this.oauthService.issuer,
                            issuer: this.oauthService.issuer,
                            tokenManager: { storage: 'localStorage' }
                        });
                        return [4 /*yield*/, authClient.signIn({
                                username: username,
                                password: password
                            })];
                    case 6:
                        signInresponse = _a.sent();
                        if (!(signInresponse.status === 'SUCCESS')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.ValidateToken(authClient, nonce, signInresponse)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8:
                        if (!(signInresponse.status == "MFA_REQUIRED")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.storage.get(this.storage.data.MFAAnswer)];
                    case 9:
                        answer = _a.sent();
                        return [4 /*yield*/, signInresponse.verify({
                                answer: answer
                            })];
                    case 10:
                        verifyResponse = _a.sent();
                        return [4 /*yield*/, this.ValidateToken(authClient, nonce, verifyResponse)];
                    case 11: return [2 /*return*/, _a.sent()];
                    case 12: return [2 /*return*/, false];
                    case 13:
                        err_2 = _a.sent();
                        if (!redirectOnFail) {
                            return [2 /*return*/, false];
                        }
                        this.clearStorage();
                        this.toastController.create({
                            message: "Token Refreshing failed, Login in again",
                            duration: 5000,
                            position: 'bottom'
                        }).present();
                        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_module_login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 14];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    MyApp.prototype.ValidateToken = function (authClient, nonce, response) {
        return __awaiter(this, void 0, void 0, function () {
            var tokens, idToken, accessToken, keyValuePair;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, authClient.token.getWithoutPrompt({
                            nonce: nonce,
                            responseType: ['id_token', 'token'],
                            sessionToken: response.sessionToken,
                            scopes: this.oauthService.scope.split(' ')
                        })];
                    case 1:
                        tokens = _a.sent();
                        idToken = tokens[0].idToken;
                        accessToken = tokens[1].accessToken;
                        keyValuePair = "#id_token=" + encodeURIComponent(idToken) + "&access_token=" + encodeURIComponent(accessToken);
                        this.oauthService.tryLogin({
                            customHashFragment: keyValuePair,
                            disableOAuth2StateCheck: true
                        });
                        return [4 /*yield*/, this.storage.set(this.storage.data.idToken, tokens[0].idToken)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set(this.storage.data.accessToken, tokens[1].accessToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    MyApp.prototype.redirectByTouchID = function (istouchid) {
        if (!istouchid) {
            return this.nagivateTo(__WEBPACK_IMPORTED_MODULE_21__pages_home_module_sub_tab_sub_tab__["a" /* SubTabPage */]);
        }
        this.nagivateTo(__WEBPACK_IMPORTED_MODULE_18__pages_auth_module_lock_screen_lock_screen__["a" /* LockScreenPage */], true);
    };
    MyApp.prototype.getUserPhotoUri = function () {
        this.userPhotoUrl = this.request.getImageUrl(__WEBPACK_IMPORTED_MODULE_6__providers_settings_endpoints__["a" /* Endpoints */].uri.user.photo, [this.user.Id]);
    };
    MyApp.prototype.setUserInfo = function () {
        this.state.set(this.state.data.userInfo, this.user);
    };
    MyApp.prototype.initNotification = function () {
        this.notificationProvider.pushInit(this);
    };
    MyApp.prototype.checkNetwork = function () {
        var _this = this;
        this.appBroadcast.checkNetwork.subscribe(function (data) {
            if (data.error && data.error.status === 599 && data.type === 'iff_network') {
                _this.toast = _this.toastController.create({
                    message: "You're not connected to Iff network.Please connect and try again",
                    duration: 10000,
                    position: 'bottom'
                });
                _this.toast.present();
            }
            if (data && data.type === 'internet_offline') {
                _this.toast = _this.toastController.create({
                    message: "There may be a problem in your internet connection. Please check and try again",
                    duration: 30000000,
                    position: 'bottom'
                });
                _this.toast.present();
            }
            if (data && data.type === 'internet_online') {
                try {
                    _this.toast.dismissAll();
                }
                catch (error) { }
            }
        });
    };
    MyApp.prototype.keyboardFix = function () {
        var _this = this;
        window.addEventListener('keyboardDidShow', function () {
            document.activeElement.scrollIntoView(false);
            var elements = document.getElementsByClassName("scroll-content");
            for (var i = 0, length = elements.length; i < length; i++) {
                elements[i].classList.add("overflow-scrolling-auto");
                // elements[i].classList.remove("overflow-scrolling-touch");
                elements[i].addEventListener('scroll', function () {
                    if (_this.keyboard.isOpen()) {
                        var InputTag = document.activeElement;
                        //Adding Focus out event to prevent issue when the user switch between multiple input or text area
                        InputTag.addEventListener('focusout', function () {
                            if (InputTag.classList.contains("hide_visibility")) {
                                InputTag.classList.add("hide_visibility");
                            }
                        });
                        var divOffset = _this.offset(InputTag);
                        if (divOffset.top < 60 && !InputTag.classList.contains("hide_visibility")) {
                            InputTag.classList.add("hide_visibility");
                        }
                        else if (divOffset.top > 60 && InputTag.classList.contains("hide_visibility")) {
                            InputTag.classList.remove("hide_visibility");
                        }
                    }
                });
            }
        });
        window.addEventListener('keyboardDidHide', function () {
            var elements = document.getElementsByClassName("scroll-content");
            for (var i = 0, length = elements.length; i < length; i++) {
                // elements[i].classList.add("overflow-scrolling-touch");
                elements[i].classList.remove("overflow-scrolling-auto");
                elements[i].removeEventListener('scroll', function () { });
            }
        });
    };
    MyApp.prototype.offset = function (el) {
        var rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/app/app.html"*/'<ion-menu class="sideMenuHeader" [content]="content" persistent="true" type="overlay">\n  <ion-header class="custom-ion-header">\n    <div class="roundedImg">\n      <img *ngIf="userPhotoUrl" [src]="userPhotoUrl" onerror="this.onerror=null;this.src=\'../assets/imgs/profile-image.png\';" alt="User" />\n    </div>\n    <div class="headingText" font-weight-bold mb-1>{{user?.DisplayName}}</div>\n    <div lightgrey mb-1>{{user?.Creativecenter}}</div>\n\n  </ion-header>\n\n  <ion-content>\n      <ion-list class="sideMenu">\n          <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n            <span [class]="page.icon"></span>{{page.title}}\n          </button>\n        </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_angular_oauth2_oidc__["OAuthService"],
            __WEBPACK_IMPORTED_MODULE_14__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_state_state__["a" /* State */],
            __WEBPACK_IMPORTED_MODULE_10__providers_request_request__["a" /* Request */],
            __WEBPACK_IMPORTED_MODULE_8__providers_network_network__["a" /* NetworkProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_12__providers_spinner_spinner__["a" /* Spinner */],
            __WEBPACK_IMPORTED_MODULE_19__providers_app_broadcast_app_broadcast__["a" /* AppBroadcast */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_interface__ = __webpack_require__(105);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DevConfig = /** @class */ (function (_super) {
    __extends(DevConfig, _super);
    function DevConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.environment = 'dev';
        _this.basUrl = '/mobile-api/';
        _this.sapUrl = '/sap-api/';
        _this.imageUrl = "/image-api/";
        _this.trendUrl = 'https://trends-dev.iff.com/app-api/api/m1/';
        // public trendUrl = '/trend-api/';
        _this.oktaCredentials = {
            redirectUri: "http://localhost:8080",
            clientId: '0oa1foeshdeTba5ZW0h8',
            scope: 'openid profile email',
            issuer: 'https://iff.okta.com',
            requireHttps: false
        };
        _this.loginInterval = 20000; //33.33 mins
        return _this;
    }
    return DevConfig;
}(__WEBPACK_IMPORTED_MODULE_0__config_interface__["b" /* Config */]));

//# sourceMappingURL=dev-config.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_interface__ = __webpack_require__(105);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProdConfig = /** @class */ (function (_super) {
    __extends(ProdConfig, _super);
    function ProdConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.environment = 'prd';
        _this.basUrl = 'https://dev2-puma.iff.com/app-api/api/m1/';
        _this.sapUrl = 'http://sapqgw.iff.com:8000/sap/opu/odata/sap/';
        _this.trendUrl = 'https://trends-dev.iff.com/app-api/api/m1/';
        _this.oktaCredentials = {
            redirectUri: "http://localhost:8080",
            clientId: '0oa1foeshdeTba5ZW0h8',
            scope: 'openid profile email',
            issuer: 'https://iff.okta.com',
            requireHttps: false
        };
        _this.loginInterval = 200000; //33.33 mins
        return _this;
    }
    return ProdConfig;
}(__WEBPACK_IMPORTED_MODULE_0__config_interface__["b" /* Config */]));

//# sourceMappingURL=prod-config.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_interface__ = __webpack_require__(105);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LocalConfig = /** @class */ (function (_super) {
    __extends(LocalConfig, _super);
    function LocalConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.environment = 'local';
        _this.basUrl = '/mobile-api/';
        _this.sapUrl = '/sap-api/';
        _this.imageUrl = "/image-api/";
        // public trendUrl = 'https://trends-dev.iff.com/app-api/';
        _this.trendUrl = 'http://localhost:20100/api/m1/';
        _this.oktaCredentials = {
            redirectUri: "http://localhost:8080",
            clientId: '0oa1foeshdeTba5ZW0h8',
            scope: 'openid profile email',
            issuer: 'https://iff.okta.com',
            requireHttps: false
        };
        _this.loginInterval = 200000; //33.33 mins
        return _this;
    }
    return LocalConfig;
}(__WEBPACK_IMPORTED_MODULE_0__config_interface__["b" /* Config */]));

//# sourceMappingURL=local-config.js.map

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 409,
	"./af.js": 409,
	"./ar": 410,
	"./ar-dz": 411,
	"./ar-dz.js": 411,
	"./ar-kw": 412,
	"./ar-kw.js": 412,
	"./ar-ly": 413,
	"./ar-ly.js": 413,
	"./ar-ma": 414,
	"./ar-ma.js": 414,
	"./ar-sa": 415,
	"./ar-sa.js": 415,
	"./ar-tn": 416,
	"./ar-tn.js": 416,
	"./ar.js": 410,
	"./az": 417,
	"./az.js": 417,
	"./be": 418,
	"./be.js": 418,
	"./bg": 419,
	"./bg.js": 419,
	"./bm": 420,
	"./bm.js": 420,
	"./bn": 421,
	"./bn.js": 421,
	"./bo": 422,
	"./bo.js": 422,
	"./br": 423,
	"./br.js": 423,
	"./bs": 424,
	"./bs.js": 424,
	"./ca": 425,
	"./ca.js": 425,
	"./cs": 426,
	"./cs.js": 426,
	"./cv": 427,
	"./cv.js": 427,
	"./cy": 428,
	"./cy.js": 428,
	"./da": 429,
	"./da.js": 429,
	"./de": 430,
	"./de-at": 431,
	"./de-at.js": 431,
	"./de-ch": 432,
	"./de-ch.js": 432,
	"./de.js": 430,
	"./dv": 433,
	"./dv.js": 433,
	"./el": 434,
	"./el.js": 434,
	"./en-SG": 435,
	"./en-SG.js": 435,
	"./en-au": 436,
	"./en-au.js": 436,
	"./en-ca": 437,
	"./en-ca.js": 437,
	"./en-gb": 438,
	"./en-gb.js": 438,
	"./en-ie": 439,
	"./en-ie.js": 439,
	"./en-il": 440,
	"./en-il.js": 440,
	"./en-nz": 441,
	"./en-nz.js": 441,
	"./eo": 442,
	"./eo.js": 442,
	"./es": 443,
	"./es-do": 444,
	"./es-do.js": 444,
	"./es-us": 445,
	"./es-us.js": 445,
	"./es.js": 443,
	"./et": 446,
	"./et.js": 446,
	"./eu": 447,
	"./eu.js": 447,
	"./fa": 448,
	"./fa.js": 448,
	"./fi": 449,
	"./fi.js": 449,
	"./fo": 450,
	"./fo.js": 450,
	"./fr": 451,
	"./fr-ca": 452,
	"./fr-ca.js": 452,
	"./fr-ch": 453,
	"./fr-ch.js": 453,
	"./fr.js": 451,
	"./fy": 454,
	"./fy.js": 454,
	"./ga": 455,
	"./ga.js": 455,
	"./gd": 456,
	"./gd.js": 456,
	"./gl": 457,
	"./gl.js": 457,
	"./gom-latn": 458,
	"./gom-latn.js": 458,
	"./gu": 459,
	"./gu.js": 459,
	"./he": 460,
	"./he.js": 460,
	"./hi": 461,
	"./hi.js": 461,
	"./hr": 462,
	"./hr.js": 462,
	"./hu": 463,
	"./hu.js": 463,
	"./hy-am": 464,
	"./hy-am.js": 464,
	"./id": 465,
	"./id.js": 465,
	"./is": 466,
	"./is.js": 466,
	"./it": 467,
	"./it-ch": 468,
	"./it-ch.js": 468,
	"./it.js": 467,
	"./ja": 469,
	"./ja.js": 469,
	"./jv": 470,
	"./jv.js": 470,
	"./ka": 471,
	"./ka.js": 471,
	"./kk": 472,
	"./kk.js": 472,
	"./km": 473,
	"./km.js": 473,
	"./kn": 474,
	"./kn.js": 474,
	"./ko": 475,
	"./ko.js": 475,
	"./ku": 476,
	"./ku.js": 476,
	"./ky": 477,
	"./ky.js": 477,
	"./lb": 478,
	"./lb.js": 478,
	"./lo": 479,
	"./lo.js": 479,
	"./lt": 480,
	"./lt.js": 480,
	"./lv": 481,
	"./lv.js": 481,
	"./me": 482,
	"./me.js": 482,
	"./mi": 483,
	"./mi.js": 483,
	"./mk": 484,
	"./mk.js": 484,
	"./ml": 485,
	"./ml.js": 485,
	"./mn": 486,
	"./mn.js": 486,
	"./mr": 487,
	"./mr.js": 487,
	"./ms": 488,
	"./ms-my": 489,
	"./ms-my.js": 489,
	"./ms.js": 488,
	"./mt": 490,
	"./mt.js": 490,
	"./my": 491,
	"./my.js": 491,
	"./nb": 492,
	"./nb.js": 492,
	"./ne": 493,
	"./ne.js": 493,
	"./nl": 494,
	"./nl-be": 495,
	"./nl-be.js": 495,
	"./nl.js": 494,
	"./nn": 496,
	"./nn.js": 496,
	"./pa-in": 497,
	"./pa-in.js": 497,
	"./pl": 498,
	"./pl.js": 498,
	"./pt": 499,
	"./pt-br": 500,
	"./pt-br.js": 500,
	"./pt.js": 499,
	"./ro": 501,
	"./ro.js": 501,
	"./ru": 502,
	"./ru.js": 502,
	"./sd": 503,
	"./sd.js": 503,
	"./se": 504,
	"./se.js": 504,
	"./si": 505,
	"./si.js": 505,
	"./sk": 506,
	"./sk.js": 506,
	"./sl": 507,
	"./sl.js": 507,
	"./sq": 508,
	"./sq.js": 508,
	"./sr": 509,
	"./sr-cyrl": 510,
	"./sr-cyrl.js": 510,
	"./sr.js": 509,
	"./ss": 511,
	"./ss.js": 511,
	"./sv": 512,
	"./sv.js": 512,
	"./sw": 513,
	"./sw.js": 513,
	"./ta": 514,
	"./ta.js": 514,
	"./te": 515,
	"./te.js": 515,
	"./tet": 516,
	"./tet.js": 516,
	"./tg": 517,
	"./tg.js": 517,
	"./th": 518,
	"./th.js": 518,
	"./tl-ph": 519,
	"./tl-ph.js": 519,
	"./tlh": 520,
	"./tlh.js": 520,
	"./tr": 521,
	"./tr.js": 521,
	"./tzl": 522,
	"./tzl.js": 522,
	"./tzm": 523,
	"./tzm-latn": 524,
	"./tzm-latn.js": 524,
	"./tzm.js": 523,
	"./ug-cn": 525,
	"./ug-cn.js": 525,
	"./uk": 526,
	"./uk.js": 526,
	"./ur": 527,
	"./ur.js": 527,
	"./uz": 528,
	"./uz-latn": 529,
	"./uz-latn.js": 529,
	"./uz.js": 528,
	"./vi": 530,
	"./vi.js": 530,
	"./x-pseudo": 531,
	"./x-pseudo.js": 531,
	"./yo": 532,
	"./yo.js": 532,
	"./zh-cn": 533,
	"./zh-cn.js": 533,
	"./zh-hk": 534,
	"./zh-hk.js": 534,
	"./zh-tw": 535,
	"./zh-tw.js": 535
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 908;

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(renderer, events) {
        this.renderer = renderer;
        this.events = events;
        this.accordionExpanded = false;
        this.disableClick = false;
        this.isDisabled = false;
        this.icon = "arrow-down";
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
        this.initAccordion();
        this.collapseAllEvent();
    };
    AccordionComponent.prototype.initAccordion = function () {
        if (!this.accordionExpanded) {
            return;
        }
        this.expand();
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        if (this.isDisabled || this.disableClick) {
            return;
        }
        var tempaccordionExpanded = this.accordionExpanded;
        this.events.publish('collapseAll');
        if (tempaccordionExpanded) {
            return this.collapse();
        }
        this.expand();
    };
    AccordionComponent.prototype.resetAccordion = function () {
        if (this.isDisabled) {
            return;
        }
        var tempaccordionExpanded = this.accordionExpanded;
        this.events.publish('collapseAll');
        if (tempaccordionExpanded) {
            return this.expand();
        }
        // this.collapse();
    };
    AccordionComponent.prototype.setCollapseMeta = function () {
        this.accordionExpanded = false;
        this.icon = "arrow-down";
    };
    AccordionComponent.prototype.setExpandMeta = function () {
        this.accordionExpanded = true;
        this.icon = "arrow-up";
    };
    AccordionComponent.prototype.collapseAllEvent = function () {
        var _this = this;
        this.events.subscribe('collapseAll', function () {
            _this.collapse();
        });
    };
    AccordionComponent.prototype.collapse = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px");
        this.setCollapseMeta();
    };
    AccordionComponent.prototype.expand = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "2000px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "unset");
        this.setExpandMeta();
    };
    AccordionComponent.prototype.ngOnChanges = function (changes) {
        if (changes['accordionExpanded'].isFirstChange()) {
            return;
        }
        if (!changes['accordionExpanded'].currentValue) {
            return;
        }
        this.resetAccordion();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('accordionExpanded'),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "accordionExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('disableClick'),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "disableClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isDisabled'),
        __metadata("design:type", Boolean)
    ], AccordionComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("cc"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'accordion',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/components/accordion/accordion.html"*/'<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    <ion-list>\n      <ion-item >\n      <!-- <ion-item  [color]="isDisabled ? \'disable\' : \'light\'"> -->\n        <button ion-button clear small icon-only item-right>\n          <ion-icon color="dark" [name]="icon"></ion-icon>\n        </button>\n        <div class="header">\n          <ng-content select="accordion-header"></ng-content>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card-header>\n  <ion-card-content #cc>\n    <ng-content select="accordion-body"></ng-content>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PickerComponent = /** @class */ (function () {
    function PickerComponent(modalController) {
        this.modalController = modalController;
        this.list = [];
        this.selectedList = [];
        this.extras = {};
    }
    PickerComponent.prototype.openModal = function () {
        var _this = this;
        var test = this.modalController.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalComponent */], {
            list: this.list,
            selected: this.selectedList,
            extras: this.extras
        });
        test.onDidDismiss(function (selectedList) {
            if (selectedList === 'cancel') {
                return;
            }
            _this.selectedList = selectedList;
        });
        test.present();
    };
    PickerComponent.prototype.remove = function (removeItem) {
        for (var item in this.selectedList) {
            if (this.selectedList[item].id === removeItem.id) {
                delete this.selectedList[item];
            }
        }
        //remove empty elements from array
        this.selectedList = this.selectedList.filter(function (el) {
            return el != null;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('list'),
        __metadata("design:type", Object)
    ], PickerComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('selectedList'),
        __metadata("design:type", Object)
    ], PickerComponent.prototype, "selectedList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('extras'),
        __metadata("design:type", Object)
    ], PickerComponent.prototype, "extras", void 0);
    PickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'picker',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/components/picker/picker.html"*/'<div>\n  You can select upto <strong>{{extras?.maxSelect}}</strong> people\n  <ul>\n    <li *ngFor="let item of selectedList">\n      {{item?.name}}\n      <span *ngIf="item?.name" (click)="remove(item)" class="icon-delete"></span>\n    </li>\n  </ul>\n</div>\n<span (click)="openModal()">+Add</span>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/components/picker/picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */]])
    ], PickerComponent);
    return PickerComponent;
}());

//# sourceMappingURL=picker.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_intro__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_reset__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loginverify_loginverify__ = __webpack_require__(913);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__loginverify_loginverify__["a" /* LoginverifyPage */],
                __WEBPACK_IMPORTED_MODULE_4__reset_reset__["a" /* ResetPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_5__lock_screen_lock_screen__["a" /* LockScreenPage */],
                __WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_4__reset_reset__["a" /* ResetPage */],
                __WEBPACK_IMPORTED_MODULE_7__loginverify_loginverify__["a" /* LoginverifyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_request_request__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_state_state__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_app_broadcast_app_broadcast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_module_sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, toastCtrl, notificationProvider, spinner, request, state, storage, appBroadcast) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.notificationProvider = notificationProvider;
        this.spinner = spinner;
        this.request = request;
        this.state = state;
        this.storage = storage;
        this.appBroadcast = appBroadcast;
        this.enableCompleteBtn = false;
        this.intros = [
            {
                title: "Create Customer Review Session",
                description: "<b>Long press</b> on the first fragrance and single press on following fragrances to select for creating <b>Customer Review Session</b>",
                image: "assets/imgs/skipintro1.png",
                skipText: "Skip"
            },
        ];
    }
    // ionViewDidLoad() {
    //   try {
    //     this.spinner.show();
    //     let userID = this.state.get(this.state.data.userid);
    //     if (!userID) {
    //       userID = this.request.getId();
    //     }
    //     if (userID) {
    //       this.notificationProvider.pushregister();
    //       forkJoin(
    //         this.request.get(Endpoints.uri.user.info, [userID]),
    //         this.request.get(Endpoints.uri.user.preferences, [userID])
    //       ).subscribe((result: any) => {
    //         if (result[0] != null && result[1] != null) {
    //           const user = {
    //             Id: result[0]['UserId'],
    //             DisplayName: result[0]['DisplayName'],
    //             Email: result[0]['EmailId'],
    //             OfficeLocation: result[0]['OfficeLocation'],
    //             RegionName: result[0]['RegionName'],
    //             Creativecenter: result[1].length ? result[1][0]['CREATIVECENTER'] : '',
    //             Creativecenterid: result[1].length ? result[1][0]['CREATIVECENTERID'] : '',
    //             CreativeCenterCode: result[1].length ? result[1][0]['CreativeCenterCode'] : '',
    //             CurrencyCode: result[1].length ? result[1][0]['CurrencyCode'] : '',
    //             Currency: result[1].length ? result[1][0]['Currency'] : '',
    //           };
    //           this.storage.set(this.storage.data.userInfo, user);
    //           this.state.set(this.state.data.userInfo, user);
    //           this.enableCompleteBtn = true;
    //           this.appBroadcast.userData.next(user);
    //           this.spinner.hide();
    //         }
    //       }, () => {
    //         let errToastr = this.toastCtrl.create({
    //           message: 'There was a problem while logging into app. Please try again',
    //           duration: 4000,
    //           position: 'top',
    //           cssClass: 'customToaster-error'
    //         });
    //         errToastr.present(errToastr);
    //         this.storage.removeAll();
    //         localStorage.clear();
    //         sessionStorage.clear();
    //         this.navCtrl.setRoot(LoginPage);
    //         this.spinner.hide();
    //       });
    //     }
    //     else {
    //       let errToastr = this.toastCtrl.create({
    //         message: 'There was a problem while logging into app. Please try again',
    //         duration: 4000,
    //         position: 'top',
    //         cssClass: 'customToaster-error'
    //       });
    //       errToastr.present(errToastr);
    //       this.spinner.hide();
    //       this.storage.removeAll();
    //       localStorage.clear();
    //       sessionStorage.clear();
    //       this.navCtrl.setRoot(LoginPage);
    //     }
    //   } catch (error) {
    //   }
    // }
    IntroPage.prototype.goToLogin = function () {
        window.location.href = "http://localhost:8080";
    };
    IntroPage.prototype.skipLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.storage.data.userInfo)];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_module_sub_tab_sub_tab__["a" /* SubTabPage */]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-intro",template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/intro/intro.html"*/'<ion-content padding class="contentbg" class="intro-page">\n  <ion-slides pager>\n    <ion-slide *ngFor="let intro of intros">\n      <img [src]="intro.image" class="intro-image" />\n      <ion-note no-margin positon-centered-text>\n        <h2 class="intro-title" [innerHTML]="intro.title"></h2>\n        <p [innerHTML]="intro.description"></p>\n      </ion-note>\n    </ion-slide>\n  </ion-slides>\n  <ion-grid positon-centered-buttons>\n    <ion-col col-10 mx-auto text-center>\n\n      <!-- <ion-buttons> <button (click)="skipLogin()" [disabled]="!enableCompleteBtn" skipButton ion-button color="primary">Skip</button></ion-buttons> -->\n      <ion-buttons> <button (click)="skipLogin()" [disabled]="!enableCompleteBtn" skiploginbutton block ion-button\n          color="primary">Skip</button></ion-buttons>\n      <!-- <ion-buttons> <button (click)="goToLogin()" skiploginbutton ion-button block>LOGIN</button></ion-buttons>  -->\n    </ion-col>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/intro/intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notification_notification__["a" /* NotificationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_spinner_spinner__["a" /* Spinner */],
            __WEBPACK_IMPORTED_MODULE_5__providers_request_request__["a" /* Request */],
            __WEBPACK_IMPORTED_MODULE_6__providers_state_state__["a" /* State */],
            __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_app_broadcast_app_broadcast__["a" /* AppBroadcast */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginverifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginverifyPage = /** @class */ (function () {
    function LoginverifyPage(navParams, oauthService, spinner, storage) {
        this.navParams = navParams;
        this.oauthService = oauthService;
        this.spinner = spinner;
        this.storage = storage;
        if (this.navParams.data.mfa && this.navParams.data.mfa.factors.length > 0) {
            this.responsel = this.navParams.data.mfa.factors.find(function (factor) {
                return factor.provider === 'OKTA' && factor.factorType === 'question';
            });
            if (this.navParams.data.authClient) {
                this.authClient = this.navParams.data.authClient;
            }
            if (this.navParams.data.nonce) {
                this.nonce = this.navParams.data.nonce;
            }
        }
    }
    LoginverifyPage.prototype.login = function () {
        var _this = this;
        try {
            this.spinner.show();
            this.responsel.verify({
                answer: this.answer
            }).then(function (data) {
                _this.authClient.token.getWithoutPrompt({
                    clientId: _this.oauthService.clientId,
                    responseType: ['id_token', 'token'],
                    scopes: ['openid', 'profile', 'email'],
                    sessionToken: data.sessionToken,
                    nonce: _this.nonce
                }).then(function (tokens) { return __awaiter(_this, void 0, void 0, function () {
                    var idToken, accessToken, keyValuePair;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                idToken = tokens[0].idToken;
                                accessToken = tokens[1].accessToken;
                                keyValuePair = "#id_token=" + encodeURIComponent(idToken) + "&access_token=" + encodeURIComponent(accessToken);
                                this.oauthService.tryLogin({
                                    customHashFragment: keyValuePair,
                                    disableOAuth2StateCheck: true
                                });
                                return [4 /*yield*/, this.storage.set(this.storage.data.idToken, tokens[0].idToken)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.storage.set(this.storage.data.accessToken, tokens[1].accessToken)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, this.storage.set(this.storage.data.MFAAnswer, this.answer)];
                            case 3:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).fail(function () {
                    _this.spinner.hide();
                });
            }).fail(function () {
                _this.spinner.hide();
            });
        }
        catch (err) {
            this.spinner.hide();
        }
    };
    LoginverifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-loginverify',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/loginverify/loginverify.html"*/'<ion-content class="login-background">\n    <ion-card no-margin login-card class="fullWidth">\n      <img src="../../assets/imgs/loginbg.png" />\n      <div class="card-title">\n          <div class="card-subtitle-verify">Login Verification</div>\n      </div>\n    </ion-card>\n    <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n      <ion-grid>\n      <ion-row>\n        <ion-col col-10 mx-auto verifyQuestion>\n          {{responsel.profile.questionText}}\n        </ion-col>\n      </ion-row>\n        <ion-row>\n          <ion-col col-10 mx-auto text-center>\n            <ion-item logintextfield>\n              <ion-label color="primary" floating>Answer</ion-label>\n              <ion-input name="answer" type="password" required [(ngModel)]="answer"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-10 mx-auto text-center>\n            <div *ngIf="error" class="red text-left ">{{error}}</div>\n            <button loginbutton ion-button block type="submit">Verify\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/auth-module/loginverify/loginverify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angular_oauth2_oidc__["OAuthService"],
            __WEBPACK_IMPORTED_MODULE_4__providers_spinner_spinner__["a" /* Spinner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
    ], LoginverifyPage);
    return LoginverifyPage;
}());

//# sourceMappingURL=loginverify.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_charts_ng4_charts__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_charts_ng4_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_charts_ng4_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accordion_accordion__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_chart__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_events__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deeplinks_deeplinks__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__infinite_scroller_infinite_scroller__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__picker_modal_picker_modal__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_share__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__speech_recognition_speech_recognition__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_form__ = __webpack_require__(546);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__accordion_accordion__["a" /* AccordionPage */],
                __WEBPACK_IMPORTED_MODULE_4__chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_5__events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__deeplinks_deeplinks__["a" /* DeeplinksPage */],
                __WEBPACK_IMPORTED_MODULE_12__demo_form__["a" /* DemoPage */],
                __WEBPACK_IMPORTED_MODULE_7__infinite_scroller_infinite_scroller__["a" /* InfiniteScrollerPage */],
                __WEBPACK_IMPORTED_MODULE_8__picker_modal_picker_modal__["a" /* PickerModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_11__speech_recognition_speech_recognition__["a" /* SpeechRecognitionPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__accordion_accordion__["a" /* AccordionPage */],
                __WEBPACK_IMPORTED_MODULE_4__chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_5__events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__deeplinks_deeplinks__["a" /* DeeplinksPage */],
                __WEBPACK_IMPORTED_MODULE_12__demo_form__["a" /* DemoPage */],
                __WEBPACK_IMPORTED_MODULE_7__infinite_scroller_infinite_scroller__["a" /* InfiniteScrollerPage */],
                __WEBPACK_IMPORTED_MODULE_8__picker_modal_picker_modal__["a" /* PickerModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_11__speech_recognition_speech_recognition__["a" /* SpeechRecognitionPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng4_charts_ng4_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NO_ERRORS_SCHEMA"]]
        })
    ], DemoModule);
    return DemoModule;
}());

//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeeplinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_module_sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeeplinksPage = /** @class */ (function () {
    function DeeplinksPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.args = {};
        this.args = this.navParams.data;
    }
    DeeplinksPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_module_sub_tab_sub_tab__["a" /* SubTabPage */]);
    };
    DeeplinksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-deeplinks',template:/*ion-inline-start:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/deeplinks/deeplinks.html"*/'<ion-header class="custom-ion-header">\n  <ion-navbar hideBackButton="true" color="primary">\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col no-padding col-2 text-left>\n          <ion-buttons pl-1>\n            <button (click)="home()" class="subpage-header-icon" ion-button icon-only>\n              Home\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col no-padding col-8 text-center>\n          <ion-title>Picker Modal</ion-title>\n        </ion-col>\n        <ion-col no-padding col-2 text-right>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="contentbg">\n\n  {{args | json}}\n</ion-content>\n'/*ion-inline-end:"/Users/shankaranand/Downloads/soccer/src/pages/demo-module/deeplinks/deeplinks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], DeeplinksPage);
    return DeeplinksPage;
}());

//# sourceMappingURL=deeplinks.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sub_tab_sub_tab__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sub_tab_sub_tab__["a" /* SubTabPage */],
                __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__sub_tab_sub_tab__["a" /* SubTabPage */],
                __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__help_help__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__help_detail_help_detail__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_4__help_detail_help_detail__["a" /* HelpDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_3__help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_4__help_detail_help_detail__["a" /* HelpDetailPage */],
                __WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_vendor__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_details_vendor_details__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_search_vendor_search__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vendors_add_vendors_add__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VendorModule = /** @class */ (function () {
    function VendorModule() {
    }
    VendorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vendor_vendor__["a" /* VendorPage */],
                __WEBPACK_IMPORTED_MODULE_3__vendor_details_vendor_details__["a" /* VendorDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_4__vendor_search_vendor_search__["a" /* VendorSearchPage */],
                __WEBPACK_IMPORTED_MODULE_5__vendors_add_vendors_add__["a" /* VendorsAddPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__vendor_vendor__["a" /* VendorPage */],
                __WEBPACK_IMPORTED_MODULE_3__vendor_details_vendor_details__["a" /* VendorDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_4__vendor_search_vendor_search__["a" /* VendorSearchPage */],
                __WEBPACK_IMPORTED_MODULE_5__vendors_add_vendors_add__["a" /* VendorsAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ]
        })
    ], VendorModule);
    return VendorModule;
}());

//# sourceMappingURL=vendor.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_broadcast_app_broadcast__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { appConfig } from '../../app.config';
// import { appConfig } from '../../../assets/env.prod';

var InterceptorProvider = /** @class */ (function () {
    function InterceptorProvider(appBroadcast, loading) {
        this.appBroadcast = appBroadcast;
        this.loading = loading;
    }
    InterceptorProvider.prototype.intercept = function (req, next) {
        var _this = this;
        var request = req;
        var requestUrl = req.url;
        //   return next.handle(request).pipe(
        //     catchError(error => {
        //       this.appBroadcast.doCheckNetwork({error: error, type: 'iff_network'});
        //       this.loading.hide();
        //       return Observable.throw(error);
        //     })
        //   );
        // }
        // if (!requestUrl.includes('.json')) {
        // const token = this.appService.userData.access_token;
        // if (!requestUrl.includes('/login') && !requestUrl.includes('/logo') && !requestUrl.includes('/forgot-password')) {
        //     request = req.clone({
        //         url: appConfig.API_BASE_URL + req.url,
        //         // setHeaders: {
        //         //     'Authorization': 'Bearer ' + token,
        //         // }
        //     });
        // } else {
        //     if (requestUrl.includes('/logo')) {
        //         request = req.clone({
        //             url: appConfig.API_BASE_URL + req.url,
        //             // setHeaders: {
        //             //     'Authorization': 'Bearer ' + token,
        //             // },
        //             responseType: 'text',
        //         });
        //     } else {
        //         request = req.clone({
        //             url: appConfig.API_BASE_URL + req.url,
        //             setHeaders: {}
        //         });
        //     }
        // }
        // }
        request = req.clone({
            url: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* appConfig */].API_BASE_URL + req.url,
            setHeaders: {}
        });
        console.log(request, "intercepter");
        return next
            .handle(request)
            .map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpResponse"]) {
                // this.appService.resetBusy();
                _this.loading.show();
            }
            return event;
        })
            .catch(function (err) {
            // this.appService.resetBusy();
            if (err instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpErrorResponse"]) {
                if (err.status === 0) {
                    // this.appService.showToasterErrMsg('Server Unreachable');
                }
                else {
                    if (err.status >= 500) {
                        // this.appService.showToasterErrMsg(appConst.ERROR_MSG.INTERVAL_SERVER_ERROR);
                    }
                    else {
                        if ((err.error)
                            && (!err.error.error_description)) {
                            //let errMsg = appConst.ERROR_MSG[err.error];
                            var errMsg = err.error.errors[0];
                            if (!errMsg) {
                                // errMsg = appConst.ERROR_MSG.BAD_REQ;
                            }
                            // this.appService.showToasterErrMsg(errMsg);
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err);
            }
        });
    };
    InterceptorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_broadcast_app_broadcast__["a" /* AppBroadcast */], __WEBPACK_IMPORTED_MODULE_4__spinner_spinner__["a" /* Spinner */]])
    ], InterceptorProvider);
    return InterceptorProvider;
}());

//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var appConfig = {
    production: false,
    API_BASE_URL: 'http://159.65.150.70/api',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_list_employees_list__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_search_employees_search__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees_view_employees_view__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employees_list_employees_list__["a" /* EmployeesList */],
                __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add__["a" /* EmployeesAdd */],
                __WEBPACK_IMPORTED_MODULE_4__employees_search_employees_search__["a" /* EmployeesSearch */],
                __WEBPACK_IMPORTED_MODULE_5__employees_view_employees_view__["a" /* EmployeesView */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__employees_list_employees_list__["a" /* EmployeesList */],
                __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add__["a" /* EmployeesAdd */],
                __WEBPACK_IMPORTED_MODULE_4__employees_search_employees_search__["a" /* EmployeesSearch */],
                __WEBPACK_IMPORTED_MODULE_5__employees_view_employees_view__["a" /* EmployeesView */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], EmployeeModule);
    return EmployeeModule;
}());

//# sourceMappingURL=employee.module.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_list_project_list__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_search_project_search__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_add_projects_add__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__project_list_project_list__["a" /* ProjectListPage */],
                __WEBPACK_IMPORTED_MODULE_3__project_search_project_search__["a" /* ProjectSearchPage */],
                __WEBPACK_IMPORTED_MODULE_4__projects_add_projects_add__["a" /* ProjectsAddPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__project_list_project_list__["a" /* ProjectListPage */],
                __WEBPACK_IMPORTED_MODULE_3__project_search_project_search__["a" /* ProjectSearchPage */],
                __WEBPACK_IMPORTED_MODULE_4__projects_add_projects_add__["a" /* ProjectsAddPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], ProjectModule);
    return ProjectModule;
}());

//# sourceMappingURL=project.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notification_search_notification_search__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list__["a" /* NotificationListPage */],
                __WEBPACK_IMPORTED_MODULE_3__notification_search_notification_search__["a" /* NotificationSearchPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__notification_list_notification_list__["a" /* NotificationListPage */],
                __WEBPACK_IMPORTED_MODULE_3__notification_search_notification_search__["a" /* NotificationSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */]
            ],
        })
    ], NotificationModule);
    return NotificationModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ })

},[558]);
//# sourceMappingURL=main.js.map