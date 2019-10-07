(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid px-0\">\r\n\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/add-modal/add-modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/add-modal/add-modal.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add New Product</h2>\n\n<form [formGroup]=\"addProductForm\" (ngSubmit)=\"save()\">\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"form-body\">\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Name</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"New Product Name\"\n               formControlName=\"name\"\n               required>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Category</mat-label>\n        <mat-select placeholder=\"Category\"\n                    formControlName=\"categoryId\">\n          <mat-option *ngFor=\"let item of data.categories | keyvalue\" [value]=\"data.categories[item.key]._id\">\n            {{data.categories[item.key].name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Price</mat-label>\n        <input class=\"form-input\" matInput type=\"number\" [min]='0'\n               formControlName=\"price\"\n               placeholder=\"New Product Price\"\n               required\n               (keydown)=\"allowNumberOnly($event)\"\n              >\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>ImageURL</mat-label>\n        <input class=\"form-input\" matInput\n               formControlName=\"imageURL\"\n        required>\n      </mat-form-field>\n\n    </div>\n  </mat-dialog-content>\n\n  <div class=\"form-footer\">\n    <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close >Cancel Edit</button>\n      <button mat-button type=\"submit\" [disabled]=\"addProductForm.invalid\">Save Changes</button>\n    </mat-dialog-actions>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/admin-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/admin-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\"></mat-progress-bar>\n<div *ngIf=\"!isLoading\" class=\"table-responsive\">\n  <button mat-button (click)=\"openAddDialog(categories)\">Add Product</button>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Price</th>\n      <th scope=\"col\">Category</th>\n      <th scope=\"col\">Actions</th>\n      <th scope=\"col\">Photo</th>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let product of products\">\n     <th scope=\"row\">{{ product._id }}</th>\n      <td>{{capFirstLetter(product.name)}}</td>\n        <td>{{product.price |currency:'USD'}}</td>\n        <td>{{categories[product.categoryId].name}}</td>\n        <td><button mat-button (click)=\"openeEditDialog(product,categories)\">Edit</button></td>\n      <td> <img src=\"{{product.imageURL}}\" alt=\"..\"></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/edit-modal/edit-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-page/edit-modal/edit-modal.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Edit Product</h2>\n<form [formGroup]=\"editProductForm\" (ngSubmit)=\"save(data.preEditFields._id)\">\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"form-body\">\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Name</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"{{capFirstLetter(data.preEditFields.name)}}\"\n               formControlName=\"name\"\n               [value]=\"data.preEditFields.name\"\n               required>\n\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Category</mat-label>\n        <mat-select placeholder=\"{{data.categories[data.preEditFields.categoryId].name}}\"\n                    formControlName=\"categoryId\">\n          <mat-option *ngFor=\"let item of data.categories | keyvalue\" [value]=\"data.categories[item.key]._id\">\n            {{data.categories[item.key].name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>Price</mat-label>\n        <input class=\"form-input\" matInput type=\"number\" [min]='0'\n               placeholder=\"{{data.preEditFields.price | currency:'USD'}}\"\n               formControlName=\"price\"\n               [value]=\"data.preEditFields.price\"\n               required\n               >\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\" class=\"justifier\">\n        <mat-label>ImageURL</mat-label>\n        <input class=\"form-input\" matInput\n               placeholder=\"{{data.preEditFields.imageURL}}\"\n               formControlName=\"imageURL\"\n               [value]=\"data.preEditFields.imageURL\"\n               required>\n      </mat-form-field>\n\n    </div>\n  </mat-dialog-content>\n\n  <div class=\"form-footer\">\n    <mat-dialog-actions align=\"end\">\n      <button mat-button mat-dialog-close>Cancel Edit</button>\n      <button mat-button type=\"submit\" [disabled]=\"editProductForm.invalid\">Save Changes</button>\n    </mat-dialog-actions>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<body>\r\n<div *ngIf=\"!isLoading\">\r\n\r\n&lt;!&ndash;set go the shop as ngIf cart is opened&ndash;&gt;\r\n<div>Welcome:\r\n  {{ capFirstLetter(authService.currentUserData.firstName)}} {{ capFirstLetter(authService.currentUserData.lastName)}}\r\n</div>\r\n<button mat-menu-item routerLink=\"/shop\">Shop</button>\r\n<h1>Num of products in the shop: {{numOfProducts}}</h1>\r\n  <div>{{dashBoarMsg}}</div>\r\n<div>{{cartStatus}}</div>\r\n</div>\r\n</body>-->\r\n\r\n\r\n\r\n<head>\r\n  <title>Slim - Free Bootstrap 4 Template by Colorlib</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <link href=\"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900\" rel=\"stylesheet\">\r\n\r\n  <!--  <link rel=\"stylesheet\" href=\"../../assets/open-iconic-bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/animate.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/owl.carousel.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/owl.theme.default.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/magnific-popup.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/aos.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/ionicons.min.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/flaticon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/icomoon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/astyle.css\">-->\r\n\r\n\r\n</head>\r\n<body data-spy=\"scroll\" data-target=\".site-navbar-target\" data-offset=\"300\">\r\n\r\n\r\n<section class=\"ftco-section ftco-services-2\" id=\"services-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center ftco-animate\">\r\n\r\n        <div>Welcome {{ capFirstLetter(authService.currentUserData.firstName)}} {{ capFirstLetter(authService.currentUserData.lastName)}}\r\n        </div>\r\n\r\n        <div>{{dashBoardMsg}}</div>\r\n        <div>{{cartStatus}}</div>\r\n\r\n\r\n      </div><button mat-button color=\"primary\" *ngIf=\"authService.isLoggedUser()\" routerLink=\"/shop\">Continue Shopping</button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\"><div style=\"float:left;margin-left: 10px;\" [countUp]=100></div><div style=\"float: left\">%</div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/291/291893.svg\"></div>\r\n\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Groceries From The Heart</h3>\r\n            <p>All our groceries are selected one by one by our professional picker. That promises the best quality\r\n              of products you can find on the market.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\">\r\n          <div style=\"float:left;margin-left: 26px;\" [countUp]=numOfProducts></div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/172/172159.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Products Available On Our Shop</h3>\r\n            <p>Variety is our middle name. Our wide network of supplier and short chain of supply assures you get a\r\n              variety of products under each\r\n              category. You only have to choose.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\">\r\n          <div style=\"float:left;margin-left: -19px\"><span [countUp]=24></span>/<span [countUp]=7></span>/<span [countUp]=365></span></div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/1411/1411456.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">We Are Here <br> For You</h3>\r\n            <p>Anytime, Anywhere. World wide deliveries with just a click of a button. The best technology is at our\r\n              service.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\"><div style=\"float:left;margin-left:16px\" [countUp]=numOfOrders></div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/2155/2155671.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Happy Orders Were Delivered On Our Shop</h3>\r\n            <p>We value you time and money. Our grocery shop offers the best value for your money at any time.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"container-fluid\">\r\n  <div class=\"row no-gutter\">\r\n    <div class=\"d-none d-md-flex col-md-4 col-lg-6 bg-image\"></div>\r\n    <div class=\"col-md-8 col-lg-6\">\r\n      <div class=\"login d-flex align-items-center\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9 col-lg-8 mx-auto\">\r\n              <div class=\"home-header\">\r\n                <div class=\"home-components\">\r\n                  <h3 class=\"login-heading mb-4\">Welcome!</h3>\r\n                <h1>Our Grocery Shop</h1>\r\n                <button mat-button *ngIf=\"authService.isLoggedUser()\" routerLink=\"shop\">Continue Shopping</button>\r\n                <h1>num of products in the shop:<div [countUp]=numOfProducts></div></h1><br/>\r\n                <h1>num of orders in the shop: <div [countUp]=numOfOrders></div></h1>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n-->\r\n\r\n<head>\r\n  <title>Slim - Free Bootstrap 4 Template by Colorlib</title>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n  <link href=\"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900\" rel=\"stylesheet\">\r\n\r\n  <!--  <link rel=\"stylesheet\" href=\"../../assets/open-iconic-bootstrap.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/animate.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/owl.carousel.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/owl.theme.default.min.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/magnific-popup.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/aos.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/ionicons.min.css\">\r\n\r\n    <link rel=\"stylesheet\" href=\"../../assets/flaticon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/icomoon.css\">\r\n    <link rel=\"stylesheet\" href=\"../../assets/astyle.css\">-->\r\n\r\n\r\n</head>\r\n<body data-spy=\"scroll\" data-target=\".site-navbar-target\" data-offset=\"300\">\r\n\r\n\r\n<section class=\"ftco-section ftco-services-2\" id=\"services-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-12 heading-section text-center ftco-animate\">\r\n        <span class=\"subheading\">Fresh, Clear &amp; Clean</span>\r\n        <h2 class=\"mb-4\">Welcome to Our Grocery Shop</h2>\r\n        <p>One Stop One Shop For All Your Groceries Needs</p>\r\n      </div><button mat-button color=\"primary\" *ngIf=\"authService.isLoggedUser()\" routerLink=\"shop\">Continue Shopping</button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\"><div style=\"float:left;margin-left: 10px;\" [countUp]=100></div><div style=\"float: left\">%</div>\r\n          <div class=\"icon\"><img src=\"https://image.flaticon.com/icons/svg/291/291893.svg\"></div>\r\n\r\n\r\n\r\n\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Groceries From The Heart</h3>\r\n            <p>All our groceries are selected one by one by our professional picker. That promises the best quality\r\n              of products you can find on the market.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\">\r\n          <div style=\"float:left;margin-left: 26px;\" [countUp]=numOfProducts></div>\r\n          <div class=\"icon\"><img src=\"https://image.flaticon.com/icons/svg/172/172159.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Products Available On Our Shop</h3>\r\n            <p>Variety is our middle name. Our wide network of supplier and short chain of supply assures you get a\r\n              variety of products under each\r\n              category. You only have to choose.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\">\r\n          <div style=\"float:left;margin-left: -19px\"><span [countUp]=24></span>/<span [countUp]=7></span>/<span [countUp]=365></span></div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/1411/1411456.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">We Are Here <br> For You</h3>\r\n            <p>Anytime, Anywhere. World wide deliveries with just a click of a button. The best technology is at our\r\n              service.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services text-center d-block\"><div style=\"float:left;margin-left:16px\" [countUp]=numOfOrders></div>\r\n          <div class=\"icon\"><img style=\"width:120px\" src=\"https://image.flaticon.com/icons/svg/2155/2155671.svg\"></div>\r\n          <div class=\"media-body\">\r\n            <h3 class=\"heading mb-3\">Happy Orders Were Delivered On Our Shop</h3>\r\n            <p>We value you time and money. Our grocery shop offers the best value for your money at any time.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n<section class=\"ftco-section testimony-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-3\">\r\n      <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n        <span class=\"subheading\">Read testimonials</span>\r\n        <h2 class=\"mb-4\">What Client Says</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row ftco-animate justify-content-center\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"carousel-testimony owl-carousel ftco-owl\">\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(images/trainer_1.jpg)\">\r\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                      <i class=\"icon-quote-left\"></i>\r\n                    </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(images/trainer_2.jpg)\">\r\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                      <i class=\"icon-quote-left\"></i>\r\n                    </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(images/trainer_3.jpg)\">\r\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                      <i class=\"icon-quote-left\"></i>\r\n                    </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(images/trainer-1.jpg)\">\r\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                      <i class=\"icon-quote-left\"></i>\r\n                    </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center py-4 pb-5\">\r\n              <div class=\"user-img\" style=\"background-image: url(images/trainer_3.jpg)\">\r\n                    <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                      <i class=\"icon-quote-left\"></i>\r\n                    </span>\r\n              </div>\r\n              <div class=\"text px-4 pb-5\">\r\n                <p class=\"mb-4\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n                <p class=\"name\">Jeff Freshman</p>\r\n                <span class=\"position\">Artist</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section\" id=\"coaches-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center pb-5\">\r\n      <div class=\"col-md-6 heading-section text-center ftco-animate\">\r\n        <span class=\"subheading\">Coaches</span>\r\n        <h2 class=\"mb-4\">Our Coaches</h2>\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-lg-3 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"img-wrap d-flex align-items-stretch\">\r\n            <div class=\"img align-self-stretch\" style=\"background-image: url(images/trainer-1.jpg);\"></div>\r\n          </div>\r\n          <div class=\"text d-flex align-items-center pt-3 text-center\">\r\n            <div>\r\n              <h3 class=\"mb-2\">Lloyd Wilson</h3>\r\n              <span class=\"position mb-4\">Owner/Head Coach</span>\r\n              <div class=\"faded\">\r\n                <ul class=\"ftco-social text-center\">\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-3 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"img-wrap d-flex align-items-stretch\">\r\n            <div class=\"img align-self-stretch\" style=\"background-image: url(images/trainer-2.jpg);\"></div>\r\n          </div>\r\n          <div class=\"text d-flex align-items-center pt-3 text-center\">\r\n            <div>\r\n              <h3 class=\"mb-2\">Rachel Parker</h3>\r\n              <span class=\"position mb-4\">Coach</span>\r\n              <div class=\"faded\">\r\n                <ul class=\"ftco-social text-center\">\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-3 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"img-wrap d-flex align-items-stretch\">\r\n            <div class=\"img align-self-stretch\" style=\"background-image: url(images/trainer-3.jpg);\"></div>\r\n          </div>\r\n          <div class=\"text d-flex align-items-center pt-3 text-center\">\r\n            <div>\r\n              <h3 class=\"mb-2\">Ian Smith</h3>\r\n              <span class=\"position mb-4\">Coach</span>\r\n              <div class=\"faded\">\r\n                <ul class=\"ftco-social text-center\">\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 col-lg-3 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"img-wrap d-flex align-items-stretch\">\r\n            <div class=\"img align-self-stretch\" style=\"background-image: url(images/trainer-4.jpg);\"></div>\r\n          </div>\r\n          <div class=\"text d-flex align-items-center pt-3 text-center\">\r\n            <div>\r\n              <h3 class=\"mb-2\">Alicia Henderson</h3>\r\n              <span class=\"position mb-4\">Coach</span>\r\n              <div class=\"faded\">\r\n                <ul class=\"ftco-social text-center\">\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-google-plus\"></span></a></li>\r\n                  <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>-->\r\n<!--\r\n\r\n<section class=\"ftco-section bg-light\" id=\"blog-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-5\">\r\n      <div class=\"col-md-7 heading-section text-center ftco-animate\">\r\n        <span class=\"subheading\">Blog</span>\r\n        <h2 class=\"mb-4\">Our Blog</h2>\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry justify-content-end\">\r\n          <a href=\"single.html\" class=\"block-20\" style=\"background-image: url('images/image_1.jpg');\">\r\n          </a>\r\n          <div class=\"text float-right d-block\">\r\n            <div class=\"d-flex align-items-center pt-2 mb-4 topp\">\r\n              <div class=\"one mr-2\">\r\n                <span class=\"day\">04</span>\r\n              </div>\r\n              <div class=\"two\">\r\n                <span class=\"yr\">2019</span>\r\n                <span class=\"mos\">april</span>\r\n              </div>\r\n            </div>\r\n            <h3 class=\"heading\"><a href=\"single.html\">Why Lead Generation is Key for Business Growth</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            <div class=\"d-flex align-items-center mt-4 meta\">\r\n              <p class=\"mb-0\"><a href=\"#\" class=\"btn btn-primary\">Read More <span class=\"ion-ios-arrow-round-forward\"></span></a></p>\r\n              <p class=\"ml-auto mb-0\">\r\n                <a href=\"#\" class=\"mr-2\">Admin</a>\r\n                <a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry justify-content-end\">\r\n          <a href=\"single.html\" class=\"block-20\" style=\"background-image: url('images/image_2.jpg');\">\r\n          </a>\r\n          <div class=\"text float-right d-block\">\r\n            <div class=\"d-flex align-items-center pt-2 mb-4 topp\">\r\n              <div class=\"one mr-2\">\r\n                <span class=\"day\">04</span>\r\n              </div>\r\n              <div class=\"two\">\r\n                <span class=\"yr\">2019</span>\r\n                <span class=\"mos\">april</span>\r\n              </div>\r\n            </div>\r\n            <h3 class=\"heading\"><a href=\"single.html\">Why Lead Generation is Key for Business Growth</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            <div class=\"d-flex align-items-center mt-4 meta\">\r\n              <p class=\"mb-0\"><a href=\"#\" class=\"btn btn-primary\">Read More <span class=\"ion-ios-arrow-round-forward\"></span></a></p>\r\n              <p class=\"ml-auto mb-0\">\r\n                <a href=\"#\" class=\"mr-2\">Admin</a>\r\n                <a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry\">\r\n          <a href=\"single.html\" class=\"block-20\" style=\"background-image: url('images/image_3.jpg');\">\r\n          </a>\r\n          <div class=\"text float-right d-block\">\r\n            <div class=\"d-flex align-items-center pt-2 mb-4 topp\">\r\n              <div class=\"one mr-2\">\r\n                <span class=\"day\">04</span>\r\n              </div>\r\n              <div class=\"two\">\r\n                <span class=\"yr\">2019</span>\r\n                <span class=\"mos\">april</span>\r\n              </div>\r\n            </div>\r\n            <h3 class=\"heading\"><a href=\"single.html\">Why Lead Generation is Key for Business Growth</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n            <div class=\"d-flex align-items-center mt-4 meta\">\r\n              <p class=\"mb-0\"><a href=\"#\" class=\"btn btn-primary\">Read More <span class=\"ion-ios-arrow-round-forward\"></span></a></p>\r\n              <p class=\"ml-auto mb-0\">\r\n                <a href=\"#\" class=\"mr-2\">Admin</a>\r\n                <a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n-->\r\n\r\n\r\n<!--\r\n\r\n&lt;!&ndash; loader &ndash;&gt;\r\n<div id=\"ftco-loader\" class=\"show fullscreen\"><svg class=\"circular\" width=\"48px\" height=\"48px\"><circle class=\"path-bg\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke=\"#eeeeee\"/><circle class=\"path\" cx=\"24\" cy=\"24\" r=\"22\" fill=\"none\" stroke-width=\"4\" stroke-miterlimit=\"10\" stroke=\"#F96D00\"/></svg></div>\r\n-->\r\n\r\n\r\n<!--<script src=\"js/jquery.min.js\"></script>\r\n<script src=\"js/jquery-migrate-3.0.1.min.js\"></script>\r\n<script src=\"js/popper.min.js\"></script>\r\n<script src=\"js/bootstrap.min.js\"></script>\r\n<script src=\"js/jquery.easing.1.3.js\"></script>\r\n<script src=\"js/jquery.waypoints.min.js\"></script>\r\n<script src=\"js/jquery.stellar.min.js\"></script>\r\n<script src=\"js/owl.carousel.min.js\"></script>\r\n<script src=\"js/jquery.magnific-popup.min.js\"></script>\r\n<script src=\"js/aos.js\"></script>\r\n<script src=\"js/jquery.animateNumber.min.js\"></script>\r\n<script src=\"js/scrollax.min.js\"></script>\r\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false\"></script>\r\n<script src=\"js/google-map.js\"></script>\r\n\r\n<script src=\"js/main.js\"></script>-->\r\n\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/invoice/invoice.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/invoice/invoice.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"captureScreen()\">PDF</button>\r\n<div *ngIf=\"!isLoading\">\r\n  <div class=\"container\" id=\"contentToConvert\">\r\n    <div class=\"row\">\r\n\r\n\r\n      <div class=\"receipt-main col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3\">\r\n        <div class=\"row\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"receipt-header receipt-header-mid\">\r\n            <div class=\"col-xs-8 col-sm-8 col-md-8 text-left\">\r\n              <div class=\"receipt-right\">\r\n                <h2>eShop</h2>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-4 col-sm-4 col-md-4\">\r\n              <div class=\"receipt-left\">\r\n                <h3>Receipt</h3>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n            <tr>\r\n              <th class=\"col-md-9\">Description</th>\r\n              <th class=\"col-md-9\">Unit</th>\r\n              <th>Quantity</th>\r\n              <th>Price</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let invoice of currentCartProducts\">\r\n              <td class=\"col-md-9\">{{capFirstLetter(productsForCart[invoice._id].name)}}</td>\r\n              <td class=\"col-md-9\">{{(productsForCart[invoice._id].price) | currency: 'USD'}}</td>\r\n              <td class=\"col-md-6\"><i class=\"fa fa-inr\"></i>{{invoice.quantity}}</td>\r\n              <td class=\"col-md-6\"><i\r\n                class=\"fa fa-inr\"></i>{{productsForCart[invoice._id].price * invoice.quantity | currency: 'USD' }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-left\">\r\n                <p><strong>Sum of Quantity:</strong></p>\r\n              </td>\r\n              <td></td>\r\n              <td><p><strong>{{totalCartProductsQuantity}}</strong></p></td>\r\n              <td></td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-left\" colspan=\"3\"><p>TAX %</p>\r\n                <p>Price before tax</p>\r\n                <p>Tax</p>\r\n              </td>\r\n\r\n              <td class=\"text-left\" colspan=\"3\"><p>17%</p>\r\n                <p>{{totalPrice * 0.83 | currency: 'USD' }}</p>\r\n                <p>{{totalPrice * 0.17 | currency: 'USD' }}</p>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"text-left\" colspan=\"3\"><h2><strong>Total: </strong></h2></td>\r\n              <td class=\"text-left text-danger\"><h2><strong><i class=\"fa fa-inr\"></i> {{ totalPrice | currency: 'USD' }}\r\n              </strong></h2></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"receipt-header receipt-header-mid receipt-footer\">\r\n            <div class=\"col-xs-8 col-sm-8 col-md-8 text-left\">\r\n              <div class=\"receipt-right\">\r\n                <p><b>Order date: {{oderDate}}</b></p>\r\n                <p><b>Delivery date: {{deliveryDate}}</b></p>\r\n                <h5 style=\"color: rgb(140, 140, 140);\">Thank you for your business!</h5>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-4 col-sm-4 col-md-4\">\r\n              <div class=\"receipt-left\">\r\n                <h1>Signature</h1>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"blue\">\r\n   <mat-toolbar-row>\r\n     <button mat-button routerLink=\"\"><i class=\"material-icons\">home</i>Home</button>\r\n     <div fxFlex fxLayout fxLayoutAlign=\"end\"></div>\r\n     <span class=\"example\" fill-remaining-space></span>\r\n     <span class=\"align-center\"></span>\r\n     <span class=\"example-spacer\"></span>\r\n      <!-- <button *ngIf=\"authService.isLoggedUser()\" routerLink=\"dashboard\" mat-button>Dashboard</button>-->\r\n       <button *ngIf=\"!authService.isLoggedUser()\" routerLink=\"signup\" mat-button>\r\n         <i class=\"material-icons\">subject</i>\r\n         Signup</button>\r\n       <button *ngIf=\"!authService.isLoggedUser()\" routerLink=\"login\" mat-button>\r\n         <i class=\"material-icons\">input</i>\r\n         Login</button>\r\n     <button mat-button *ngIf=\"authService.isLoggedUser()\" [matMenuTriggerFor]=\"menu\">\r\n       <mat-icon>account_circle</mat-icon>\r\n       {{ capFirstLetter(authService.currentUserData.firstName)}} {{ capFirstLetter(authService.currentUserData.lastName)}}\r\n     </button>\r\n     <mat-menu #menu='matMenu'>\r\n       <button mat-menu-item routerLink=\"dashboard\">Dashboard</button>\r\n       <button mat-menu-item routerLink=\"shop\">Shop</button>\r\n       <button mat-menu-item (click)=\"onLogOutClick()\">Logout</button>\r\n     </mat-menu>\r\n      <!--<button *ngIf=\"authService.isLoggedUser()\" mat-button (click)=\"onLogOutClick()\">Log out</button>-->\r\n   </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <h1>Page Not Found 404</h1>\n    <button mat-button routerLink=\"\">Back to main page</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\r\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\r\n  <mat-drawer-content>\r\n    <mat-form-field>\r\n      <mat-label>Sidenav mode</mat-label>\r\n      <mat-select #mode value=\"side\">\r\n        <mat-option value=\"side\">Side</mat-option>\r\n        <mat-option value=\"over\">Over</mat-option>\r\n        <mat-option value=\"push\">Push</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <mat-label>Has backdrop</mat-label>\r\n      <mat-select #hasBackdrop>\r\n        <mat-option>Unset</mat-option>\r\n        <mat-option [value]=\"true\">True</mat-option>\r\n        <mat-option [value]=\"false\">False</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\">\r\n<form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"onUserLogin()\">\r\n  <div>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Your Email\" formControlName=\"email\">\r\n    <mat-error *ngIf=\"loginForm.get('email').errors?.serverError\">\r\n      {{ loginForm.get('email').errors?.serverError}}\r\n    </mat-error>\r\n  </mat-form-field>\r\n </div>\r\n  <div>\r\n  <mat-form-field>\r\n    <input type=\"password\" matInput placeholder=\"Your Password\" formControlName=\"password\">\r\n    <mat-error *ngIf=\"loginForm.get('password').errors?.serverError\">\r\n      {{ loginForm.get('password').errors?.serverError}}\r\n    </mat-error>\r\n  </mat-form-field>\r\n    <div>\r\n    <button mat-button type=\"submit\">Next</button>\r\n  </div>\r\n    </div>\r\n</form>\r\n  </div>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/order/order.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/order/order.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n\n<button mat-button routerLink=\"/shop\">Back To the Shop</button>\n\n<div *ngIf=\"totalPrice > 0\">\n<form>\n <input autocomplete=\"off\" type=\"search\" name=\"searchValue\" placeholder=\"Search\"\n        [(ngModel)]=\"searchValue\">\n</form>\n\n\n\n<div name=\"searchText\" *ngIf=\"!isLoading\">\n\n  <div class=\"row carts-products\" *ngFor=\"let cartProduct of currentCartProducts\">\n    <div>{{productsForCart[cartProduct._id].name}} in the cart: {{totalCartProductsQuantity}}</div>\n    <div class=\"col-md-5 to-left cartItem\">\n      <img class=\"cart-item-img\" [src]=\"productsForCart[cartProduct._id].imageURL\" alt=\"...\">\n    </div>\n    <ul class=\"col-md-7 to-center\">\n      <li>\n        <span>{{ cartProduct.quantity }} X </span>\n        <span ngxTextHighlight\n              [content]=\"productsForCart[cartProduct._id].name\"\n              [searchTerm]=\"searchValue\"\n              [caseSensitive]=\"false\"></span>\n        <div>{{ productsForCart[cartProduct._id].price * cartProduct.quantity | currency: 'USD'}}</div>\n      </li>\n    </ul>\n  </div>\n  <div>\n    <p>Total: <span>{{ totalPrice | currency: 'USD' }}</span></p>\n  </div>\n</div>\n\n<form [formGroup]=\"orderForm\"  (ngSubmit)=\"onOrderSubmit()\" >\n  <h4>CHECKOUT</h4>\n\n  <mat-form-field appearance=\"outline\" class=\"justifier\">\n    <mat-label>Street</mat-label>\n    <input matInput\n           formControlName=\"street\"\n           id=\"street\"\n           type=\"text\"\n           (dblclick)=\"setUserAddress()\"\n    >\n    <mat-error *ngIf=\"orderForm.get('street').errors?.serverError\">\n      {{ orderForm.get('street').errors?.serverError}}\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"City\" formControlName=\"city\">\n      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n        {{city.viewValue}}\n      </mat-option>\n    </mat-select>\n\n    <mat-error *ngIf=\"orderForm.get('city').errors?.serverError\">\n      {{ orderForm.get('city').errors?.serverError}}\n    </mat-error>\n\n  </mat-form-field>\n\n  <mat-form-field appearance=\"outline\" class=\"justifier\">\n    <mat-label>Shipping Date</mat-label>\n    <input matInput readonly [matDatepicker]=\"deliveryDate\" placeholder=\"Select a delivery date\"\n           formControlName=\"deliveryDate\" [min]=\"minDate\">\n    <mat-datepicker-toggle matSuffix [for]=\"deliveryDate\"></mat-datepicker-toggle>\n    <mat-datepicker #deliveryDate touchUi [dateClass]=\"dateClass\" ></mat-datepicker>\n\n    <mat-error *ngIf=\"orderForm.get('deliveryDate').errors?.serverError\">\n      {{ orderForm.get('deliveryDate').errors?.serverError}}\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"outline\" class=\"justifier\">\n    <mat-label>Credit Card</mat-label>\n    <input matInput\n           formControlName=\"creditCard\"\n           id=\"creditCard\"\n           type=\"number\"\n    >\n    <mat-error *ngIf=\"orderForm.get('creditCard').errors?.serverError\">\n      {{ orderForm.get('creditCard').errors?.serverError}}\n    </mat-error>\n  </mat-form-field>\n\n  <button mat-button type=\"submit\">Submit order</button>\n</form>\n\n\n</div>\n-->\n\n<!--Main layout-->\n<div name=\"searchText\" *ngIf=\"isLoading\">\n  <div class=\"progress md-progress\">\n    <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n  </div>\n</div>\n\n\n\n<div name=\"searchText\" *ngIf=\"!isLoading\">\n<main class=\"mt-5 pt-4\">\n  <div class=\"container wow fadeIn\">\n    <button class=\"btn btn-primary btn-lg btn-block\" routerLink=\"/shop\">Back to Shopping</button>\n    <!-- Heading -->\n    <h2 class=\"my-5 h2 text-center\">Checkout form</h2>\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n      <!--Grid column-->\n      <div class=\"col-md-8 mb-4\">\n\n        <!--Card-->\n        <div class=\"card\">\n\n          <!--Card content-->\n          <form [formGroup]=\"orderForm\"  (ngSubmit)=\"onOrderSubmit()\" class=\"card-body\">\n\n            <!--Grid row-->\n            <div class=\"row\">\n\n              <!--Grid column-->\n              <div class=\"col-md-6 mb-2\"></div>\n              <!--Grid column-->\n\n              <!--Grid column-->\n              <div class=\"col-md-6 mb-2\">\n\n              </div>\n              <!--Grid column-->\n\n            </div>\n            <!--Grid row-->\n\n\n            <!--address-->\n            <div class=\"md-form mb-5\">\n              <mat-label>Street</mat-label>\n              <mat-form-field appearance=\"outline\" class=\"justifier\">\n              <input matInput\n                     class=\"form-control\"\n                     placeholder=\"Double Click Here For Your Registered Address\"\n                     formControlName=\"street\"\n                     id=\"street\"\n                     type=\"text\"\n                     (dblclick)=\"setUserAddress()\"\n              >\n\n                <mat-error *ngIf=\"orderForm.get('street').errors?.serverError\">\n                  {{ orderForm.get('street').errors?.serverError}}\n                </mat-error>\n              </mat-form-field>\n\n            </div>\n\n\n            <!--Grid row-->\n            <div class=\"row\">\n\n              <!--Grid column-->\n              <div class=\"col-lg-4 col-md-12 mb-4\">\n\n                <mat-form-field>\n                  <mat-select placeholder=\"City\" formControlName=\"city\">\n                    <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                      {{city.viewValue}}\n                    </mat-option>\n                  </mat-select>\n\n                  <mat-error *ngIf=\"orderForm.get('city').errors?.serverError\">\n                    {{ orderForm.get('city').errors?.serverError}}\n                  </mat-error>\n                </mat-form-field>\n              </div>\n              <!--Grid column-->\n\n              <mat-form-field appearance=\"outline\" class=\"justifier\">\n                <mat-label>Shipping Date</mat-label>\n                <input matInput readonly [matDatepicker]=\"deliveryDate\" placeholder=\"Select a delivery date\"\n                       formControlName=\"deliveryDate\" [min]=\"minDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"deliveryDate\"></mat-datepicker-toggle>\n                <mat-datepicker #deliveryDate touchUi [dateClass]=\"dateClass\" ></mat-datepicker>\n\n                <mat-error *ngIf=\"orderForm.get('deliveryDate').errors?.serverError\">\n                  {{ orderForm.get('deliveryDate').errors?.serverError}}\n                </mat-error>\n              </mat-form-field>\n\n              <!--Grid column-->\n\n            </div>\n            <!--Grid row-->\n\n            <div class=\"d-block my-3\">\n              <div class=\"custom-control custom-radio\">\n                <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n              </div>\n              <div class=\"custom-control custom-radio\">\n                <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n                <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"cc-name\">Name on card</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n                <small class=\"text-muted\">Full name as displayed on card</small>\n                <div class=\"invalid-feedback\">\n                  Name on card is required\n                </div>\n              </div>\n\n              <mat-form-field appearance=\"outline\" class=\"justifier\">\n                <mat-label>Credit Card</mat-label>\n                <input matInput\n                       formControlName=\"creditCard\"\n                       id=\"creditCard\"\n                       type=\"number\"\n                >\n                <mat-error *ngIf=\"orderForm.get('creditCard').errors?.serverError\">\n                  {{ orderForm.get('creditCard').errors?.serverError}}\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3 mb-3\">\n                <label for=\"cc-expiration\">Expiration</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\">\n                  Expiration date required\n                </div>\n              </div>\n              <div class=\"col-md-3 mb-3\">\n                <label for=\"cc-expiration\">CVV</label>\n                <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n                <div class=\"invalid-feedback\">\n                  Security code required\n                </div>\n              </div>\n            </div>\n            <hr class=\"mb-4\">\n            <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n\n          </form>\n\n        </div>\n        <!--/.Card-->\n\n      </div>\n      <!--Grid column-->\n\n      <!--Grid column-->\n      <div class=\"col-md-4 mb-4\">\n\n        <!-- Heading -->\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span>Your cart</span>\n          <div >{{currentCartProducts.length}} Products</div>\n          <span class=\"badge badge-secondary badge-pill\">{{ totalPrice | currency: 'USD' }}</span>\n        </h4>\n\n        <!-- Cart -->\n        <div *ngIf=\"totalPrice > 0\">\n          <form>\n            <input autocomplete=\"off\" type=\"search\" name=\"searchValue\" placeholder=\"Search a Products\"\n                   [(ngModel)]=\"searchValue\">\n          </form>\n        <div class=\"row carts-products\" *ngFor=\"let cartProduct of currentCartProducts\">\n\n          <div class=\"col-md-5 to-left cartItem\">\n            <ul class=\"list-group mb-3 z-depth-1\">\n              <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <img class=\"cart-item-img\" [src]=\"productsForCart[cartProduct._id].imageURL\" alt=\"...\">\n                <span>{{ cartProduct.quantity }}</span><div> &nbsp;x&nbsp; </div>\n                <span ngxTextHighlight\n                      [content]=\"productsForCart[cartProduct._id].name\"\n                      [searchTerm]=\"searchValue\"\n                      [caseSensitive]=\"false\"></span> <div>&nbsp; Total:\n                <span>{{ productsForCart[cartProduct._id].price * cartProduct.quantity | currency: 'USD'}}</span>\n              </div>\n              </li></ul>\n          </div>\n        </div>\n        <div>\n          <p>Total: <span>{{ totalPrice | currency: 'USD' }}</span></p>\n        </div>\n\n        <!-- Cart -->\n\n\n      </div>\n      <!--Grid column-->\n    </div>\n    <!--Grid row-->\n\n  </div>\n<!--Main layout-->\n\n  </div>\n</main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/shop/shop.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--NavBar section -->\r\n<!--<div class=\"shop-container\">\r\n  <mat-toolbar color=\"white\">\r\n    <div class=\"mat-toolbar-buttons\">\r\n\r\n      <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n        <mat-icon>shopping_cart</mat-icon>\r\n      </button>\r\n      <span class=\"spacer\"></span>\r\n\r\n      <span>\r\n   <button mat-button (click)=\"showAllProducts()\">All</button>\r\n   <button mat-button *ngFor=\"let category of categories\"\r\n           (click)=\"filterProductsByCategory(category._id)\">\r\n    {{ category.name }}\r\n  </button>\r\n\r\n  </span>\r\n      <div class=\"example-sidenav-content\">\r\n      </div>\r\n    </div>\r\n    <mat-form-field style=\"padding-top: 6px; width: 100px; font-size: 14px;\"\r\n                    *ngIf=\"searchInputOn\">\r\n      <input matInput type=\"text\" appearance=\"none\"\r\n             name=\"searValue\"\r\n             [(ngModel)]=\"searchValue\"\r\n             placeholder=\"Search Product\"\r\n             [value]=\"searchValue\"\r\n             (keyup)=\"onUserSearch($event.target.value)\">\r\n    </mat-form-field>\r\n  </mat-toolbar>-->\r\n\r\n<body>\r\n<nav class=\"navbar navbar-expand-lg navbar-dark nav-props\">\r\n  <button mat-button class=\"navbar-brand cart-icon\" (click)=\"drawer.toggle()\">\r\n    <mat-icon color=\"primary\" *ngIf=\"totalCartProductsQuantity === 0\">shopping_cart</mat-icon>\r\n    <mat-icon color=\"primary\" *ngIf=\"totalCartProductsQuantity > 0\" matBadge=\"{{ totalCartProductsQuantity }}\" matBadgeColor=\"primary\">\r\n      shopping_cart\r\n    </mat-icon>\r\n  </button>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\r\n    <mat-icon>storage</mat-icon>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\"\r\n       [ngClass]=\"{ 'show': navbarOpen }\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <button mat-button style=\"margin: 0 5px\" (click)=\"showAllProducts()\"\r\n                [ngClass]=\"categoryId ? null : 'active-btn'\">All Products\r\n        </button>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" *ngFor=\"let category of categories\">\r\n        <button mat-button style=\"margin: 0 5px\" (click)=\"filterProductsByCategory(category._id)\"\r\n                [ngClass]=\"categoryId === category._id ? 'active-btn' : null\"\r\n        > {{ category.name }}</button>\r\n      </li>\r\n\r\n      <form *ngIf=\"searchInputOn\">\r\n        <!--<mdb-icon fas icon=\"search\" aria-hidden=\"true\"></mdb-icon>-->\r\n        <input class=\"form-control form-control-sm ml-3 w-75\"\r\n               mdbInput\r\n               type=\"text\"\r\n               placeholder=\"Search\"\r\n               aria-label=\"Search\"\r\n               [formControl]=\"control\"\r\n               [(ngModel)]=\"searchValue\"\r\n               (keyup)=\"onUserSearch($event.target.value)\">\r\n      </form>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<!--cart sideBar section-->\r\n\r\n<mat-drawer-container class=\"side-nav-cart example-container\"> <!--autosize-->\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" style=\"overflow: hidden !important;\">\r\n    <button style=\"float: left\" mat-button (click)=\"deleteAllProductsFromCart()\"><img\r\n      src=\"https://img.icons8.com/ios-filled/25/000000/clear-shopping-cart.png\">Empty Cart\r\n    </button>\r\n\r\n\r\n    <div style=\"text-align: center;\" *ngIf=\"this.authService.userCart.products.length > 0\">\r\n\r\n      <div class=\"checkout-btn\">\r\n          <button class=\"example-1\" *ngIf=\"totalCartPrice\" mat-button color=\"primary\" routerLink=\"/order\">\r\n            <div>Check Out</div>\r\n            <h5>Total: <br/> {{totalCartPrice | currency:\"USD\"}}</h5>\r\n          </button>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <div style=\"display: block;float: left\">\r\n      <div class=\"row shopping-cart-item\" *ngFor=\"let cartProduct of currentCartProducts\">\r\n\r\n        <div class=\"col-md-5 to-left cartItem cart-products\">\r\n          <img class=\"card-img-top\" [src]=\"productsForCart[cartProduct._id].imageURL\">\r\n        </div>\r\n        <div class=\"carts-products-wrapper\">\r\n          <ul class=\"col-md-7 to-center\">\r\n            <li>\r\n              <span>{{cartProduct.quantity}}</span> {{productsForCart[cartProduct._id].name}}\r\n              <div>{{productsForCart[cartProduct._id].price * cartProduct.quantity | currency:\"USD\"}}</div>\r\n              <button mat-button (click)=\"deleteProductFromCart(cartProduct._id)\">Remove</button>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-drawer>\r\n\r\n  <div *ngIf=\"!ProductsByCategory\">\r\n\r\n    <span *ngIf=\"searchValue && !numOfSearchResults\">No products found</span>\r\n    <span *ngIf=\"searchValue && numOfSearchResults !==0\">Results: {{numOfSearchResults}}</span>\r\n    <div class=\"row\">\r\n      <mat-card class=\"col-lg-2 col-md-4 col-md-6\" *ngFor=\"let item of products | keyvalue\">\r\n\r\n        <div class=\"mat-card-content\">\r\n          <h4 class=\"to-center\">{{capFirstLetter(products[item.key].name)}}</h4>\r\n          <div class=\"to-center productImage\">\r\n            <img class=\"card-img-top\" [src]=\"products[item.key].imageURL\">\r\n          </div>\r\n          <p class=\"to-center\">{{products[item.key].price | currency:\"USD\"}}</p>\r\n\r\n\r\n          <div class=\"card-footer\">\r\n            <button *ngIf=\"item.key !== productId\" mat-button class=\"justifier\"\r\n                    (click)=\"addToCart(item.key)\">Add to cart\r\n            </button>\r\n            <div *ngIf=\"productId === item.key\" class=\"to-center\">\r\n              <form class=\"product-list\">\r\n                <button mat-button (click)=\"addItem()\">+</button>\r\n                <input class=\"mat-input-element\" (keydown)=\"allowNumberOnly($event)\" min=\"1\" type=\"number\"\r\n                       name=\"quantity\" [(ngModel)]=\"quantity\">\r\n                <button mat-button (click)=\"removeItem()\">-</button>\r\n                <button *ngIf=\"productId === item.key\" mat-button class=\"justifier\"\r\n                        (click)=\"sendToCart(item.key,quantity)\">\r\n                  Send to cart\r\n                </button>\r\n\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Products by category-->\r\n  <div style=\"overflow: hidden !important \" class=\"row\">\r\n    <mat-card class=\"col-lg-2 col-4-md col-sm-6 tp-card\" *ngFor=\"let product of ProductsByCategory\">\r\n      <div class=\"to-center productImg\">\r\n        <img class=\"card-img-top\" [src]=\"product.imageURL\">\r\n      </div>\r\n      <div class=\"mat-card-content\">\r\n        <h4>{{ product.name}}</h4>\r\n        <p>{{product.price | currency:\"USD\"}}</p>\r\n\r\n        <div class=\"card-footer\">\r\n          <button mat-button class=\"justifier\"\r\n                  (click)=\"addToCart(product._id)\">Add to cart\r\n          </button>\r\n          <div *ngIf=\"productId === product._id\" class=\"to-center\">\r\n            <button mat-button (click)=\"removeItem()\">-</button>\r\n            <div>{{quantity}}</div>\r\n            <button mat-button (click)=\"addItem()\">+</button>\r\n          </div>\r\n          <button *ngIf=\"productId === product._id\" mat-button class=\"justifier\"\r\n                  (click)=\"sendToCart(productId,quantity)\">\r\n            Send to cart\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</mat-drawer-container>\r\n<!--</div>-->\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-card class=\"box\">\r\n    <div style=\"text-align: center;\"><img style=\"width: 120px;margin-left: auto\" src=\"https://image.flaticon.com/icons/svg/1484/1484799.svg\"></div>\r\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form class=\"example-form\" (ngSubmit)=\"onFirstStepSubmit()\" [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>First Step</ng-template>\r\n      <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Identity Number 9 Digits\" formControlName=\"identityNumber\" min=0 type=\"number\"\r\n      (keydown)=\"allowNumberOnly($event)\"\r\n             (paste)=\"preventPaste($event)\">\r\n          <mat-error *ngIf=\"firstFormGroup.get('identityNumber').errors?.serverError\">\r\n            {{ firstFormGroup.get('identityNumber').errors?.serverError}}\r\n          </mat-error>\r\n      </mat-form-field>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"em@il\" formControlName=\"email\">\r\n          <mat-error *ngIf=\"firstFormGroup.get('email').errors?.serverError\">\r\n            {{ firstFormGroup.get('email').errors?.serverError}}\r\n          </mat-error>\r\n      </mat-form-field>\r\n        </div>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n        <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\r\n          <mat-error *ngIf=\"firstFormGroup.get('password').errors?.serverError\">\r\n            {{ firstFormGroup.get('password').errors?.serverError}}\r\n          </mat-error>\r\n      </mat-form-field>\r\n        </div>\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"password\" matInput placeholder=\"Confirm Password\" formControlName=\"password2\">\r\n        <mat-error *ngIf=\"firstFormGroup.get('password2').errors?.serverError\">\r\n          {{ firstFormGroup.get('password2').errors?.serverError}}\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div>\r\n        <button mat-button color=\"primary\" (click)=goForward(stepper) type=\"submit\">Next</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form (ngSubmit)=\"onSecondStepSubmit()\" [formGroup]=\"secondFormGroup\">\r\n      <ng-template matStepLabel>Last Step</ng-template>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" formControlName=\"firstName\">\r\n        <mat-error *ngIf=\"secondFormGroup.get('firstName').errors?.serverError\">\r\n          {{ secondFormGroup.get('firstName').errors?.serverError}}\r\n        </mat-error>\r\n        <mat-error *ngIf=\"secondFormGroup.controls['firstName'].errors?.pattern\">\r\n          Please insert characters only\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\">\r\n          <mat-error *ngIf=\"secondFormGroup.get('lastName').errors?.serverError\">\r\n            {{ secondFormGroup.get('lastName').errors?.serverError}}\r\n          </mat-error>\r\n          <mat-error *ngIf=\"secondFormGroup.controls['lastName'].errors?.pattern\">\r\n            Please insert characters only\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n<div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-select placeholder=\"City\" formControlName=\"city\">\r\n      <mat-option *ngFor=\"let city of city\" [value]=\"city.value\">\r\n        {{city.viewValue}}\r\n      </mat-option>\r\n    </mat-select>\r\n    <mat-error *ngIf=\"secondFormGroup.get('city').errors?.serverError\">\r\n      {{ secondFormGroup.get('city').errors?.serverError}}\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Street\" formControlName=\"street\" >\r\n          <mat-error *ngIf=\"secondFormGroup.get('street').errors?.serverError\">\r\n            {{ secondFormGroup.get('street').errors?.serverError}}\r\n          </mat-error>\r\n          </mat-form-field>\r\n      </div>\r\n      <div>\r\n        <button color=\"primary\" mat-button matStepperPrevious>Back</button>\r\n        <button color=\"primary\" mat-button matStepperNext>Submit</button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n    </mat-card>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gurds/auth.gurd */ "./src/app/gurds/auth.gurd.ts");
/* harmony import */ var _gurds_adminGuard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gurds/adminGuard */ "./src/app/gurds/adminGuard.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/layout/not-found/not-found.component */ "./src/app/components/layout/not-found/not-found.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");














const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'order', component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_10__["OrderComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'invoice', component: _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_11__["InvoiceComponent"], canActivate: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'admin', component: _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], canActivate: [_gurds_adminGuard__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]] },
    { path: '**', redirectTo: '/404' },
    { path: '404', component: _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row button,\r\n.example-button-row a {\r\n  margin-right: 8px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
    ngOnInit() {
        console.log('check');
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gurds/auth.gurd */ "./src/app/gurds/auth.gurd.ts");
/* harmony import */ var _gurds_adminGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gurds/adminGuard */ "./src/app/gurds/adminGuard.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/shop/shop.component */ "./src/app/components/shop/shop.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
/* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/layout/sidebar/sidebar.component */ "./src/app/components/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-text-highlight */ "./node_modules/ngx-text-highlight/ngx-text-highlight.umd.js");
/* harmony import */ var ngx_text_highlight__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ngx_text_highlight__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/invoice/invoice.component */ "./src/app/components/invoice/invoice.component.ts");
/* harmony import */ var _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/layout/not-found/not-found.component */ "./src/app/components/layout/not-found/not-found.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin-page/edit-modal/edit-modal.component */ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts");
/* harmony import */ var _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin-page/add-modal/add-modal.component */ "./src/app/components/admin-page/add-modal/add-modal.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var countup_js_angular2__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! countup.js-angular2 */ "./node_modules/countup.js-angular2/fesm2015/countup.js-angular2.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");








































let AppModule = class AppModule {
    constructor(devTools) {
        const enhancers = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() ? [devTools.enhancer()] : [];
        //ngRedux.configureStore(rootReducer,INITIAL_STATE,[],enhancers);
    }
};
AppModule.ctorParameters = () => [
    { type: ng2_redux__WEBPACK_IMPORTED_MODULE_25__["DevToolsExtension"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
            _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
            _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_21__["ShopComponent"],
            _components_layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_26__["SidebarComponent"],
            _components_order_order_component__WEBPACK_IMPORTED_MODULE_27__["OrderComponent"],
            _components_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_31__["InvoiceComponent"],
            _components_layout_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_32__["NotFoundComponent"],
            _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_33__["AdminPageComponent"],
            _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_34__["EditModalComponent"],
            _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_35__["AddModalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            ng2_redux__WEBPACK_IMPORTED_MODULE_25__["NgReduxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__["MatDatepickerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
            ngx_text_highlight__WEBPACK_IMPORTED_MODULE_30__["NgHighlightModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MyMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_36__["AngularFontAwesomeModule"],
            countup_js_angular2__WEBPACK_IMPORTED_MODULE_37__["CountUpModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__["MatBadgeModule"]
        ],
        entryComponents: [
            _components_admin_page_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_34__["EditModalComponent"],
            _components_admin_page_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_35__["AddModalComponent"]
        ],
        providers: [_gurds_auth_gurd__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _gurds_adminGuard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/admin-page/add-modal/add-modal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-page/add-modal/add-modal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkZC1tb2RhbC9hZGQtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin-page/add-modal/add-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/admin-page/add-modal/add-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: AddModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalComponent", function() { return AddModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let AddModalComponent = class AddModalComponent {
    constructor(productService, authService, formBuilder, dialogRef, data) {
        this.productService = productService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.authService.loadToken();
        this.adminToken = this.authService.currentUserToken;
        this.addProductForm = this.formBuilder.group({
            name: '',
            categoryId: '',
            price: '',
            imageURL: ''
        });
    }
    save() {
        const formValues = this.addProductForm.getRawValue();
        const newProduct = {
            name: formValues.name.toLowerCase(),
            categoryId: formValues.categoryId,
            price: formValues.price,
            imageURL: formValues.imageURL
        };
        console.log(newProduct);
        this.productService.createNewProduct(newProduct, this.adminToken).subscribe(data => {
            this.dialogRef.close(data);
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    allowNumberOnly(e) {
        const code = (e.which) ? e.which : e.keycode;
        if (code == 45) {
            // if (code > 31 && (code < 48 || code > 57))
            {
                console.log("Oren");
                e.preventDefault();
            }
        }
    }
};
AddModalComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-modal',
        template: __webpack_require__(/*! raw-loader!./add-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/add-modal/add-modal.component.html"),
        styles: [__webpack_require__(/*! ./add-modal.component.css */ "./src/app/components/admin-page/add-modal/add-modal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], AddModalComponent);



/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts");
/* harmony import */ var _add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-modal/add-modal.component */ "./src/app/components/admin-page/add-modal/add-modal.component.ts");










let AdminPageComponent = class AdminPageComponent {
    constructor(authService, router, productsService, categoryService, formBuilder, dialog) {
        this.authService = authService;
        this.router = router;
        this.productsService = productsService;
        this.categoryService = categoryService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.isLoading = true;
    }
    ngOnInit() {
        this.authService.loadToken();
        this.adminToken = this.authService.currentUserToken;
        this.getAllProducts();
        this.getAllCategories();
        this.addProductForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            imageURL: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    getAllProducts() {
        this.productsService.getAllProducts().subscribe(data => {
            this.products = data;
            this.productsLength = this.products.length;
        });
    }
    getAllCategories() {
        this.categoryService.geAllCategories().subscribe(data => {
            this.convertArrToObject(data);
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.categories = productsObj;
        this.isLoading = false;
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    openeEditDialog(productsValues, categoriesObject) {
        const dialogRef = this.dialog.open(_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_8__["EditModalComponent"], {
            data: {
                preEditFields: productsValues,
                categories: categoriesObject
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            this.getAllProducts();
        });
    }
    openAddDialog(categoriesObject) {
        const dialogRef = this.dialog.open(_add_modal_add_modal_component__WEBPACK_IMPORTED_MODULE_9__["AddModalComponent"], {
            data: {
                categories: categoriesObject
            }
        });
        dialogRef.afterClosed().subscribe(() => {
            this.getAllProducts();
        });
    }
};
AdminPageComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: __webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/admin-page.component.html"),
        styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/components/admin-page/admin-page.component.css")]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/components/admin-page/edit-modal/edit-modal.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-page/edit-modal/edit-modal.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2VkaXQtbW9kYWwvZWRpdC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/admin-page/edit-modal/edit-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-page/edit-modal/edit-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






let EditModalComponent = class EditModalComponent {
    constructor(productService, authService, formBuilder, dialogRef, data) {
        this.productService = productService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.authService.loadToken();
        this.adminToken = this.authService.currentUserToken;
        this.editProductForm = this.formBuilder.group({
            name: '',
            categoryId: '',
            price: '',
            imageURL: ''
        });
        const editForm = this.editProductForm.controls;
        const preEditFields = this.data.preEditFields;
        editForm.categoryId.setValue(preEditFields.categoryId);
        editForm.name.setValue(preEditFields.name);
        editForm.price.setValue(preEditFields.price);
        editForm.imageURL.setValue(preEditFields.imageURL);
    }
    save(productID) {
        const newFormValues = this.editProductForm.getRawValue();
        const editedProduct = {
            name: newFormValues.name.toLowerCase(),
            categoryId: newFormValues.categoryId,
            price: newFormValues.price,
            imageURL: newFormValues.imageURL
        };
        this.productService.editProduct(productID, editedProduct, this.adminToken).subscribe(data => {
            this.dialogRef.close(data);
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    allowNumberOnly(e) {
        const code = (e.which) ? e.which : e.keycode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
};
EditModalComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
EditModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-modal',
        template: __webpack_require__(/*! raw-loader!./edit-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-page/edit-modal/edit-modal.component.html"),
        styles: [__webpack_require__(/*! ./edit-modal.component.css */ "./src/app/components/admin-page/edit-modal/edit-modal.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditModalComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  font-family: 'Chewy', cursive;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBmb250LWZhbWlseTogJ0NoZXd5JywgY3Vyc2l2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let DashboardComponent = class DashboardComponent {
    constructor(productService, authService, cartService, orderService) {
        this.productService = productService;
        this.authService = authService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.isLoading = true;
    }
    ngOnInit() {
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.userId = this.authService.currentUserData.id;
        this.userToken = this.authService.currentUserToken;
        this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
            console.log(data.msg);
            if (data.status === 0) {
                this.authService.storeCartData(data.cart);
                this.orderService.getLatestOrderByUserId(this.userId, this.userToken).subscribe(date => {
                    console.log(date[0]);
                    if (date[0]) {
                        this.dashBoardMsg = "Welcome back, no opened carts were found. Your last order's date is: " + (new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en").transform(date[0].orderDate, "dd/MM/yyyy"));
                    }
                    else {
                        this.dashBoardMsg = "Welcome to our shop, Enjoy your first buy ♥";
                    }
                });
                return;
            }
            if (data.status === 1) {
                this.authService.storeCartData(data.cart);
                this.dashBoardMsg = "You have an opened cart from " + (new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en").transform(data.msg, "dd/MM/yyyy"));
                return;
            }
            else {
                const userId = { userId: this.userId };
                this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
                    this.authService.storeCartData(data.cart);
                    this.dashBoardMsg = "Welcome to our shop, Enjoy your first buy ♥";
                });
            }
        });
        this.productService.getAllProducts().subscribe(data => {
            this.numOfProducts = Object.keys(data).length;
            setTimeout(() => {
                this.isLoading = false;
            }, 300);
        });
        this.orderService.getAllOrdersLength().subscribe(data => {
            this.numOfOrders = data;
        });
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Chewy', cursive;\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.icon{\r\n  width:120px;\r\n  margin-left: 48px;\r\n}\r\n\r\n.test{\r\n  content: \"\\0025\";\r\n  background-color: black;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBmb250LWZhbWlseTogJ0NoZXd5JywgY3Vyc2l2ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbntcclxuICB3aWR0aDoxMjBweDtcclxuICBtYXJnaW4tbGVmdDogNDhweDtcclxufVxyXG5cclxuLnRlc3R7XHJcbiAgY29udGVudDogXCJcXDAwMjVcIjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





let HomeComponent = class HomeComponent {
    constructor(productService, orderService, authService) {
        this.productService = productService;
        this.orderService = orderService;
        this.authService = authService;
    }
    ngOnInit() {
        this.productService.getAllProducts().subscribe(data => {
            this.numOfProducts = data.length;
            // console.log(this.numOfProducts);
        });
        this.orderService.getAllOrdersLength().subscribe(data => {
            this.numOfOrders = data;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/invoice/invoice.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9pbnZvaWNlL2ludm9pY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");







let InvoiceComponent = class InvoiceComponent {
    constructor(authService, productService, orderService) {
        this.authService = authService;
        this.productService = productService;
        this.orderService = orderService;
        this.isLoading = true;
        this.oderDate = localStorage.getItem('order_date');
        this.deliveryDate = localStorage.getItem('delivery_date');
    }
    ngOnInit() {
        this.authService.loadUserCart();
        this.getAllProducts();
        this.currentCartProducts = (JSON.parse(localStorage.getItem('clone_cart'))).products; //this.authService.userCart.products;
        this.totalPrice = (JSON.parse(localStorage.getItem('clone_cart'))).totalCartPrice; // this.authService.userCart.totalCartPrice;
        this.setTotalCartProductsQuantity();
        console.log(JSON.parse(localStorage.getItem('clone_cart')));
    }
    ngOnDestroy() {
    }
    captureScreen() {
        const data = document.getElementById('contentToConvert');
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(data).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrToObject(data);
            this.isLoading = false;
        });
    }
    convertArrToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.productsForCart = productsObj;
    }
    setTotalCartProductsQuantity() {
        const cartProductsQuantityArr = this.currentCartProducts.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
InvoiceComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }
];
InvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invoice',
        template: __webpack_require__(/*! raw-loader!./invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/invoice/invoice.component.html"),
        styles: [__webpack_require__(/*! ./invoice.component.css */ "./src/app/components/invoice/invoice.component.css")]
    })
], InvoiceComponent);



/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.loadUserPayload();
    }
    onLogOutClick() {
        this.authService.logoutUser();
        this.router.navigate(['']);
        return false;
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/layout/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/layout/not-found/not-found.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/layout/not-found/not-found.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9sYXlvdXQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/layout/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/layout/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/layout/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/layout/sidebar/sidebar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  width: 100%;\r\n  height: 200px;\r\n  margin: 12px;\r\n  border: 1px solid #555;\r\n}\r\n\r\nmat-drawer-content {\r\n  padding: 12px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: start;\r\n          align-items: flex-start;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/layout/sidebar/sidebar.component.css")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body{height:100%;margin:0;padding:0;}\r\nbody{background-image:url(https://hype.my/wp-content/uploads/2015/11/Halal-Supermarket-Trolley-Malaysia.jpg);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n.login-wrapper{height:100%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:330px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:relative;top:-10px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n.login-wrapper .example-form{min-width:100%;max-width:300px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.mat-card{\r\n  -webkit-animation: fadeInAnimation ease 1s;\r\n          animation: fadeInAnimation ease 1s;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n  margin-left: 33%;\r\n  margin-top: 15%;\r\n}\r\n.login-wrapper .mat-card{\r\n  padding:40px 0px 50px;\r\n}\r\n@-webkit-keyframes fadeInAnimation {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeInAnimation {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor;line-height:54px;background: whitesmoke;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n.home-header{\r\n  font-family: 'Chewy', cursive;\r\n}\r\n.home-components{\r\n  width: 200px;\r\n\r\n}\r\n:root {\r\n  --input-padding-x: 1.5rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n.login,\r\n.image {\r\n  min-height: 100vh;\r\n}\r\n.login-heading {\r\n  font-weight: 300;\r\n}\r\n.btn-login {\r\n  font-size: 0.9rem;\r\n  letter-spacing: 0.05rem;\r\n  padding: 0.75rem 1rem;\r\n  border-radius: 2rem;\r\n}\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n  border-radius: 2rem;\r\n}\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n  .form-label-group>label {\r\n    display: none;\r\n  }\r\n  .form-label-group input:-ms-input-placeholder {\r\n    color: #777;\r\n  }\r\n}\r\n.banner {\r\n  background: url(https://www.greaterseattleonthecheap.com/wordpress/wp-content/uploads/2016/09/Depositphotos_161299016_l-2015-bag-of-groceries-1024x683.jpg) no-repeat center top;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  min-height: 100%;\r\n}\r\n.banner-text h1 {\r\n  font-family: 'nautilus_pompiliusregular';\r\n  letter-spacing: 2.7px;\r\n  position: relative;\r\n  display: inline-block;\r\n  font-size: 74px;\r\n  line-height: 100px;\r\n  color: black;\r\n  padding-bottom: 0px;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztBQUN6QyxLQUFLLHVHQUF1RyxDQUFDLDBCQUEwQixDQUFDLHFCQUFxQixDQUFDLDJCQUEyQixDQUFDLGdCQUFnQixDQUFDLGdDQUFnQyxDQUFDO0FBQzVPLFlBQVksd0JBQTZCLENBQTdCLDZCQUE2QixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsNkdBQTZHLENBQUM7QUFDdE0sZUFBZSxXQUFXLENBQUM7QUFDM0IsV0FBVyxvQkFBb0IsQ0FBQyxhQUFhLENBQUM7QUFDOUMsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7QUFDM04sVUFBVSxvQkFBb0IsQ0FBQyw0QkFBNEIsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUNySCxZQUFZLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsNEJBQTRCLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDO0FBQzdOLDZCQUE2QixjQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztBQUN2RSw2REFBNkQsVUFBVSxDQUFDO0FBQ3hFLCtCQUErQixpQkFBaUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztBQUMxRiw4Q0FBOEMsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUl0RTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixxQ0FBNkI7VUFBN0IsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBR0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUEsbUNBQW1DLDZCQUE2QixDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0FBQ3pHLHVFQUF1RSxrQkFBa0IsQ0FBQztBQUcxRjtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsWUFBWTs7QUFFZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1QjtBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUlBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTs7RUFFRSxzREFBc0Q7RUFDdEQsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUdBO29EQUNvRDtBQUVwRDtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUVBO29EQUNvRDtBQUVwRDtFQUVFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUdBO0VBQ0UsZ0xBQWdMO0VBQ2hMLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0Usd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsYm9keXtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7fVxyXG5ib2R5e2JhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vaHlwZS5teS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMS9IYWxhbC1TdXBlcm1hcmtldC1Ucm9sbGV5LU1hbGF5c2lhLmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDttaW4taGVpZ2h0OjEwMHZoO2ZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmO31cclxuLmFwcC1oZWFkZXJ7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7ei1pbmRleDoyO2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7fVxyXG4ubG9naW4td3JhcHBlcntoZWlnaHQ6MTAwJTt9XHJcbi5wb3NpdHJvbnh7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6I2ZmZmZmZjt9XHJcbi5ib3h7cG9zaXRpb246cmVsYXRpdmU7dG9wOjA7b3BhY2l0eToxO2Zsb2F0OmxlZnQ7cGFkZGluZzo2MHB4IDUwcHggNDBweCA1MHB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDt0cmFuc2Zvcm06c2NhbGUoMSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7LW1zLXRyYW5zZm9ybTpzY2FsZSgxKTt6LWluZGV4OjU7bWF4LXdpZHRoOjMzMHB4O31cclxuLmJveC5iYWNre3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3RvcDotMjBweDtvcGFjaXR5Oi44O3otaW5kZXg6LTE7fVxyXG4uYm94OmJlZm9yZXtjb250ZW50OlwiXCI7d2lkdGg6MTAwJTtoZWlnaHQ6MzBweDtib3JkZXItcmFkaXVzOjEwcHg7cG9zaXRpb246cmVsYXRpdmU7dG9wOi0xMHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxyXG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3Jte21pbi13aWR0aDoxMDAlO21heC13aWR0aDozMDBweDt3aWR0aDoxMDAlO31cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCwubG9naW4td3JhcHBlciAuYnRuLWJsb2Nre3dpZHRoOjEwMCU7fVxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDt9XHJcbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZXtmb250LXNpemU6MzBweDttYXJnaW46MDt9XHJcblxyXG5cclxuXHJcbi5tYXQtY2FyZHtcclxuICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiBlYXNlIDFzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcblxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmR7XHJcbiAgcGFkZGluZzo0MHB4IDBweCA1MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDo1NHB4O2JhY2tncm91bmQ6IHdoaXRlc21va2U7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4e3BhZGRpbmc6MC44Mzc1ZW0gMDt9XHJcblxyXG5cclxuLmhvbWUtaGVhZGVye1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2hld3knLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uaG9tZS1jb21wb25lbnRze1xyXG4gIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuXHJcbjpyb290IHtcclxuICAtLWlucHV0LXBhZGRpbmcteDogMS41cmVtO1xyXG4gIC0taW5wdXQtcGFkZGluZy15OiAwLjc1cmVtO1xyXG59XHJcblxyXG4ubG9naW4sXHJcbi5pbWFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcblxyXG5cclxuLmxvZ2luLWhlYWRpbmcge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tbG9naW4ge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwPmlucHV0LFxyXG4uZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG5cclxuLyogRmFsbGJhY2sgZm9yIEVkZ2VcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM3Nzc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBGYWxsYmFjayBmb3IgSUVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksXHJcbigtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5ncmVhdGVyc2VhdHRsZW9udGhlY2hlYXAuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9EZXBvc2l0cGhvdG9zXzE2MTI5OTAxNl9sLTIwMTUtYmFnLW9mLWdyb2Nlcmllcy0xMDI0eDY4My5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uYmFubmVyLXRleHQgaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnbmF1dGlsdXNfcG9tcGlsaXVzcmVndWxhcic7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDIuN3B4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiA3NHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.userIsLoggedIn = false;
    }
    ngOnInit() {
        if (this.authService.isLoggedUser()) {
            this.router.navigate(['dashboard']);
        }
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onUserLogin() {
        const loginDetails = this.loginForm.getRawValue();
        this.authService.loginUser(loginDetails).subscribe(data => {
            if (data.admin) {
                this.authService.storeUserData(data.token, data.admin);
                this.authService.loadUserPayload();
                this.router.navigate((['admin']));
            }
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.authService.loadUserPayload();
                this.authService.loadToken();
                this.router.navigate((['dashboard']));
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.loginForm.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.userIsLoggedIn = false;
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/order/order.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/order/order.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ngx-text-highlight{\r\n  background:yellow;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAubmd4LXRleHQtaGlnaGxpZ2h0e1xyXG4gIGJhY2tncm91bmQ6eWVsbG93O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let OrderComponent = class OrderComponent {
    constructor(authService, productService, cartService, orderService, router) {
        this.authService = authService;
        this.productService = productService;
        this.cartService = cartService;
        this.orderService = orderService;
        this.router = router;
        this.isLoading = true;
        this.occupiedDates = [];
        this.minDate = new Date();
        this.cities = [
            { value: 'Tel Aviv-0', viewValue: 'Tel Aviv' },
            { value: 'Haifa-1', viewValue: 'Haifa' },
            { value: 'Jerusalem-2', viewValue: 'Jerusalem' },
            { value: 'Beer Sheva-3', viewValue: 'Beer Sheva' },
            { value: 'Rishon le Zion-4', viewValue: 'Rishon le Zion' },
            { value: 'Herzelia-5', viewValue: 'Herzelia' },
            { value: 'Ramat Ha Sharon-6', viewValue: 'Ramat Ha Sharon' },
            { value: 'Netanya-7', viewValue: 'Netanya' },
            { value: 'Karkur-8', viewValue: 'Karkur' },
            { value: 'Eilat-9', viewValue: 'Eilat' },
        ];
        this.myFilter = (d) => {
            const day = d.getDay();
            return (!this.occupiedDates.includes(d.valueOf()));
        };
        this.dateClass = (d) => {
            const day = d.getDate();
            return (this.occupiedDates.includes(d.valueOf())) ? 'occupied-date-class' : undefined;
        };
    }
    ngOnInit() {
        this.authService.loadUserCart();
        this.authService.loadUserPayload();
        this.authService.loadToken();
        this.userToken = this.authService.currentUserToken;
        this.userId = this.authService.userCart.userId;
        this.cartId = this.authService.userCart._id;
        this.currentCart = this.authService.userCart;
        console.log(this.currentCart);
        this.getAllProducts();
        this.currentCartProducts = this.authService.userCart.products;
        this.totalPrice = this.authService.userCart.totalCartPrice;
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            deliveryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            creditCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.getOccupiedDates();
        this.setTotalCartProductsQuantity();
    }
    getAllProducts() {
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrayToObject(data);
            this.isLoading = false;
        });
    }
    convertArrayToObject(productsArray) {
        const productsObj = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObj[productsArray[i]._id] = productsArray[i];
        }
        this.productsForCart = productsObj;
        console.log(this.productsForCart);
    }
    setUserAddress() {
        this.authService.loadUserPayload();
        this.orderForm.controls['city'].setValue(this.authService.currentUserData.city);
        this.orderForm.controls['street'].setValue(this.authService.currentUserData.street);
    }
    onOrderSubmit() {
        const orderDetails = this.orderForm.getRawValue();
        const creditCard = orderDetails.creditCard.toString();
        const deliveryDate = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en').transform(orderDetails.deliveryDate, 'yyyy/MM/dd');
        //console.log(creditCard, deliveryDate);
        const order = {
            userId: this.userId,
            cartId: this.cartId,
            street: orderDetails.street,
            totalPrice: this.totalPrice,
            city: orderDetails.city,
            deliveryDate: deliveryDate,
            creditCard: creditCard,
            products: this.currentCartProducts,
            cart: this.currentCart,
        };
        console.log(this.cartId);
        this.orderService.createNewOrder(order, this.userToken).subscribe(data => {
            console.log(data);
            if (data.success) {
                const userId = { userId: this.userId };
                this.cartService.createNewCart(userId, this.userToken).subscribe(data => {
                    this.authService.storeCartData(data.cart);
                });
                this.router.navigate(['invoice']);
                localStorage.setItem('clone_cart', localStorage.getItem('cart'));
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.orderForm.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
            }
        });
        console.log(orderDetails);
        // @ts-ignore
        localStorage.setItem("order_date", new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en').transform(new Date(), 'dd/MM/yyyy'));
        localStorage.setItem("delivery_date", new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en').transform(deliveryDate, 'dd/MM/yyyy'));
    }
    getOccupiedDates() {
        this.orderService.getOccupiedDates(this.userToken).subscribe(data => {
            this.occupiedDates = data.map(obj => new Date(obj.date).getTime());
        });
    }
    setTotalCartProductsQuantity() {
        const cartProductsQuantityArr = this.currentCartProducts.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
};
OrderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/order/order.component.html"),
        styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/components/order/order.component.css")]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/components/shop/shop.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/shop/shop.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: 'Chewy', cursive;\r\n  position: fixed;\r\n  overflow-y: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.shop-container {\r\n  font-family: 'Chewy', cursive;\r\n  height: 100%;\r\n}\r\n\r\n::ng-deep .mat-form-field-ripple {\r\n  display: none;\r\n}\r\n\r\n.row shopping-cart-item{\r\n  width:200px;\r\n}\r\n\r\n.mat-toolbar-buttons{\r\n  padding-left: 80px;\r\n}\r\n\r\n.example-container {\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  max-width: 32%;\r\n  padding: 20px 0 0 20px;\r\n}\r\n\r\n.card-footer {\r\n  padding: 0;\r\n}\r\n\r\n.row {\r\n  margin: auto;\r\n}\r\n\r\n.cart-item-img {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card {\r\n  padding: 0;\r\nmargin: 0 0 10px;\r\n}\r\n\r\n.card-img-top {\r\n  width: 70%;\r\n}\r\n\r\n.productImg {\r\n  padding: 22px;\r\n}\r\n\r\n.cartImg {\r\n  padding: 5px;\r\n}\r\n\r\n.cartItem {\r\n  padding: 0 0px;\r\n\r\n}\r\n\r\n.input-res {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 500px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.input-box {\r\n  padding: 0;\r\n}\r\n\r\n.qnt-btn {\r\n  padding: 0;\r\n}\r\n\r\n.tp-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.tp-header-image {\r\n  background-image: url('https://www.tutorialspoint.com/materialize/src/html5-mini-logo.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.mat-input-element {\r\n width:50px;\r\n}\r\n\r\n.product-list{\r\n  text-align: center;\r\n}\r\n\r\n.mat-toolbar-buttons{\r\n  float:left;\r\n  font-size: 4px;\r\n  font-family: Arial;\r\n}\r\n\r\n.mat-drawer-container {\r\n  text-align: center;\r\n}\r\n\r\n.cart-buttons{\r\n\r\n  float: left;\r\n  width:100%;\r\n}\r\n\r\n.checkout-btn{\r\n  margin-left: 60%;\r\n  margin-top:-130px;\r\n  position: fixed;\r\n\r\n}\r\n\r\n.cart-icon{\r\n  color: black;\r\n\r\n}\r\n\r\n.cart-icon:hover{\r\n  color: black;\r\n\r\n}\r\n\r\n.navbar-toggler{\r\n  color: black;\r\n  border: black solid;\r\n}\r\n\r\n.carts-products{\r\n  width: 30%;\r\n}\r\n\r\n.wrapper\r\n{\r\n  padding: 20px;\r\n}\r\n\r\n@-webkit-keyframes shadow-pulse\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shadow-pulse\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes shadow-pulse-big\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 70px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shadow-pulse-big\r\n{\r\n  0% {\r\n    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0 70px rgba(0, 0, 0, 0);\r\n  }\r\n}\r\n\r\n.example-1\r\n{\r\n  text-align: center;\r\n\r\n  width: 100px;\r\n  height: 100px;\r\n\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  color: black;\r\n  text-align: center;\r\n  background: rgba(252, 182, 3, 0.9);\r\n  border-radius: 200%;\r\n  -webkit-animation: shadow-pulse 1s infinite;\r\n          animation: shadow-pulse 1s infinite;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaLGdCQUFnQjtBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMkZBQTJGO0VBQzNGLHNCQUFzQjtBQUN4Qjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztBQUdBO0VBQ0UsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBUkE7O0VBRUU7SUFDRSx3Q0FBd0M7RUFDMUM7RUFDQTtJQUNFLHVDQUF1QztFQUN6QztBQUNGOztBQUVBOztFQUVFO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx1Q0FBdUM7RUFDekM7QUFDRjs7QUFSQTs7RUFFRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsdUNBQXVDO0VBQ3pDO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQWtCOztFQUVsQixZQUFZO0VBQ1osYUFBYTs7RUFFYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDaGV3eScsIGN1cnNpdmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNob3AtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ0NoZXd5JywgY3Vyc2l2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucm93IHNob3BwaW5nLWNhcnQtaXRlbXtcclxuICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLWJ1dHRvbnN7XHJcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zaWRlbmF2IHtcclxuICBtYXgtd2lkdGg6IDMyJTtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcnQtaXRlbS1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbm1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW1nIHtcclxuICBwYWRkaW5nOiAyMnB4O1xyXG59XHJcblxyXG4uY2FydEltZyB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY2FydEl0ZW0ge1xyXG4gIHBhZGRpbmc6IDAgMHB4O1xyXG5cclxufVxyXG5cclxuLmlucHV0LXJlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmlucHV0LWJveCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnFudC1idG4ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi50cC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcbi50cC1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93d3cudHV0b3JpYWxzcG9pbnQuY29tL21hdGVyaWFsaXplL3NyYy9odG1sNS1taW5pLWxvZ28uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuIHdpZHRoOjUwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3R7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItYnV0dG9uc3tcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWJ1dHRvbnN7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5jaGVja291dC1idG57XHJcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICBtYXJnaW4tdG9wOi0xMzBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcblxyXG59XHJcblxyXG5cclxuLmNhcnQtaWNvbntcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4uY2FydC1pY29uOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBibGFjayBzb2xpZDtcclxufVxyXG5cclxuLmNhcnRzLXByb2R1Y3Rze1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi53cmFwcGVyXHJcbntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWRvdy1wdWxzZVxyXG57XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzNXB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWRvdy1wdWxzZS1iaWdcclxue1xyXG4gIDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNzBweCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuLmV4YW1wbGUtMVxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDE4MiwgMywgMC45KTtcclxuICBib3JkZXItcmFkaXVzOiAyMDAlO1xyXG4gIGFuaW1hdGlvbjogc2hhZG93LXB1bHNlIDFzIGluZmluaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shop/shop.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ShopComponent = class ShopComponent {
    constructor(authService, productService, categoryService, cartService) {
        this.authService = authService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.cartService = cartService;
        this.searchInputOn = true;
        this.searchValue = "";
        this.isLoading = true;
        this.navbarOpen = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("");
    }
    ngOnInit() {
        console.log(this.currentCartProducts);
        console.log(JSON.parse(localStorage.getItem('cart')));
        this.authService.loadUserPayload();
        this.authService.loadUserCart();
        this.cartId = this.authService.userCart._id;
        this.authService.loadToken();
        this.userId = this.authService.currentUserData.id;
        this.userToken = this.authService.currentUserToken;
        this.categoryService.geAllCategories().subscribe(data => {
            this.categories = data;
        });
        this.cartService.getUserCartStatus(this.userId, this.userToken).subscribe(data => {
            this.currentCartProducts = data.cart.products;
            console.log(data);
            this.setTotalPrice();
        });
        this.productService.getAllProducts().subscribe(data => {
            this.convertArrayToObject(data);
            this.productsLength = Object.keys(data).length;
            console.log("products for cart: ", this.productsForCart);
            console.log("all products ", this.products);
        });
        this.setTotalCartProductsQuantity();
    }
    addToCart(productId) {
        const cartProduct = this.currentCartProducts.find((product) => product._id === productId);
        if (cartProduct === undefined) {
            this.productId = productId;
            this.quantity = 1;
        }
        else if (cartProduct._id === productId) {
            this.quantity = cartProduct.quantity;
            this.productId = productId;
        }
    }
    ;
    addItem() {
        this.quantity = this.quantity + 1;
    }
    removeItem() {
        if (this.quantity > 1) {
            this.quantity = this.quantity - 1;
        }
    }
    sendToCart(_id, quantity) {
        const addedProduct = { _id, quantity };
        const cartId = this.cartId;
        const cartStatus = this.authService.userCart.isOpen;
        if (cartStatus === 0) {
            const setOpenCart = { isOpen: 1, date: new Date() };
            this.updateCartStatus(cartId, setOpenCart);
        }
        this.cartService.addProductToCart(cartId, addedProduct, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
            console.log(addedProduct);
            this.setTotalPrice();
            this.setTotalCartProductsQuantity();
        });
    }
    ;
    updateCartStatus(cartId, setOpenCart) {
        this.cartService.updateCartStatus(cartId, setOpenCart, this.userToken).subscribe(data => {
            this.updateLocalStorage(data);
        });
    }
    updateLocalStorage(cartData) {
        this.authService.storeCartData(cartData);
        this.authService.loadUserCart();
        this.currentCartProducts = this.authService.userCart.products;
    }
    filterProductsByCategory(categoryId) {
        // console.log(categoryId)
        this.categoryId = categoryId;
        this.productService.getProductsByCategoryId(categoryId).subscribe(data => {
            this.ProductsByCategory = data;
            this.searchInputOn = false;
        });
    }
    ;
    showAllProducts() {
        this.ProductsByCategory = null;
        this.searchInputOn = true;
        this.categoryId = null;
    }
    deleteProductFromCart(_id) {
        const productId = { _id };
        this.cartService.deleteProductFromCart(this.cartId, productId, this.userToken).subscribe(data => {
            console.log(data);
            this.updateLocalStorage(data);
            this.setTotalPrice();
        });
        if (this.currentCartProducts.length == 1) {
            const setOpenCart = { isOpen: 0 };
            this.updateCartStatus(this.cartId, setOpenCart);
            this.setTotalCartProductsQuantity();
        }
    }
    deleteAllProductsFromCart() {
        this.cartService.deleteAllProductsFromCart(this.cartId, this.userToken).subscribe(data => {
            console.log(data);
            this.updateLocalStorage(data);
            this.setTotalCartProductsQuantity();
        });
        const setOpenCart = { isOpen: 0 };
        this.updateCartStatus(this.cartId, setOpenCart);
    }
    setTotalPrice() {
        this.totalCartPrice = 0;
        for (let i = 0; i < this.currentCartProducts.length; i++) {
            this.totalCartPrice += this.currentCartProducts[i].quantity * this.productsForCart[this.currentCartProducts[i]._id].price;
        }
        const totalCartPrice = { totalCartPrice: this.totalCartPrice };
        this.cartService.setCartTotalPrice(this.cartId, totalCartPrice, this.userToken).subscribe(data => {
            console.log(data);
            this.updateLocalStorage(data);
        });
    }
    onUserSearch(searchValue) {
        this.productService.searchProduct(searchValue).subscribe(data => {
            const valueFound = data;
            const results = {};
            for (let i = 0; i < valueFound.length; i++) {
                results[valueFound[i]._id] = valueFound[i];
            }
            this.products = results;
            this.numOfSearchResults = valueFound.length;
        });
    }
    convertArrayToObject(productsArray) {
        const productsObject = {};
        for (let i = 0; i < productsArray.length; i++) {
            productsObject[productsArray[i]._id] = productsArray[i];
        }
        this.products = productsObject;
        this.productsForCart = productsObject;
    }
    capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    allowNumberOnly(e) {
        const code = (e.which) ? e.which : e.keycode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }
    setTotalCartProductsQuantity() {
        const cartProductsArr = this.authService.userCart.products;
        const cartProductsQuantityArr = cartProductsArr.map(obj => obj.quantity);
        this.totalCartProductsQuantity = cartProductsQuantityArr.reduce((a, b) => a + b, 0);
    }
};
ShopComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/components/shop/shop.component.css")]
    })
], ShopComponent);

/* addProductToCart(_id,quantity){
   const productObj = {
     _id,
     quantity
   }
   console.log(this.usersCartId,productObj,this.userToken);
   this.cartService.addProductToCart(this.usersCartId,productObj,this.userToken).subscribe(data=>{
     console.log(data);
   })
 }*/


/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  position: fixed;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.app-header{-webkit-box-pack:justify;justify-content:space-between;position:fixed;top:0;left:0;right:0;z-index:2;box-shadow:0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);}\r\n\r\n.box{\r\n  width:60%\r\n}\r\n\r\n*{\r\n  width:100%;\r\n  font-family: 'Chewy', cursive;\r\n\r\n}\r\n\r\n/*\r\nbody{background-image:url(https://miro.medium.com/max/1200/1*R0dV_CjCmztQlQiLywt4vA.jpeg);background-position:center;background-size:cover;background-repeat:no-repeat;min-height:100vh;font-family:'Roboto', sans-serif;}\r\n.login-wrapper{height:100%;}\r\n.positronx{text-decoration:none;color:#ffffff;}\r\n.box{position:relative;top:0;opacity:1;float:left;padding:60px 50px 40px 50px;width:100%;background:#fff;border-radius:10px;transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);z-index:5;max-width:330px;}\r\n.box.back{transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);top:-20px;opacity:.8;z-index:-1;}\r\n.box:before{content:\"\";width:100%;height:30px;border-radius:10px;position:absolute;top:0px;background:rgba(255, 255, 255, .6);left:0;transform:scale(.95);-webkit-transform:scale(.95);-ms-transform:scale(.95);z-index:-1;}\r\n\r\n.login-wrapper .example-form{min-width:100%;max-width:300px;width:100%;}\r\n.login-wrapper .example-full-width,.login-wrapper .btn-block{width:100%;}\r\n.login-wrapper mat-card-header{text-align:center;width:100%;display:block;font-weight:700;}\r\n.login-wrapper mat-card-header mat-card-title{font-size:30px;margin:0;}\r\n.login-wrapper .mat-card{padding:40px 0px 50px;}\r\n.login-wrapper .mat-stroked-button{border:1px solid currentColor;line-height:54px;background:#FFF7FA;}\r\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0.8375em 0;}\r\n*/\r\n\r\n.box{\r\n  font-family: 'Chewy', cursive;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXOztBQUViOztBQUVBLFlBQVksd0JBQTZCLENBQTdCLDZCQUE2QixDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsNkdBQTZHLENBQUM7O0FBQ3RNO0VBQ0U7QUFDRjs7QUFHQTtFQUNFLFVBQVU7RUFDViw2QkFBNkI7O0FBRS9COztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQzs7QUFFRDtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5hcHAtaGVhZGVye2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6Mjtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO31cclxuLmJveHtcclxuICB3aWR0aDo2MCVcclxufVxyXG5cclxuXHJcbip7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBmb250LWZhbWlseTogJ0NoZXd5JywgY3Vyc2l2ZTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbmJvZHl7YmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzEyMDAvMSpSMGRWX0NqQ216dFFsUWlMeXd0NHZBLmpwZWcpO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7bWluLWhlaWdodDoxMDB2aDtmb250LWZhbWlseTonUm9ib3RvJywgc2Fucy1zZXJpZjt9XHJcbi5sb2dpbi13cmFwcGVye2hlaWdodDoxMDAlO31cclxuLnBvc2l0cm9ueHt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojZmZmZmZmO31cclxuLmJveHtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MDtvcGFjaXR5OjE7ZmxvYXQ6bGVmdDtwYWRkaW5nOjYwcHggNTBweCA0MHB4IDUwcHg7d2lkdGg6MTAwJTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czoxMHB4O3RyYW5zZm9ybTpzY2FsZSgxKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTstbXMtdHJhbnNmb3JtOnNjYWxlKDEpO3otaW5kZXg6NTttYXgtd2lkdGg6MzMwcHg7fVxyXG4uYm94LmJhY2t7dHJhbnNmb3JtOnNjYWxlKC45NSk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTstbXMtdHJhbnNmb3JtOnNjYWxlKC45NSk7dG9wOi0yMHB4O29wYWNpdHk6Ljg7ei1pbmRleDotMTt9XHJcbi5ib3g6YmVmb3Jle2NvbnRlbnQ6XCJcIjt3aWR0aDoxMDAlO2hlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6MTBweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSguOTUpOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7LW1zLXRyYW5zZm9ybTpzY2FsZSguOTUpO3otaW5kZXg6LTE7fVxyXG5cclxuLmxvZ2luLXdyYXBwZXIgLmV4YW1wbGUtZm9ybXttaW4td2lkdGg6MTAwJTttYXgtd2lkdGg6MzAwcHg7d2lkdGg6MTAwJTt9XHJcbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsLmxvZ2luLXdyYXBwZXIgLmJ0bi1ibG9ja3t3aWR0aDoxMDAlO31cclxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVye3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo3MDA7fVxyXG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGV7Zm9udC1zaXplOjMwcHg7bWFyZ2luOjA7fVxyXG4ubG9naW4td3JhcHBlciAubWF0LWNhcmR7cGFkZGluZzo0MHB4IDBweCA1MHB4O31cclxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbntib3JkZXI6MXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtsaW5lLWhlaWdodDo1NHB4O2JhY2tncm91bmQ6I0ZGRjdGQTt9XHJcbi5sb2dpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXh7cGFkZGluZzowLjgzNzVlbSAwO31cclxuKi9cclxuXHJcbi5ib3h7XHJcbiAgZm9udC1mYW1pbHk6ICdDaGV3eScsIGN1cnNpdmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.isLinear = true;
        this.formIsValid = false;
        this.userIsReistered = false;
        this.city = [
            { value: 'Tel Aviv-0', viewValue: 'Tel Aviv' },
            { value: 'Haifa-1', viewValue: 'Haifa' },
            { value: 'Jerusalem-2', viewValue: 'Jerusalem' },
            { value: 'Beer Sheva-3', viewValue: 'Beer Sheva' },
            { value: 'Rishon le Zion-4', viewValue: 'Rishon le Zion' },
            { value: 'Herzelia-5', viewValue: 'Herzelia' },
            { value: 'Ramat Ha Sharon-6', viewValue: 'Ramat Ha Sharon' },
            { value: 'Netanya-7', viewValue: 'Netanya' },
            { value: 'Karkur-8', viewValue: 'Karkur' },
            { value: 'Eilat-9', viewValue: 'Eilat' },
        ];
    }
    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            identityNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.secondFormGroup = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]*$')])],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]*$')])],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onFirstStepSubmit() {
        if (this.authService.isLoggedUser()) {
            this.router.navigate(['dashboard']);
        }
        const signUpDetails = this.firstFormGroup.getRawValue();
        const identityNumber = signUpDetails.identityNumber.toString();
        const credentials = {
            identityNumber: identityNumber,
            email: signUpDetails.email,
            password: signUpDetails.password,
            password2: signUpDetails.password2
        };
        this.authService.checkUserCredentials(credentials).subscribe((data) => {
            if (data.userChecked) {
                this.formIsValid = true;
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.firstFormGroup.get(prop);
                    if (formControl) {
                        //activate the error message
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.formIsValid = false;
            }
        });
    }
    onSecondStepSubmit() {
        const credentials = this.firstFormGroup.getRawValue();
        const shippingDetails = this.secondFormGroup.getRawValue();
        const identityNumber = credentials.identityNumber.toString();
        const user = {
            email: credentials.email,
            identityNumber: identityNumber,
            password: credentials.password,
            lastName: shippingDetails.lastName,
            firstName: shippingDetails.firstName,
            city: shippingDetails.city,
            street: shippingDetails.street
        };
        console.log(user);
        this.authService.registerUser(user).subscribe(user => {
            console.log(user);
            if (user) {
                const loginDetails = {
                    email: credentials.email,
                    password: credentials.password
                };
                this.redirectToDashboard(loginDetails);
            }
        }, err => {
            if (err.status === 400) {
                Object.keys(err.error).forEach(prop => {
                    const formControl = this.secondFormGroup.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err.error[prop]
                        });
                    }
                });
                this.userIsReistered = false;
            }
        });
    }
    goForward(stepper) {
        setTimeout(() => {
            if (this.formIsValid) {
                stepper.next();
            }
        }, 1500);
    }
    allowNumberOnly(e) {
        const code = (e.which) ? e.which : e.keycode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
    preventPaste(e) {
        e.preventDefault();
        return false;
    }
    redirectToDashboard(loginDetails) {
        this.authService.loginUser(loginDetails).subscribe(data => {
            if (data.success) {
                this.authService.storeUserData(data.token, data.user);
                this.authService.loadUserPayload();
                this.authService.loadToken();
                this.router.navigate(['dashboard']);
            }
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/gurds/adminGuard.ts":
/*!*************************************!*\
  !*** ./src/app/gurds/adminGuard.ts ***!
  \*************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AdminGuard = class AdminGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        this.authService.loadToken();
        this.userToken = this.authService.currentUserToken;
        let tokenInfo = this.authService.getDecodedAccessToken(this.userToken);
        if (this.authService.isLoggedUser() && tokenInfo.isAdmin === true) {
            return true;
        }
        else {
            this.router.navigate(['dashboard']);
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdminGuard);



/***/ }),

/***/ "./src/app/gurds/auth.gurd.ts":
/*!************************************!*\
  !*** ./src/app/gurds/auth.gurd.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isLoggedUser()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");








let MyMaterialModule = class MyMaterialModule {
};
MyMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"]],
    })
], MyMaterialModule);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isLoggedUser = () => {
            let jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            if (localStorage.id_token == undefined)
                return false;
            return !jwtHelper.isTokenExpired(localStorage.id_token);
        };
        this.storeCartData = (currentUserCart) => {
            localStorage.setItem('cart', JSON.stringify(currentUserCart));
        };
        this.getDecodedAccessToken = (token) => {
            try {
                return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
            }
            catch (Error) {
                return null;
            }
        };
    }
    checkUserCredentials(userCredentials) {
        return this.http.post('api/user/registerCheck', userCredentials, httpOptions);
    }
    registerUser(user) {
        return this.http.post('api/user/register', user, httpOptions);
    }
    loginUser(loginDetails) {
        return this.http.post('api/user/login', loginDetails, httpOptions);
    }
    checkIfUserAdmin(userId) {
        return this.http.get(`api/user/checkIfUserAdmin/${userId}`);
    }
    storeUserData(token, loggedUser) {
        localStorage.setItem('id_token', token);
        console.log(loggedUser);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        this.authToken = token;
        this.loggedUser = loggedUser;
    }
    loadUserPayload() {
        this.currentUserData = JSON.parse(localStorage.getItem('user'));
    }
    loadToken() {
        this.currentUserToken = localStorage.getItem('id_token');
    }
    logoutUser() {
        this.authToken = null;
        this.loggedUser = null;
        localStorage.clear();
    }
    loadUserCart() {
        this.userCart = JSON.parse(localStorage.getItem('cart'));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let CartService = class CartService {
    constructor(http) {
        this.http = http;
    }
    // getCartByUserId(userId,token):Observable<Cart>{
    //   return this.http.get<Cart>(`api/cart/getUserCart/${userId}`,{headers:{Authorization: token}})
    // }
    getUserCartStatus(userId, token) {
        return this.http.get(`api/cart/getUserCartStatus/${userId}`, { headers: { Authorization: token } });
    }
    createNewCart(userId, token) {
        return this.http.post('api/cart/createCart', userId, { headers: { Authorization: token } });
    }
    addProductToCart(cartId, product, token) {
        return this.http.put(`api/cart/addProductToCart/${cartId}`, product, { headers: { Authorization: token } });
    }
    updateCartStatus(cartId, product, token) {
        return this.http.put(`api/cart/updateCartStatus/${cartId}`, product, { headers: { Authorization: token } });
    }
    deleteProductFromCart(cartId, productId, token) {
        return this.http.put(`api/cart/deleteProduct/${cartId}`, productId, { headers: { Authorization: token } });
    }
    deleteAllProductsFromCart(cartId, token) {
        return this.http.put(`api/cart/deleteAllProducts/${cartId}`, {}, { headers: { Authorization: token } });
    }
    setCartTotalPrice(cartId, totalCartPrice, token) {
        return this.http.put(`api/cart/setCartTotalPrice/${cartId}`, totalCartPrice, { headers: { Authorization: token } });
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
    }
    geAllCategories() {
        return this.http.get('api/category/categories');
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
    }
    getAllOrders(token) {
        return this.http.get('api/order/orders', { headers: { Authorization: token } });
    }
    getAllOrdersLength() {
        return this.http.get('api/order/ordersLength');
    }
    createNewOrder(order, token) {
        return this.http.post('api/order/createNewOrder', order, { headers: { Authorization: token } });
    }
    getOccupiedDates(token) {
        return this.http.get('api/order/getOccupiedDates', { headers: { Authorization: token } });
    }
    getLatestOrderByUserId(userId, token) {
        return this.http.get(`api/order/getLatestOrderByUserId/${userId}`, { headers: { Authorization: token } });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAllProducts() {
        return this.http.get('api/product/products');
    }
    getProductsByCategoryId(categoryId) {
        return this.http.get(`api/product/productsByCategory/${categoryId}`);
    }
    getProductById(productId) {
        return this.http.get(`api/product/getProductById/${productId}`);
    }
    searchProduct(name) {
        return this.http.get(`api/product/search?name=${name}`);
    }
    editProduct(productId, editedProduct, token) {
        return this.http.put(`api/product/editProductById/${productId}`, editedProduct, { headers: { Authorization: token } });
    }
    createNewProduct(product, token) {
        return this.http.post('api/product/createNewProduct', product, { headers: { Authorization: token } });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\orenfe\Desktop\eShop\eShop\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map