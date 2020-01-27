(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Customer\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"primary\" (click)=\"openForm()\">\n        <ion-icon slot=\"icon-only\" slot=\"end\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- novalidate is used with \"ngForm\", myForm is an id -->\n  <form novalidate #myForm=\"ngForm\">\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\">FullName</ion-label>\n        <ion-input ngModel type=\"text\" name=\"fullname\" #fullname=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-text color=\"danger\" *ngIf=\"fullname.invalid && (phone.dirty || phone.touched)\">\n        please input fullname\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"floating\">Phone</ion-label>\n        <ion-input ngModel type=\"text\" name=\"phone\" #phone=\"ngModel\" required></ion-input>\n      </ion-item>\n      <ion-text color=\"danger\" *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\">\n        please input phone number\n      </ion-text>\n\n      <ion-button (click)=\"add(myForm.value)\" class=\"ion-margin-top\" [disabled]=\"myForm.invalid\" size=\"large\"\n        expand=\"full\">\n        Save Data\n      </ion-button>\n\n    </ion-list>\n  </form>\n\n  <ion-list *ngIf=\"customers\">\n    <ion-item-sliding *ngFor=\"let item of customers\">\n      <ion-item>\n        <ion-label>\n          <ion-text color=\"primary\">\n            <h1>{{item.fullname}}</h1>\n          </ion-text>\n          <p>{{item.phone}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");







var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var dataDB = {
    name: 'data.db',
    location: 'default'
};
var CustomerPage = /** @class */ (function () {
    function CustomerPage(
    // private sqlite: SQLite,
    platform, toastCtrl) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
    }
    CustomerPage.prototype.ngOnInit = function () {
        this.isToggle = false;
        // this.platform.ready().then(() => {
        //   // create a db
        //   this.sqlite.create(dataDB).then((db: SQLiteObject) => {
        //     db.executeSql('CREATE TABLE IF NOT EXISTS Customers(id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, phone TEXT)')
        //       .then(() => console.log('Executed SQL'))
        //       .catch(e => console.log(e));
        //   }).catch(e => console.log(e));
        // });
        // this.showData();
    };
    // show data from Customers table, sort by id
    // and store the data in this.customers
    // showData() {
    //   this.sqlite.create(dataDB).then((db: SQLiteObject) => {
    //     db.executeSql('SELECT * FROM Customers ORDER BY id DESC')
    //       .then((data) => {
    //         this.customers = [];
    //         const { rows } = data;
    //         if (rows) {
    //           rows.forEach(d => {
    //             this.customers.push(d);
    //           });
    //         }
    //       })
    //       .catch(e => console.log(e));
    //   });
    // }
    // add(form: any) {
    //   this.sqlite.create(dataDB).then((db: SQLiteObject) => {
    //     db.executeSql('INSERT INTO Customers(fullname, phone) VALUES(?,?)', [form.fullname, form.phone])
    //       .then(async (data) => {
    //         const toast = await this.toastCtrl.create({
    //           message: 'Data inserted.',
    //           duration: 3000
    //         });
    //         toast.present();
    //         this.showData();
    //         this.isToggle = false;
    //       })
    //       .catch(e => console.log(e));
    //   })
    //     .catch();
    // }
    CustomerPage.prototype.openForm = function () {
        this.isToggle = !this.isToggle;
    };
    CustomerPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es5.js.map