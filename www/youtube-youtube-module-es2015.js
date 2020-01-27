(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["youtube-youtube-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/youtube/youtube.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/youtube/youtube.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <iframe\n    [src]=\"safeUrl\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen\n  ></iframe>\n</ion-content>"

/***/ }),

/***/ "./src/app/youtube/youtube.module.ts":
/*!*******************************************!*\
  !*** ./src/app/youtube/youtube.module.ts ***!
  \*******************************************/
/*! exports provided: YoutubePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePageModule", function() { return YoutubePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _youtube_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtube.page */ "./src/app/youtube/youtube.page.ts");







const routes = [
    {
        path: '',
        component: _youtube_page__WEBPACK_IMPORTED_MODULE_6__["YoutubePage"]
    }
];
let YoutubePageModule = class YoutubePageModule {
};
YoutubePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_youtube_page__WEBPACK_IMPORTED_MODULE_6__["YoutubePage"]]
    })
], YoutubePageModule);



/***/ }),

/***/ "./src/app/youtube/youtube.page.scss":
/*!*******************************************!*\
  !*** ./src/app/youtube/youtube.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXR1YmUveW91dHViZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/youtube/youtube.page.ts":
/*!*****************************************!*\
  !*** ./src/app/youtube/youtube.page.ts ***!
  \*****************************************/
/*! exports provided: YoutubePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePage", function() { return YoutubePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let YoutubePage = class YoutubePage {
    constructor(route, sanitizer) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.url = this.route.snapshot.paramMap.get('url');
        this.title = this.route.snapshot.paramMap.get('title');
    }
    ngOnInit() {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.url}`);
    }
};
YoutubePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
YoutubePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-youtube',
        template: __webpack_require__(/*! raw-loader!./youtube.page.html */ "./node_modules/raw-loader/index.js!./src/app/youtube/youtube.page.html"),
        styles: [__webpack_require__(/*! ./youtube.page.scss */ "./src/app/youtube/youtube.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], YoutubePage);



/***/ })

}]);
//# sourceMappingURL=youtube-youtube-module-es2015.js.map