(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-note-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/note/note.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/note/note.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Note (real time DB)</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"{{isAdd ? 'primary' : 'body'}}\" (click)=\"openForm()\">\n        <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form novalidate #note=\"ngForm\" *ngIf=\"isToggle\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Topic</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"topic\" name=\"topic\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Due Date</ion-label>\n        <ion-datetime [(ngModel)]=\"dueDate\" type=\"text\" name=\"dueDate\" displayFormat=\"DD MMM YYYY\"></ion-datetime>\n      </ion-item>\n\n      <div class=\"ion-padding\">\n        <ion-button color=\"{{isAdd ? 'primary' : 'warning'}}\" (click)=\"save(note.value)\" [disabled]=\"!note.form.valid\"\n          class=\"ion-margin-top\">\n          {{isAdd ? 'Add Data' : 'Edit'}}\n        </ion-button>\n      </div>\n    </ion-list>\n  </form>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of items | async\">\n      <ion-item (click)=\"select(item)\">\n        <ion-label>\n          <ion-text color=\"primary\">\n            <h1>{{item.note.topic}}</h1>\n          </ion-text>\n          <p>{{item.note.dueDate | date: 'dd MMMM yyyy'}}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options>\n        <ion-item-option color=\"danger\" (click)=\"delete(item)\">\n          <ion-icon slot=\"end\" name=\"trash\"></ion-icon>\n          Del\n        </ion-item-option>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/note/note.module.ts":
/*!*************************************!*\
  !*** ./src/app/note/note.module.ts ***!
  \*************************************/
/*! exports provided: NotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePageModule", function() { return NotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note.page */ "./src/app/note/note.page.ts");







var routes = [
    {
        path: '',
        component: _note_page__WEBPACK_IMPORTED_MODULE_6__["NotePage"]
    }
];
var NotePageModule = /** @class */ (function () {
    function NotePageModule() {
    }
    NotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_note_page__WEBPACK_IMPORTED_MODULE_6__["NotePage"]]
        })
    ], NotePageModule);
    return NotePageModule;
}());



/***/ }),

/***/ "./src/app/note/note.page.scss":
/*!*************************************!*\
  !*** ./src/app/note/note.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGUvbm90ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/note/note.page.ts":
/*!***********************************!*\
  !*** ./src/app/note/note.page.ts ***!
  \***********************************/
/*! exports provided: NotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePage", function() { return NotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var NotePage = /** @class */ (function () {
    function NotePage(db) {
        this.db = db;
    }
    NotePage.prototype.ngOnInit = function () {
        this.topic = '';
        this.isToggle = false;
        this.isAdd = false;
        this.dueDate = new Date().toString();
        this.showData();
    };
    NotePage.prototype.showData = function () {
        this.itemsRef = this.db.list('/');
        this.items = this.itemsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    // save or edit data
    NotePage.prototype.save = function (note) {
        if (this.isAdd) {
            this.itemsRef.push({ note: note });
        }
        else if (this.key) {
            this.itemsRef.update(this.key, { note: note });
        }
        this.isToggle = false;
        this.isAdd = false;
    };
    NotePage.prototype.openForm = function () {
        this.isToggle = this.isAdd ? !this.isToggle : true;
        this.isAdd = this.isToggle;
    };
    NotePage.prototype.select = function (item) {
        var note = item.note, key = item.key;
        var topic = note.topic, dueDate = note.dueDate;
        this.key = key;
        this.topic = topic;
        this.dueDate = dueDate;
        this.isToggle = true;
        this.isAdd = false;
    };
    NotePage.prototype.delete = function (item) {
        var key = item.key;
        this.itemsRef.remove(key);
        this.isToggle = false;
        this.isAdd = false;
    };
    NotePage.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    NotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! raw-loader!./note.page.html */ "./node_modules/raw-loader/index.js!./src/app/note/note.page.html"),
            styles: [__webpack_require__(/*! ./note.page.scss */ "./src/app/note/note.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], NotePage);
    return NotePage;
}());



/***/ })

}]);
//# sourceMappingURL=note-note-module-es5.js.map