function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content no-padding>\n  <div class=\"main\">\n    <ion-card no-margin>\n      <ion-card-content>\n        <ion-row class=\"row\">\n          <div class=\"fire-logo\">\n            <img src=\"assets/femikarelogo.png\" class=\"img-logo\">\n            <ion-text padding>\n              <h2 no-margin margin-vertical text-center style=\"color: #F21F80;\">Welcome to Femikare</h2>\n            </ion-text>\n          </div>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"text\" placeholder=\"User Name\" [(ngModel)]=\"email\" class=\"input\" padding-horizontal\n              clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-input clearInput type=\"number\" placeholder=\"Mobile No.\" [(ngModel)]=\"mobile\" class=\"input\"\n              padding-horizontal clear-input=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <!-- <ion-row *ngIf=\"showOTPInput\">\n          <ion-col>\n            <ion-input clearInput type=\"tel\" [(ngModel)]=\"OTP\" maxlength=\"6\" class=\"otpinput\" padding-horizontal>\n            </ion-input>\n          </ion-col>\n        </ion-row> -->\n        <ion-row *ngIf=\"showOTPInput\" class=\"OTP-border\">\n          <ion-col>\n            <div>\n              <ion-input name=\"1\" readonly type=\"tel\" [(ngModel)]=\"OTP[0]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input name=\"2\" readonly type=\"tel\" [(ngModel)]=\"OTP[1]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input name=\"3\" readonly type=\"tel\" [(ngModel)]=\"OTP[2]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input name=\"4\" readonly type=\"tel\" [(ngModel)]=\"OTP[3]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col>\n          <!-- <ion-col>\n            <div>\n              <ion-input name=\"5\" readonly type=\"tel\" [(ngModel)]=\"OTP[4]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col> -->\n          <!-- <ion-col>\n            <div>\n              <ion-input name=\"6\" readonly type=\"tel\" [(ngModel)]=\"OTP[5]\" maxlength=\"6\" class=\"otpinput\"\n                padding-horizontal>\n              </ion-input>\n            </div>\n          </ion-col> -->\n        </ion-row>\n        <ion-row *ngIf=\"showOTPInput\">\n          <ion-col>\n            <ion-text class=\"small\">{{OTPmessage}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button *ngIf=\"!showOTPInput\" expand=\"block\" (click)=\"next()\" color=\"undefined\" class=\"transition\">\n              <strong class=\"white\">\n                Next</strong></ion-button>\n            <ion-button *ngIf=\"showOTPInput\" expand=\"block\" (click)=\"register()\" color=\"undefined\" class=\"transition\">\n              <strong class=\"white\">\n                Register</strong></ion-button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-text text-center class=\"block\">Already have an account ?\n              <span class=\"bold\">Login here</span></ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-text text-center class=\"block bold\">Forgot Password</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<!-- <ion-footer>\n  <ion-toolbar>\n    <ion-title text-center>\n      Made by Enappd\n    </ion-title>\n  </ion-toolbar>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass(AuthService, [{
        key: "otp",
        value: function otp(data) {
          console.log('reached here', data);
          return this.http.post(this.url + 'send-otp/', data);
        }
      }, {
        key: "signUp",
        value: function signUp(data) {
          console.log('reached here register', data);
          return this.http.post(this.url + 'api/customer/', data);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (min-width: 767px) {\n  ion-card {\n    width: 600px;\n    margin: auto;\n  }\n}\n\nion-card {\n  --background: #fff;\n  box-shadow: none;\n  -webkit-box-shadow: none;\n  overflow: scroll;\n}\n\n.input {\n  background-color: #f0f0f0;\n  border: 1px solid #d2d2d2;\n  border-radius: 9px;\n  font-size: 0.9em !important;\n}\n\n.otpinput {\n  letter-spacing: 30px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.white {\n  color: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n\n.small {\n  font-size: 13px;\n}\n\n.small a {\n  text-decoration: unset !important;\n}\n\n.button-color {\n  background-color: var(--ion-color-mytheme);\n}\n\n.logo {\n  width: 1.25em !important;\n}\n\n.grid {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.img-logo {\n  height: 120px;\n  width: 120px;\n}\n\n.fire-logo {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 30px;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.block {\n  display: block;\n}\n\n.transition {\n  background: linear-gradient(to right, #F21F80 14%, #fa7fb8 96%);\n}\n\n.btn-color {\n  color: #ffa000;\n}\n\n.error {\n  color: red;\n  text-align: center;\n  display: block;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGlzaC9QdWJsaWMvd29yay9mZW1pa2FyZUFwcC9mZW1pa2FyZS9zcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQ0VKO0FBQ0Y7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNHSjs7QURERTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGRTtFQUNFLFlBQUE7QUNLSjs7QURETTtFQUNFLHdCQUFBO0FDSVI7O0FEQ0U7RUFDRSxlQUFBO0FDRUo7O0FEREk7RUFDRSxpQ0FBQTtBQ0dOOztBREFFO0VBQ0UsMENBQUE7QUNHSjs7QURERTtFQUNFLHdCQUFBO0FDSUo7O0FERkU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ09KOztBRExFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDUUo7O0FETkU7RUFDRSxpQkFBQTtBQ1NKOztBRFBFO0VBQ0UsY0FBQTtBQ1VKOztBRFJFO0VBQ0UsK0RBQUE7QUNXSjs7QURURTtFQUNFLGNBQUE7QUNZSjs7QURWRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICB3aWR0aDogNjAwcHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG4gIGlvbi1jYXJkIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuICAuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEwLCAyMTAsIDIxMCk7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbiAgfVxuICAub3RwaW5wdXQge1xuICAgIGxldHRlci1zcGFjaW5nOiAzMHB4O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC53aGl0ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5PVFAtYm9yZGVyIHtcbiAgICBpb24tY29sIHtcbiAgICAgIGRpdiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuYnV0dG9uLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG4gIH1cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxLjI1ZW0gIWltcG9ydGFudDtcbiAgfVxuICAuZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5pbWctbG9nbyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbiAgLmZpcmUtbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5ibG9jayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnRyYW5zaXRpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyMUY4MCAxNCUsICNmYTdmYjggOTYlKTtcbiAgfVxuICAuYnRuLWNvbG9yIHtcbiAgICBjb2xvcjogI2ZmYTAwMDtcbiAgfVxuICAuZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICIsIi5tYWluIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcbn1cblxuLm90cGlucHV0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDMwcHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLndoaXRlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uT1RQLWJvcmRlciBpb24tY29sIGRpdiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNtYWxsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbXl0aGVtZSk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEuMjVlbSAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctbG9nbyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmZpcmUtbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50cmFuc2l0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjIxRjgwIDE0JSwgI2ZhN2ZiOCA5NiUpO1xufVxuXG4uYnRuLWNvbG9yIHtcbiAgY29sb3I6ICNmZmEwMDA7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(toastCtrl, router, service) {
        _classCallCheck(this, SignupPage);

        this.toastCtrl = toastCtrl;
        this.router = router;
        this.service = service;
        this.OTP = '';
        this.showOTPInput = false;
        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentToast",
        value: function presentToast(message, show_button, position, duration) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      // showCloseButton: show_button,
                      position: position,
                      duration: duration
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "next",
        value: function next() {
          this.showOTPInput = true;
          var request1 = {
            mobile_no: this.mobile.toString(),
            name: this.email
          };
          console.log('user register', request1);
          this.service.signUp(request1).subscribe(function (res) {
            console.log('res', res);
          }, function (error) {
            console.log('error', error);
          });
          var request = {
            mobile_no: this.mobile.toString()
          };
          console.log('user data', request);
          this.service.otp(request).subscribe(function (res) {
            console.log('res', res);
          }, function (error) {
            console.log('error', error);
          });
          this.start();
        }
      }, {
        key: "start",
        value: function start() {
          var _this = this;

          SMSReceive.startWatch(function () {
            console.log('watch started');
            document.addEventListener('onSMSArrive', function (e) {
              console.log('onSMSArrive()');
              var IncomingSMS = e.data;
              console.log('sms.address:' + IncomingSMS.address);
              console.log('sms.body:' + IncomingSMS.body);
              /* Debug received SMS content (JSON) */

              console.log(JSON.stringify(IncomingSMS));

              _this.processSMS(IncomingSMS);
            });
          }, function () {
            console.log('watch start failed');
          });
        }
      }, {
        key: "stop",
        value: function stop() {
          SMSReceive.stopWatch(function () {
            console.log('watch stopped');
          }, function () {
            console.log('watch stop failed');
          });
        }
      }, {
        key: "processSMS",
        value: function processSMS(data) {
          // Check SMS for a specific string sequence to identify it is you SMS
          // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
          // In this case, I am keeping the first 6 letters as OTP
          var message = data.body;

          if (message && message.indexOf('enappd_starters') != -1) {
            this.OTP = data.body.slice(0, 6);
            console.log(this.OTP);
            this.OTPmessage = 'OTP received. Proceed to register';
            this.stop();
          }
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigate(['home']);

          if (this.OTP != '') {
            this.presentToast('You are successfully registered', false, 'top', 1500);
          } else {
            this.presentToast('Your OTP is not valid', false, 'bottom', 1500);
          }
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map