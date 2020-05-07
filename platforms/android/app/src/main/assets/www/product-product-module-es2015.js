(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>product</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div style=\"text-align: center;\">\n  <p style=\"color: #F21F80;font-weight: 500;margin-top: 2%;\">\n    Please Select Your Desired Product\n  </p>\n</div>\n<div>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card style=\"text-align: center;\">\n              <img style=\"width: 50%;\" src=\"assets/icon/demo.jpg\"/>\n            <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n            <ion-card-title>Whisper XL</ion-card-title>\n        \n          <ion-card-content>\n            Keep close to Nature's heart\n                    </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card style=\"text-align: center;\">\n            <img style=\"width: 50%;\" src=\"assets/icon/demo.jpg\"/>\n            <!-- <ion-card-subtitle>Card Subtitle</ion-card-subtitle> -->\n            <ion-card-title>Whisper XL</ion-card-title>\n        \n          <ion-card-content>\n            Keep close to Nature's heart\n           \n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n            <ion-card-title>Card Title</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            Keep close to Nature's heart\n          </ion-card-content>\n        </ion-card>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function() { return ProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })
], ProductPageModule);



/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  /* font-family: 'Fjalla One', sans-serif;\n  font-family: 'Noto Sans', sans-serif; */\n  /* padding: 20px; */\n  /* font-family: book-antiqua; */\n}\n\na {\n  text-decoration: none;\n}\n\n.product-section {\n  height: 170px;\n  margin-top: 25px;\n  /* margin-left: 40px; */\n  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 0.75);\n}\n\n.product-section1 {\n  height: 170px;\n  margin-top: 25px;\n  box-shadow: 2px 2px 8px -3px rgba(0, 0, 0, 0.75);\n}\n\n.product {\n  height: 120px;\n  width: 150px;\n  border-radius: 3px;\n  margin-top: 15px;\n}\n\n.product-name {\n  font-family: book-antiqua;\n  font-size: 22px;\n}\n\n.price {\n  margin-top: 25px;\n  font-family: book-antiqua;\n  font-size: 21px;\n}\n\n.slots {\n  font-family: book-antiqua;\n  font-size: 23px;\n  font-weight: bolder;\n  color: #FF0080;\n}\n\n.qty {\n  font-family: book-antiqua;\n  font-size: 20px;\n}\n\n.img-fiture {\n  /* margin-top: 20px;  */\n  font-size: 18px;\n  line-height: 15px;\n  font-family: \"Noto Sans\", sans-serif;\n  font-weight: bold;\n}\n\n.inactive p {\n  color: gray;\n  opacity: 0.5;\n}\n\n.inactive img {\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n  opacity: 0.5;\n}\n\n.productContainer {\n  padding: 30px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzaGlzaC9QdWJsaWMvd29yay9mZW1pa2FyZUFwcC9mZW1pa2FyZS9zcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQzt5Q0FBQTtFQUVBLG1CQUFBO0VBQ0EsK0JBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0FDRUQ7O0FESUE7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUdHLGdEQUFBO0FDREo7O0FER0E7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFJRyxnREFBQTtBQ0RKOztBRElBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREQ7O0FESUE7RUFDQyx5QkFBQTtFQUNBLGVBQUE7QUNERDs7QURJQTtFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDREQ7O0FER0E7RUFDQyx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBRDs7QURFQTtFQUNDLHlCQUFBO0VBQ0EsZUFBQTtBQ0NEOztBRENBO0VBRUMsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBQ0MsK0JBQUE7RUFBaUMscUJBQUE7RUFDaEMsdUJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEQ0E7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0LyogZm9udC1mYW1pbHk6ICdGamFsbGEgT25lJywgc2Fucy1zZXJpZjtcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmOyAqL1xuXHQvKiBwYWRkaW5nOiAyMHB4OyAqL1xuXHQvKiBmb250LWZhbWlseTogYm9vay1hbnRpcXVhOyAqL1xufVxuYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm1haW4tYm9keXtcblx0Ly8gcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLnByb2R1Y3Qtc2VjdGlvbntcblx0aGVpZ2h0OiAxNzBweDtcblx0bWFyZ2luLXRvcDogMjVweDtcblx0LyogbWFyZ2luLWxlZnQ6IDQwcHg7ICovXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA4cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcbn1cbi5wcm9kdWN0LXNlY3Rpb24xe1xuXHRoZWlnaHQ6IDE3MHB4O1xuXHRtYXJnaW4tdG9wOiAyNXB4O1xuXHQvLyBtYXJnaW4tbGVmdDogODBweDtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xufVxuXG4ucHJvZHVjdCB7XG5cdGhlaWdodDogMTIwcHg7XG5cdHdpZHRoOiAxNTBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xuXG59XG4ucHJvZHVjdC1uYW1le1xuXHRmb250LWZhbWlseTogYm9vay1hbnRpcXVhO1xuXHRmb250LXNpemU6IDIycHg7XG59XG5cbi5wcmljZXtcblx0bWFyZ2luLXRvcDogMjVweDtcblx0Zm9udC1mYW1pbHk6IGJvb2stYW50aXF1YTtcblx0Zm9udC1zaXplOiAyMXB4O1xufVxuLnNsb3Rze1xuXHRmb250LWZhbWlseTogYm9vay1hbnRpcXVhO1xuXHRmb250LXNpemU6IDIzcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG5cdGNvbG9yOiAjRkYwMDgwO1xufVxuLnF0eXtcblx0Zm9udC1mYW1pbHk6IGJvb2stYW50aXF1YTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuLmltZy1maXR1cmUge1xuXHQvLyBtYXJnaW4tbGVmdDogMTEwcHg7IFxuXHQvKiBtYXJnaW4tdG9wOiAyMHB4OyAgKi9cblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMTVweDtcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluYWN0aXZlIHB7XG5cdGNvbG9yOmdyYXk7XG5cdG9wYWNpdHk6MC41O1xufVxuLmluYWN0aXZlIGltZ3tcblx0LXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgb3BhY2l0eTowLjU7XG59XG5cblxuLnByb2R1Y3RDb250YWluZXJ7XG5cdHBhZGRpbmc6IDMwcHg7XG5cdGhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiBcblx0XG4gfVxuIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiIsImJvZHkge1xuICAvKiBmb250LWZhbWlseTogJ0ZqYWxsYSBPbmUnLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7ICovXG4gIC8qIHBhZGRpbmc6IDIwcHg7ICovXG4gIC8qIGZvbnQtZmFtaWx5OiBib29rLWFudGlxdWE7ICovXG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcm9kdWN0LXNlY3Rpb24ge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICAvKiBtYXJnaW4tbGVmdDogNDBweDsgKi9cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wcm9kdWN0LXNlY3Rpb24xIHtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5wcm9kdWN0IHtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICBmb250LWZhbWlseTogYm9vay1hbnRpcXVhO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBib29rLWFudGlxdWE7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLnNsb3RzIHtcbiAgZm9udC1mYW1pbHk6IGJvb2stYW50aXF1YTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI0ZGMDA4MDtcbn1cblxuLnF0eSB7XG4gIGZvbnQtZmFtaWx5OiBib29rLWFudGlxdWE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmltZy1maXR1cmUge1xuICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAgKi9cbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5hY3RpdmUgcCB7XG4gIGNvbG9yOiBncmF5O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbmFjdGl2ZSBpbWcge1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAvKiBTYWZhcmkgNi4wIC0gOS4wICovXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5wcm9kdWN0Q29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductPage = class ProductPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductPage);



/***/ })

}]);
//# sourceMappingURL=product-product-module-es2015.js.map