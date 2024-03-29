(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"bar-positive\">\n      Grocery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Defines a basic grocery sliding list -->\n\n<ion-content [fullscreen]=\"true\">\n  <div ionEvent=\"true\"></div>\n  <h3 class=\"no-item\" align-text= 'center' *ngIf=\"loadItems().length === 0\">\n    No item available on the list!\n  </h3>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of loadItems(); let i = index\">\n      <ion-item>\n        <ion-list lines=\"inset\">\n          <ion-label>{{item.name}}</ion-label>\n        </ion-list>\n\n        <ion-item>\n          \n            <p>{{item.quantity}}</p>\n          \n        </ion-item>\n        \n\n      </ion-item>\n      <ion-item-options>\n        <button (click)=\"editItem(item, i)\" ion-button class= \"editItem\"icon-start>\n          <ion-icon name=\"create\"></ion-icon>\n          Edit\n        </button>\n\n        <button (click)=\"shareItem(item, i)\" ion-button color=\"light\" icon-start>\n          <ion-icon name=\"share\"></ion-icon>\n          Share\n        </button>\n\n        <button (click)=\"removeItem(item, i)\" ion-button class=\"removeItem\" icon-start>\n          <ion-icon name=\"trash\"></ion-icon>\n          Done\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addItem()\" ion-fab mini>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/groceries-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/groceries-service.service.ts ***!
  \**********************************************/
/*! exports provided: GroceriesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesServiceService", function() { return GroceriesServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GroceriesServiceService = class GroceriesServiceService {
    constructor() {
        this.items = [];
        console.log('Hello GroceriesServiceProvider Provider');
    }
    getItems() {
        return this.items;
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    addItem(item) {
        this.items.push(item);
    }
    editItem(item, index) {
        this.items[index] = item;
    }
};
GroceriesServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroceriesServiceService);



/***/ }),

/***/ "./src/app/input-dialog-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/input-dialog-service.service.ts ***!
  \*************************************************/
/*! exports provided: InputDialogServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogServiceProvider", function() { return InputDialogServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groceries-service.service */ "./src/app/groceries-service.service.ts");




/*
  Generated class for the InputDialogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let InputDialogServiceProvider = class InputDialogServiceProvider {
    constructor(alertCtrl, dataService) {
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        console.log('Hello InputDialogServiceProvider Provider');
    }
    showPrompt(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: item ? 'Edit Item' : 'Add Item',
                message: item ? "Please edit item..." : "Please enter item...",
                inputs: [
                    {
                        name: 'name',
                        placeholder: 'Name',
                        value: item ? item.name : null
                    },
                    {
                        name: 'quantity',
                        placeholder: 'Quantity',
                        value: item ? item.quantity : null
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: item => {
                            console.log('Saved clicked', item);
                            if (index !== undefined) {
                                this.dataService.editItem(item, index);
                            }
                            else {
                                this.dataService.addItem(item);
                            }
                        }
                    }
                ]
            });
            prompt.present();
        });
    }
};
InputDialogServiceProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"] }
];
InputDialogServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], InputDialogServiceProvider);



/***/ }),

/***/ "./src/app/tab1/tab1-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/tab1/tab1-routing.module.ts");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input-dialog-service.service */ "./src/app/input-dialog-service.service.ts");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]],
        providers: [
            _groceries_service_service__WEBPACK_IMPORTED_MODULE_8__["GroceriesServiceService"],
            _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_9__["InputDialogServiceProvider"]
        ]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".editItem {\n  background-color: #2d918c;\n  color: blue;\n}\n\n.removeItem {\n  background-color: red;\n  color: blue;\n}\n\n.no-item {\n  color: #0f509b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9maWxtb25hcmF5YS9Eb2N1bWVudHMvd2Vla181L3dlZWstNS1pb25pYy1uYXRpdmUtRmlsYXJheWEvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmVkaXRJdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDUsIDE0NSwgMTQwKTtcbiAgICBjb2xvcjogYmx1ZVxufVxuLnJlbW92ZUl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogYmx1ZVxuXG59XG4ubm8taXRlbSB7XG4gICAgY29sb3I6IHJnYigxNSwgODAsIDE1NSk7XG59IiwiLmVkaXRJdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkOTE4YztcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5yZW1vdmVJdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLm5vLWl0ZW0ge1xuICBjb2xvcjogIzBmNTA5Yjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../groceries-service.service */ "./src/app/groceries-service.service.ts");
/* harmony import */ var _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-dialog-service.service */ "./src/app/input-dialog-service.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");








let Tab1Page = class Tab1Page {
    constructor(navCtrl, toastCtrl, alertCtrl, dataService, inputDialogService, SocialSharing) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.inputDialogService = inputDialogService;
        this.SocialSharing = SocialSharing;
        this.title = "Grocery";
        this.message = "Grocery Item - Name: " + 'item.name' + " - Quantity: " + 'item.quantity';
        this.subject = "Shared via Groceries app";
    }
    loadItems() {
        return this.dataService.getItems();
    }
    removeItem(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Removing Item - ", item, index);
            const toast = this.toastCtrl.create({
                message: 'Removing Item - ' + index + " ...",
                duration: 3000
            });
            (yield toast).present();
            this.dataService.removeItem(index);
        });
    }
    shareItem(item, index) {
        this.socialSharing.share(this.message, this.subject).then(() => {
            // Sharing via email is possible
            console.log("Shared successfully!");
        }).catch((error) => {
            console.error("Error while sharing ", error);
        });
    }
    // this.socialSharing.shareViaEmail(message, subject, ['recipient@example.org']).then((res) => {
    //   // Success
    // console.log("Shared successfully!");
    // }).catch((error: any) => {
    //   console.error("Error while sharing ", error);
    // });
    editItem(item, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Edit Item - ", item, index);
            const toast = this.toastCtrl.create({
                message: 'Editing Item - ' + index + " ...",
                duration: 3000
            });
            (yield toast).present();
            this.inputDialogService.showPrompt(item, index);
        });
    }
    addItem() {
        console.log("Adding Item");
        this.inputDialogService.showPrompt();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _groceries_service_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesServiceService"] },
    { type: _input_dialog_service_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogServiceProvider"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map