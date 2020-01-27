(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-course-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/course/course.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/course/course.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>คอร์สเรียน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar mode=\"ios\" (ionChange)=\"onChange($event)\" debounce=\"300\" animated></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let c of filteredCourse\" (click)=\"itemSelected(c)\">\n      <ion-label>\n        <ion-text color=\"primary\">\n          <h3>{{c.c_title}}</h3>\n        </ion-text>\n        <p>{{c.c_detail}}</p>\n      </ion-label>\n      <ion-badge color=\"danger\">{{c.c_view}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/course/course.module.ts":
/*!*****************************************!*\
  !*** ./src/app/course/course.module.ts ***!
  \*****************************************/
/*! exports provided: CoursePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePageModule", function() { return CoursePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course.page */ "./src/app/course/course.page.ts");







const routes = [
    {
        path: '',
        component: _course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]
    }
];
let CoursePageModule = class CoursePageModule {
};
CoursePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_course_page__WEBPACK_IMPORTED_MODULE_6__["CoursePage"]]
    })
], CoursePageModule);



/***/ }),

/***/ "./src/app/course/course.page.scss":
/*!*****************************************!*\
  !*** ./src/app/course/course.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/course/course.page.ts":
/*!***************************************!*\
  !*** ./src/app/course/course.page.ts ***!
  \***************************************/
/*! exports provided: CoursePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursePage", function() { return CoursePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course.service */ "./src/app/course.service.ts");



 // model
let CoursePage = class CoursePage {
    // (injection) declare service
    constructor(courseService, navController) {
        this.courseService = courseService;
        this.navController = navController;
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses() {
        // subscribe the data from service
        this.sub = this.courseService.getCourse().subscribe((courses) => {
            // retreive data from backend(courses array) then store it in 'courses' variable
            this.courses = courses;
            this.filteredCourse = courses;
        });
    }
    itemSelected(c) {
        this.navController.navigateForward(['/detail', {
                id: c.id,
                title: c.c_title
            }]);
    }
    onChange(e) {
        const { value } = e.target;
        const filter = value.trim();
        // lung Max's
        const matchesFilter = new RegExp(filter, 'i');
        this.filteredCourse = this.courses.filter((c) => matchesFilter.test(c.c_title));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
CoursePage.ctorParameters = () => [
    { type: _course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
CoursePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-course',
        template: __webpack_require__(/*! raw-loader!./course.page.html */ "./node_modules/raw-loader/index.js!./src/app/course/course.page.html"),
        styles: [__webpack_require__(/*! ./course.page.scss */ "./src/app/course/course.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], CoursePage);



/***/ })

}]);
//# sourceMappingURL=course-course-module-es2015.js.map