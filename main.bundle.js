webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-principal\" [style.background-image]=\"getBackground(apiservice.bck)\" \n    style=\"\n        width:100%; \n        height:100%; \n        background-size:cover;         \n        background-repeat:no-repeat;\n        background-position:center center; \n       \n        \"\n    >\n<app-nav></app-nav>  \n<router-outlet></router-outlet>\n<div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioHttpConbinaciones__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioHttpConbinaciones.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicioAPI_app_servicioAPI__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioAPI.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    // @HostBinding('style.background-image') backgroundIMG:string = 'url("assets/solucion.png")';
    // public backgrounds = ['assets/solucion.png','https://rotaractkc.files.wordpress.com/2013/04/custom-blue-wallpaper.jpg']
    // public bck = 'assets/solucion.png'
    function AppComponent(http, _sanitizer, apiservice) {
        this.http = http;
        this._sanitizer = _sanitizer;
        this.apiservice = apiservice;
    }
    AppComponent.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(" + image + ")");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'body',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__servicioAPI_app_servicioAPI__["a" /* APIservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicioAPI_app_servicioAPI__["a" /* APIservice */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modulo_preguntas_app_component_preguntas__ = __webpack_require__("../../../../../src/app/modulo_preguntas/app.component.preguntas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modulo_resultado_app_component_resultado__ = __webpack_require__("../../../../../src/app/modulo_resultado/app.component.resultado.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modulo_resultado_productos_app_component_producto__ = __webpack_require__("../../../../../src/app/modulo_resultado/productos/app.component.producto.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modulo_preguntas_template_app_component_preguntas_template__ = __webpack_require__("../../../../../src/app/modulo_preguntas_template/app.component.preguntas.template.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modulo_barraNav_app_component_nav__ = __webpack_require__("../../../../../src/app/modulo_barraNav/app.component.nav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servicioAPI_app_servicioAPI__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicioAPI_mypost_service__ = __webpack_require__("../../../../../src/app/servicioAPI/mypost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__servicioAPI_app_servicioHttpConbinaciones__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioHttpConbinaciones.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_app_pipe_preguntas__ = __webpack_require__("../../../../../src/app/pipes/app.pipe.preguntas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modulo_resultado_componente_post_mypost_component__ = __webpack_require__("../../../../../src/app/modulo_resultado/componente_post/mypost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directivas_mypost_directive__ = __webpack_require__("../../../../../src/app/directivas/mypost.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_app_pipe_respuestas__ = __webpack_require__("../../../../../src/app/pipes/app.pipe.respuestas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_app_pipe_respuestas2__ = __webpack_require__("../../../../../src/app/pipes/app.pipe.respuestas2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_app_pipe_array__ = __webpack_require__("../../../../../src/app/pipes/app.pipe.array.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__modulo_preguntas_app_component_preguntas__["a" /* appComponentPreguntas */],
            __WEBPACK_IMPORTED_MODULE_9__modulo_preguntas_template_app_component_preguntas_template__["a" /* appComponentPreguntasTemplate */],
            __WEBPACK_IMPORTED_MODULE_7__modulo_resultado_app_component_resultado__["a" /* appComponentResultado */],
            __WEBPACK_IMPORTED_MODULE_8__modulo_resultado_productos_app_component_producto__["a" /* Producto */],
            __WEBPACK_IMPORTED_MODULE_17__modulo_resultado_componente_post_mypost_component__["a" /* MyPostComponent */],
            __WEBPACK_IMPORTED_MODULE_18__directivas_mypost_directive__["a" /* MyPostDirective */],
            __WEBPACK_IMPORTED_MODULE_10__modulo_barraNav_app_component_nav__["a" /* appNav */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_app_pipe_preguntas__["a" /* UniquePipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_app_pipe_respuestas__["a" /* respPipe */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_app_pipe_respuestas2__["a" /* respPipe2 */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_app_pipe_array__["a" /* KeysPipe */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__modulo_resultado_productos_app_component_producto__["a" /* Producto */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__servicioAPI_app_servicioAPI__["a" /* APIservice */],
            __WEBPACK_IMPORTED_MODULE_13__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */],
            __WEBPACK_IMPORTED_MODULE_12__servicioAPI_mypost_service__["a" /* MyPostService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modulo_resultado_app_component_resultado__ = __webpack_require__("../../../../../src/app/modulo_resultado/app.component.resultado.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulo_preguntas_app_component_preguntas__ = __webpack_require__("../../../../../src/app/modulo_preguntas/app.component.preguntas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var appRoutes = [
    {
        path: 'resultado',
        component: __WEBPACK_IMPORTED_MODULE_1__modulo_resultado_app_component_resultado__["a" /* appComponentResultado */]
    },
    {
        path: 'encuesta',
        component: __WEBPACK_IMPORTED_MODULE_2__modulo_preguntas_app_component_preguntas__["a" /* appComponentPreguntas */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__modulo_preguntas_app_component_preguntas__["a" /* appComponentPreguntas */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/constructor.survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return survey; });
var survey = (function () {
    function survey(id, idPregunta, idSubrespNivel1, idSubrespNivel2, idSubrespNivel3, idSubrespNivel4, idSubrespNivel5, idSubrespNivel6, idSubrespuestas, idTipocuestionario, idrespuestas) {
        this.id = id;
        this.idPregunta = idPregunta;
        this.idSubrespNivel1 = idSubrespNivel1;
        this.idSubrespNivel2 = idSubrespNivel2;
        this.idSubrespNivel3 = idSubrespNivel3;
        this.idSubrespNivel4 = idSubrespNivel4;
        this.idSubrespNivel5 = idSubrespNivel5;
        this.idSubrespNivel6 = idSubrespNivel6;
        this.idSubrespuestas = idSubrespuestas;
        this.idTipocuestionario = idTipocuestionario;
        this.idrespuestas = idrespuestas;
    }
    return survey;
}());

//# sourceMappingURL=constructor.survey.js.map

/***/ }),

/***/ "../../../../../src/app/directivas/mypost.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPostDirective = (function () {
    function MyPostDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return MyPostDirective;
}());
MyPostDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Directive */])({
        selector: '[cpMyPost]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */]) === "function" && _a || Object])
], MyPostDirective);

var _a;
//# sourceMappingURL=mypost.directive.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_barraNav/app.component.nav.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"nav\">-->\r\n\r\n<!--  <li class=\"nav-item\">-->\r\n<!--    <a class=\"nav-link active\" href=\"#\">-->\r\n<!--      <img src=\"http://www.hydradermica.com/wp-content/uploads/2017/04/LOGO-HORIZONTAL2.png\"></a>-->\r\n<!--     </li>  -->\r\n\r\n<!--</ul>-->"

/***/ }),

/***/ "../../../../../src/app/modulo_barraNav/app.component.nav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appNav; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var appNav = (function () {
    function appNav() {
    }
    return appNav;
}());
appNav = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/modulo_barraNav/app.component.nav.html") //,
        //styleUrls: ['../../files/css/bootstrap.min.css']
    })
], appNav);

//# sourceMappingURL=app.component.nav.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_preguntas/app.component.preguntas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appComponentPreguntas; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appComponentPreguntas = (function () {
    function appComponentPreguntas(apiservice, modalService, router, config) {
        this.apiservice = apiservice;
        this.modalService = modalService;
        this.router = router;
        config.interval = 0;
        config.wrap = true;
        config.keyboard = true;
    }
    appComponentPreguntas.prototype.onSlideClicked = function (value) {
        this.apiservice.change(/\d+$/g.exec(value.activeId)[0]);
    };
    appComponentPreguntas.prototype.colorBarraHorizontal = function (actual, pintar) {
        return ++actual <= pintar ? "#d1ddec" : "#234369";
    };
    appComponentPreguntas.prototype.loadComments2 = function () {
        var _this = this;
        this.apiservice.getComments2()
            .subscribe(function (cuestionarios) { return _this.cuestionarios = cuestionarios; }, function (err) {
            console.log(err);
        });
    };
    appComponentPreguntas.prototype.open = function (content) {
        this.modalService.open(content);
    };
    appComponentPreguntas.prototype.ngOnInit = function () {
        this.loadComments2();
        this.apiservice.resultadosMostrar = false;
    };
    return appComponentPreguntas;
}());
appComponentPreguntas = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-preguntas',
        providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */]],
        template: __webpack_require__("../../../../../src/app/modulo_preguntas/app.component.preguntas1.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__["a" /* APIservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__["a" /* APIservice */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselConfig */]) === "function" && _d || Object])
], appComponentPreguntas);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.preguntas.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_preguntas/app.component.preguntas1.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\">\r\n    <ngb-carousel class=\"h-100\" #myCarousel=\"ngbCarousel\" (click)=\"onSlideClicked(myCarousel)\">       \r\n        <ng-template ngbSlide *ngFor=\"let cuestionario of cuestionarios;let i = index\" id=\"slide_{{i}}\">\r\n       \r\n            <img src=\"assets/pregunta1.png\" class=\"img_carousel\" alt=\"1\">   \r\n            \r\n            <div class=\"carousel-caption\" style=\"padding:0\">\r\n            <div class=\"row container-cabezera\">\r\n                <div class=\"col-12 col-sm-10 text ff1 header\"><p>Diagn&oacute;stico de la piel</p></div>\r\n                <div class=\"col-12 col-sm-2 text ff1 header\"> <a class=\"link-no-underline\" href=\"http://www.hydradermica.com\">cerrar</a></div>\r\n            </div>\r\n             <div class=\"row container-cabezera\">\r\n                <div class=\"col-12\">\r\n                    <app-preguntas-template \r\n                        [indice]=\"i\"\r\n                        [carousel] = \"myCarousel\"    \r\n                    ></app-preguntas-template>  \r\n                </div>\r\n             </div>   \r\n                <div class=\"row justify-content-center container-logo\">\r\n                   \r\n                    <div class=\"col-12 col-sm-9 contenedor-logo-preguntas-flex\">\r\n                        <div class=\"div-superior-logo-preguntas\"></div>\r\n                    <div class=\"row justify-content-center \">\r\n                        <div class=\"col-12 col-sm-8\">\r\n                            <div class=\"row container-botton-enviar\" *ngIf=\"apiservice.mostrarBottonEnviar\">\r\n                                <div class=\"col-12\">\r\n                                    <a routerLink=\"/resultado\" routerLinkActive=\"active\">\r\n                                        <button type=\"button\" class=\"btn btn-primary btn-lg sharp btn-outline\" (click)=\"apiservice.resultados()\" (click)=onSlideClicked({activeId:4})>\r\n                                                Enviar \r\n                                        </button>\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"col-12\">\r\n                                <div class=\"row justify-content-center\">\r\n                                    <div class=\"col-2 contendedor-barra-horizontal\">\r\n                                        <div [style.backgroundColor]=\"colorBarraHorizontal(i, 0)\" class=\"barra-horizontal\" (click)=\"myCarousel.select('slide_0')\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-2 contendedor-barra-horizontal\">\r\n                                        <div [style.backgroundColor]=\"colorBarraHorizontal(i, 1)\" class=\"barra-horizontal\" (click)=\"myCarousel.select('slide_1')\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-2 contendedor-barra-horizontal\">\r\n                                        <div [style.backgroundColor]=\"colorBarraHorizontal(i, 2)\" class=\"barra-horizontal\" (click)=\"myCarousel.select('slide_2')\"></div>\r\n                                    </div>\r\n                                    <div class=\"col-2 contendedor-barra-horizontal\">\r\n                                        <div [style.backgroundColor]=\"colorBarraHorizontal(i, 3)\" class=\"barra-horizontal\" (click)=\"myCarousel.select('slide_3')\"></div>\r\n                                    </div>\r\n                                 \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <img class=\"logo-preguntas\" src=\"../../assets/logo.png\" alt=\"1\">\r\n                    </div>\r\n                </div>         \r\n            </div> \r\n            \r\n        </ng-template>       \r\n    </ngb-carousel>\r\n    \r\n    </div>\r\n\r\n    "

/***/ }),

/***/ "../../../../../src/app/modulo_preguntas_template/app.component.preguntas.template.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let cuestionario of cuestionarios; let i = index;\">\r\n  <div *ngIf=\"cuestionario.id==indice+1\" class=\"custionario-container\" >\r\n  <div *ngIf=\"cuestionario.idTipocuestionario.id==1\" >\r\n       <div class=\"row\" >\r\n        <div class=\"col-12 texto-pregunta\">\r\n        {{cuestionario.idPregunta.pregunta.trim() || '&nbsp;'}} \r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <ng-container *ngFor=\"let s of cuestionario.idrespuestas|respPipe ; let j = index\" class=\"btn-preguntas\">\r\n        <div class=\"col-md-2 col-12 contenedor-botton\">\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-12 col-8\" > \r\n               <button\r\n                 type=\"button\" \r\n                 class=\"btn btn-primary btn-lg sharp btn-selected btn-outline btn-block\" \r\n                 (click)=\"rellenarRespuestas(i, s.id, j, s.respuesta)\"\r\n                 (click)=\"toResp()\"\r\n                 [ngClass]=\"{'btn-selected': apiservice.btnSlected[i][j]}\"\r\n               >\r\n                    {{capitalizeFirstLetter(s.respuesta.toLowerCase())}}  \r\n               </button>\r\n            </div> \r\n          </div>\r\n        </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"cuestionario.idTipocuestionario.id==2\">\r\n      <div class=\"row\" >\r\n        <div class=\"col-12 texto-pregunta\" style=\"text-align:left\">\r\n          {{cuestionario.idPregunta.pregunta.trim() || '&nbsp;'}} \r\n        </div>\r\n        <div class=\"col-12\" style=\"text-align:left\"> \r\n          <div class=\"div-exterior-select btn \" style=\"text-align:left\">\r\n          <select style=\r\n            \"\r\n            padding-left:0px;\r\n            padding-right:0px;\r\n            color:#234369 !important;\r\n            font-family: 'Questrial', sans-serif !important;\r\n            font-size: 135%  !important;\r\n            \" \r\n            class=\"selectPregunta\" \r\n            name=\"indice\" \r\n            (change)=\"toResp()\" \r\n            class=\"btn\" \r\n            [(ngModel)]=\"apiservice.respuestas[indice].resp\"\r\n            (ngModelChange)=\"onChange($event, indice, cuestionario.idrespuestas, false)\"\r\n          >\r\n            <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n            <option class=\"opcion-select\"  [value]=\"s.id\" *ngFor=\"let s of cuestionario.idrespuestas|respPipe; let i = index\" [value]=\"s.respuesta\">\r\n            {{s.respuesta}}\r\n            </option>\r\n          </select>\r\n          </div>\r\n        </div>\r\n    \r\n       <div style=\"text-align:left\" class=\"col-12\" *ngFor=\"let d of cuestionario.idSubrespuestas|respPipe2:apiservice.respuestas[indice].resp;let j = index\">\r\n          <div class=\"div-exterior-select btn\">\r\n          <select style=\r\n          \"\r\n          padding-left:0px;\r\n          padding-right:0px;\r\n          color:#234369 !important;\r\n          font-family: 'Questrial', sans-serif !important;\r\n          font-size: 135%  !important;\r\n          \" \r\n            class=\"selectPregunta btn\" \r\n            name=\"indice\"\r\n            [(ngModel)]=\"apiservice.respuestas[indice].subresp[j].id\" \r\n            (click)=\"toResp()\" \r\n            (ngModelChange)=\"onChange($event, i, d, true, j)\"\r\n            >\r\n            <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n            <option [value]=\"d.idsubrespuesta1.id\">{{d.idsubrespuesta1.respuesta}}</option>\r\n            <option [value]=\"d.idsubrespuesta2.id\">{{d.idsubrespuesta2.respuesta}}</option>        \r\n          </select>     \r\n          </div>\r\n          <div *ngIf=\"(d.id1.subrespOrigen.id == apiservice.respuestas[indice].subresp[j].id) &&  d.id1.subrespOrigen.id != 1\">\r\n            <div class=\"div-exterior-select btn\">\r\n              <select style=\r\n              \"\r\n              padding-left:0px;\r\n              padding-right:0px;\r\n              color:#234369 !important;\r\n              font-family: 'Questrial', sans-serif !important;\r\n              font-size: 135%  !important;\r\n              \" \r\n                class=\"selectPregunta btn\" \r\n                name=\"indice\" \r\n                [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+1].id\" \r\n                (click)=\"toResp()\"\r\n                (ngModelChange)=\"onChange($event, i, d.id1, true, j+1)\"\r\n                >\r\n              <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n              <option [value]=\"d.id1.idsubrespuesta1.id\">{{d.id1.idsubrespuesta1.respuesta}}</option> \r\n              <option [value]=\"d.id1.idsubrespuesta2.id\">{{d.id1.idsubrespuesta2.respuesta}}</option>       \r\n              </select>     \r\n            </div>\r\n          </div>\r\n    \r\n          <div *ngIf=\"d.id2.subrespOrigen.id == apiservice.respuestas[indice].subresp[j].id &&  d.id2.subrespOrigen.id != 1\">\r\n            <div class=\"div-exterior-select btn\">\r\n              <select style=\r\n              \"\r\n              padding-left:0px;\r\n              padding-right:0px;\r\n              color:#234369 !important;\r\n              font-family: 'Questrial', sans-serif !important;\r\n              font-size: 135%  !important;\r\n              \" \r\n                class=\"selectPregunta btn\" \r\n                name=\"indice\" \r\n                 [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+1].id\" \r\n                (click)=\"toResp()\" \r\n                (ngModelChange)=\"onChange($event, i, d.id2, true, j+1)\">\r\n                <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n                <option [value]=\"d.id2.idsubrespuesta1.id\">{{d.id2.idsubrespuesta1.respuesta}}</option> \r\n                <option [value]=\"d.id2.idsubrespuesta2.id\">{{d.id2.idsubrespuesta2.respuesta}}</option>            \r\n              </select>     \r\n            </div>\r\n          </div>    \r\n\r\n          <div *ngIf=\"d.id1.id1.subrespOrigen.id == apiservice.respuestas[indice].subresp[j+1].id && d.id1.id1.subrespOrigen.id != 1\">\r\n             <div class=\"div-exterior-select btn\">\r\n              <select style=\r\n              \"\r\n              padding-left:0px;\r\n              padding-right:0px;\r\n              color:#234369 !important;\r\n              font-family: 'Questrial', sans-serif !important;\r\n              font-size: 135%  !important;\r\n              \" \r\n                class=\"selectPregunta btn\"\r\n                name=\"indice\" \r\n                [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+2].id\"\r\n                (click)=\"toResp()\" \r\n                (ngModelChange)=\"onChange($event, i, d.id1.id1, true, j+2)\" \r\n                >\r\n                <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n              <option [value]=\"d.id1.id1.idsubrespuesta1.id\">{{d.id1.id1.idsubrespuesta1.respuesta}}</option> \r\n              <option [value]=\"d.id1.id1.idsubrespuesta2.id\">{{d.id1.id1.idsubrespuesta2.respuesta}}</option>               \r\n              </select>     \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n  </div>\r\n</ng-container>\r\n\r\n<!--\r\n   \r\n    <div *ngFor=\"let d of cuestionario.idSubrespuestas|respPipe2:apiservice.respuestas[indice].resp;let j = index\">\r\n      <select name=\"indice\" class=\"btn-group\" [(ngModel)]=\"apiservice.respuestas[indice].subresp[j]\" (change)=toSet(indice)>\r\n            <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n        <option [value]=\"d.idsubrespuesta1.id\">{{d.idsubrespuesta1.respuesta}}</option> \r\n        <option [value]=\"d.idsubrespuesta2.id\">{{d.idsubrespuesta2.respuesta}}</option>        \r\n      </select>  \r\n\r\n      <div *ngIf=\"d.id1.subrespOrigen.id == apiservice.respuestas[indice].subresp[j]\">\r\n        <select name=\"indice2\" class=\"btn-group\" [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+1]\" (change)=toSet(indice,(j+1))>\r\n            <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n          <option [value]=\"d.id1.idsubrespuesta1.id\">{{d.id1.idsubrespuesta1.respuesta}}</option> \r\n          <option [value]=\"d.id1.idsubrespuesta2.id\">{{d.id1.idsubrespuesta2.respuesta}}</option>        \r\n        </select> \r\n      </div>\r\n\r\n      <div *ngIf=\"d.id2.subrespOrigen.id == apiservice.respuestas[indice].subresp[j]\">\r\n          <select name=\"indice\" class=\"btn-group\" [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+1]\" (change)=toSet(indice,(j+1\r\n            <option class=\"opcion-select\"  [value]=\"1\" selected disabled>Selecciona una opci&oacute;n</option>\r\n            <option [value]=\"d.id2.idsubrespuesta1.id\">{{d.id2.idsubrespuesta1.respuesta}}</option> \r\n            <option [value]=\"d.id2.idsubrespuesta2.id\">{{d.id2.idsubrespuesta2.respuesta}}</option>        \r\n          </select> \r\n      </div>    \r\n\r\n        <div *ngIf=\"d.id1.id1.subrespOrigen.id == apiservice.respuestas[indice].subresp[j+1]\">\r\n          <select name=\"indice2\" class=\"btn-group\" [(ngModel)]=\"apiservice.respuestas[indice].subresp[j+2]\">\r\n            <option [value]=\"d.id1.id1.idsubrespuesta1.id\">{{d.id1.id1.idsubrespuesta1.respuesta}}</option> \r\n            <option [value]=\"d.id1.id1.idsubrespuesta2.id\">{{d.id1.id1.idsubrespuesta2.respuesta}}</option>        \r\n          </select> \r\n        </div>\r\n        \r\n        -->"

/***/ }),

/***/ "../../../../../src/app/modulo_preguntas_template/app.component.preguntas.template.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constructor_survey__ = __webpack_require__("../../../../../src/app/constructor.survey.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appComponentPreguntasTemplate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appComponentPreguntasTemplate = (function () {
    function appComponentPreguntasTemplate(apiservice) {
        this.apiservice = apiservice;
        this.cuestionarios = [];
    }
    appComponentPreguntasTemplate.prototype.loadComments2 = function () {
        var _this = this;
        var that = this;
        this.apiservice.getComments2()
            .subscribe(function (cuestionarios) {
            var i;
            var j;
            cuestionarios.forEach(function (element) {
                var aux = [];
                var aux2 = [];
                var NUMERO_SUBNIVELES = 6;
                for (i = 0; i < 10; i++) {
                    aux[i] = element["idRespuesta" + (i + 1)];
                }
                for (j = 0; j < NUMERO_SUBNIVELES; j++) {
                    aux2[j] = element["idSubrespNivel" + (j + 1)];
                }
                if (element.id == 3) {
                    that.apiservice.DescripcionesConsejos = [];
                    for (var i_1 = 1; i_1 < 6; i_1++) {
                        that.apiservice.DescripcionesConsejos.push(element["idRespuesta" + i_1]);
                    }
                }
                that.apiservice.preguntas.push({ pregunta: element.idPregunta.pregunta, id: element.idPregunta.id });
                var a = new __WEBPACK_IMPORTED_MODULE_2__constructor_survey__["a" /* survey */](element.id, element.idPregunta, element.idSubrespNivel1, element.idSubrespNivel2, element.idSubrespNivel3, element.idSubrespNivel4, element.idSubrespNivel5, element.idSubrespNivel6, aux2, element.idTipocuestionario, aux);
                that.cuestionarios.push(a);
            });
            _this.apiservice.numResp = _this.cuestionarios.length;
            _this.apiservice.initRespuestas();
            for (var i_2 = 0; i_2 < _this.cuestionarios.length; i_2++) {
                _this.apiservice.btnSlected[i_2] = [];
                for (var j_1 = 0; j_1 < _this.cuestionarios[i_2].idrespuestas.length; j_1++) {
                    Number(_this.cuestionarios[i_2].idrespuestas[j_1].respuesta) != 0 ? _this.apiservice.btnSlected[i_2].push(false) : null;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    appComponentPreguntasTemplate.prototype.ngOnInit = function () {
        this.loadComments2();
    };
    appComponentPreguntasTemplate.prototype.toResp = function () {
        this.apiservice.showButton();
    };
    appComponentPreguntasTemplate.prototype.rellenarRespuestas = function (indice, valor, j, respuestaTexto) {
        this.apiservice.respuestas[indice].resp = valor;
        this.apiservice.respuestas[indice].tituloResp = respuestaTexto;
        // console.log(valor, respuestaTexto)
        for (var i = 0; i < this.apiservice.btnSlected[indice].length; i++) {
            if (i == j) {
                this.apiservice.btnSlected[indice][i] = true;
            }
            else {
                this.apiservice.btnSlected[indice][i] = false;
            }
        }
        this.nextSlide();
    };
    appComponentPreguntasTemplate.prototype.capitalizeFirstLetter = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    appComponentPreguntasTemplate.prototype.nextSlide = function () {
        var that = this;
        setTimeout(function () {
            that.carousel.next();
        }, 500);
    };
    appComponentPreguntasTemplate.prototype.toSet = function (indice, indiceJ) {
        var len = this.apiservice.respuestas[indice].subresp;
        for (var index = indiceJ; index < len.length; index++) {
            len[index].id = 1;
        }
    };
    appComponentPreguntasTemplate.prototype.onChange = function (newValue, i, elementRoot, esSubrespuesta, j) {
        var texto;
        if (!esSubrespuesta) {
            var arrayFiltrado = elementRoot.filter(function (element) { return Number(element.id) === Number(newValue); });
            this.apiservice.respuestas[i].resp = newValue;
            texto = arrayFiltrado[arrayFiltrado.length - 1].respuesta;
            this.apiservice.respuestas[i].tituloResp = texto;
        }
        else {
            texto = Number(elementRoot.idsubrespuesta1.id) === Number(newValue) ? elementRoot.idsubrespuesta1.respuesta : elementRoot.idsubrespuesta2.respuesta;
            this.apiservice.respuestas[i].subresp[j].texto = texto;
        }
        // console.log(newValue)
        // console.log(texto)
    };
    return appComponentPreguntasTemplate;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
    __metadata("design:type", Number)
], appComponentPreguntasTemplate.prototype, "indice", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
    __metadata("design:type", Object)
], appComponentPreguntasTemplate.prototype, "carousel", void 0);
appComponentPreguntasTemplate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-preguntas-template',
        template: __webpack_require__("../../../../../src/app/modulo_preguntas_template/app.component.preguntas.template.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__["a" /* APIservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicioAPI_app_servicioAPI__["a" /* APIservice */]) === "function" && _a || Object])
], appComponentPreguntasTemplate);

var _a;
//# sourceMappingURL=app.component.preguntas.template.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/app.component.resultado.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*@import \"/files/css/bootstrap.min.css\";*/\n/*@import \"/files/css/bootstrap.css\";*/\n/*@import url(\"/bootrap-5-cols.css\");*/\n\n\n/*@font-face{font-family:ff1;src:url(/font/f1.woff)format(\"woff\");}*/\n/* div {*/\n/*     font-family: 'Questrial', sans-serif !important;*/\n/* }*/\n \n /**************************\n  DEFAULT BOOTSTRAP STYLES\n**************************/\n\n/*.btn {*/\n/*  display: inline-block;*/\n/*  padding: 6px 12px;*/\n/*  margin-bottom: 0;*/\n/*  font-size: 14px;*/\n/*  font-weight: normal;*/\n/*  line-height: 1.42857143;*/\n/*  text-align: center;*/\n/*  white-space: nowrap;*/\n/*  vertical-align: middle;*/\n/*  cursor: pointer;*/\n/*  -webkit-user-select: none;*/\n/*     -moz-user-select: none;*/\n/*      -ms-user-select: none;*/\n/*          user-select: none;*/\n/*  background-image: none;*/\n/*  border: 1px solid transparent;*/\n/*  border-radius: 4px;*/\n/*  padding: 10px 16px;*/\n/*}*/\n  \n/*.btn-lg {*/\n/*  font-size: 18px;*/\n/*  line-height: 1.33;*/\n/*  border-radius: 6px;*/\n/*}*/\n\n/*.btn-primary {*/\n/*  color: #fff;*/\n/*  background-color: #0000;*/\n/*  border-color: #357ebd;*/\n/*}*/\n\n/*.btn-primary:hover,*/\n/*.btn-primary:focus,*/\n/*.btn-primary:active,*/\n/*.btn-primary.active,*/\n/*.open .dropdown-toggle.btn-primary {*/\n/*  color: #fff;*/\n/*  background-color: #3276b1;*/\n/*  border-color: #285e8e;*/\n/*}*/\n\n/***********************\n  SHARP BUTTONS\n************************/\n/*.sharp {*/\n/*  border-radius:0;*/\n/*}*/\n\n/***********************\n  CUSTON BTN VALUES\n************************/\n\n/*.btn {*/\n/*\tpadding: 5px 20px;*/\n/*\tborder: 0 none;*/\n/*\tfont-weight: 700;*/\n/*\tletter-spacing: 1px;*/\n/*\ttext-transform: uppercase;*/\n/*}*/\n/*.btn:focus, .btn:active:focus, .btn.active:focus {*/\n/*\toutline: 0 none;*/\n/*}*/\n\n/*.btn-primary {*/\n/*\tbackground: white;*/\n/*\tcolor: #234369;*/\n/*  border:2px solid #234369;*/\n  /*transition: 0.5s linear; */\n\n/*}*/\n\n\n/*.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open > .dropdown-toggle.btn-primary {*/\n/*\tbackground: #e3e7ed;*/\n/*\tcolor: #234369;*/\n/*}*/\n\n\n\n\n\n/*.ff1{*/\n/* font-family:ff1;*/\n/* line-height:0.976000;*/\n/* font-style:normal;*/\n/* font-weight:bold;*/\n/* visibility:visible;*/\n/* }*/\n\n/*.btn-primary:active, .btn-primary.active {*/\n/*\tbackground: white;*/\n/*\tcolor: #234369;*/\n/*  border:2px solid #234369;*/\n/*}*/\n\n/*.card-button {*/\n/* text-transform:none; */\n/* padding:2px 20px;*/\n/*  font-size: 15px;*/\n/*}*/\n\n/*.text {*/\n/* color:rgb(79,76,77);*/\n/*}*/\n\n/*.descripcion {*/\n/* padding: 5% 0%;*/\n/* width:100%;*/\n/* text-align: center;*/\n /*margin-left: 1%;*/\n \n/*}*/\n\n/*.header {*/\n/* font-size:200%;*/\n/* font-family: ff1 !important;*/\n /*padding-bottom: 15px;*/\n/*text-decoration: none !important; */\n/*}*/\n\n/*.link-no-underline {*/\n/* text-decoration: none !important; */\n\n/*}*/\n/*.link-no-underline:focus, .link-no-underline:hover, .link-no-underline:active, .link-no-underline:link, .link-no-underline:visited{*/\n/* text-decoration: none !important; */\n/*}*/\n\n/*.title-product {*/\n/* \tcolor: #234369;*/\n/* \tfont-size: 65%;*/\n/* \tfont-weight:bold; */\n/*}*/\n\n/*.card {*/\n/* border: 2px solid #234369;*/\n/* margin-bottom: 20%;*/\n/* \tmargin-left: 20%;*/\n/* \tmargin-right: 20%;*/\n /*margin-left:25%*/\n/*}*/\n\n/*.container-center {*/\n /*height:82%;*/\n/* padding-top: 20px;*/\n/*}*/\n\n/*.footer*/\n/*{*/\n    /*clear:both;*/\n    /*bottom: 0;*/\n    /*height: 18%;*/\n/*    padding:3px;*/\n    /*position: absolute;*/\n/*    text-align:center;*/\n    /*background-color:rgba(111, 111, 111, 0.65);*/\n    /*border-top:1px solid #bbb;*/\n/*    color:#F3F3F3;*/\n/*}*/\n\n/*.footer-text-diagnostico {*/\n/* font-weight: bolder;*/\n/* font-family: ff1 !important;*/\n/* font-size: 120%;*/\n/* padding-left: 25px;*/\n/*}*/\n\n/*.mail-input {*/\n/* border: 2px solid #234369;*/\n/* height: 30px;*/\n/* width: 70%;*/\n/*}*/\n\n/*.sm-padding{ */\n/*    text-align: center;*/\n/*    padding-left:35%; */\n/*    padding-bottom:10%;   */\n/*}*/\n/*.header {*/\n/* text-align: center;*/\n/*}*/\n\n/*.text-desc {*/\n/*    margin-left:10%;*/\n/*    }*/\n\n/*@media (min-width: 992px) {*/\n    \n/*    .text-desc {*/\n/*        margin-left:0%;*/\n/*    }*/\n\n/*    .link-no-underline {*/\n/*      text-decoration: none !important; */\n/*      color:rgb(79,76,77);*/\n\n/*    }*/\n    \n/*    .descripcion {*/\n/*         padding: 0% 5%;*/\n/*         padding-top: 1%;*/\n/*         text-align: left;*/\n/*         margin-left: 0%;*/\n/*    }*/\n    \n/*    .container-cabezera {*/\n/*         height: 20%;*/\n/*         padding-top: 10px;*/\n/*    }*/\n/*    .card {*/\n/*         border: 2px solid #234369;*/\n/*         margin-bottom: 20%;*/\n/*     \tmargin-left: 15%;*/\n/*     \tmargin-right: 15%;*/\n/*     \theight: 100%*/\n/*    }*/\n/*    .card-footer {*/\n/*        padding: 0%;*/\n/*        padding-top: 10%;*/\n        \n/*    }*/\n\n/*    .sm-padding{ */\n/*        padding-left:0%; */\n/*        padding-bottom:0%;   */\n/*    }*/\n    \n/*    .main-content {*/\n/*        height: 100%*/\n/*    }*/\n    \n/*    .container-center {*/\n/*     height:60%;*/\n     /*padding-top: 20px;*/\n/*    }*/\n    \n/*    .header {*/\n/*     text-align: left; */\n/*    }*/\n    \n/*    .rightcol {*/\n       /* border:solid 1px red;\n       position: relative;\n       top: 0%;\n       left: 50%;  */\n       /*border:solid 1px red; */\n/*       overflow-y: scroll;*/\n/*       height: 80%;*/\n       /*padding-right: 10%*/\n/*    }*/\n/*    .footer-text-diagnostico.pregunta {*/\n/*     font-weight: bolder;*/\n/*     font-family: ff1 !important;*/\n/*     font-size: 120%;*/\n/*     padding-left: 25px;*/\n/*     padding-top: 10%;*/\n     \n/*    }*/\n\n/*    .footer*/\n/*    {*/\n        /*clear:both;*/\n/*        bottom: 0;*/\n        /*width: 99%;*/\n        height: auto; /*18% */\n/*        padding:3px;*/\n/*        position: absolute;*/\n/*        text-align:center;*/\n        /*background-color:rgba(111, 111, 111, 0.65);*/\n        /*border-top:1px solid #bbb;*/\n/*        color:#F3F3F3;*/\n/*    }*/\n    \n/*    .container-cabezera {*/\n/*     height:auto;*/\n/*     padding-top: 10px;*/\n/*     padding-left: 20px;*/\n/*}*/\n\n/*}*/\n\n    \n/*.container-cabezera {*/\n/*     height:auto;*/\n/*     padding-top: 10px;*/\n/*}*/\n\n/*.logotipo-footer {*/\n/* width: 100%;*/\n/*}*/\n\n/*.outer {*/\n    /*border:solid 1px #000;*/\n/*}*/\n\n/*.leftcol {*/\n  /* position: fixed;\n   top: 0%;\n   left: 0%; */\n   /*border:solid 1px green;*/\n/*   overflow:hidden;*/\n/*}*/\n\n/*.rightcol {*/\n   /* border:solid 1px red;\n   position: relative;\n   top: 0%;\n   left: 50%;  */\n   /*border:solid 1px red; */\n/*   overflow-y: scroll;*/\n   /*height: 67%;*/\n   /*padding-right: 10%*/\n/*}*/\n\n\n\n\n\n\n\n\n\n\n/*::-webkit-scrollbar {*/\n/*  width: 2px;*/\n/*  height: 2px;*/\n/*}*/\n/*::-webkit-scrollbar-button {*/\n/*  width: 0px;*/\n/*  height: 0px;*/\n/*}*/\n/*::-webkit-scrollbar-thumb {*/\n/*  background: #e1e1e1;*/\n/*  border: 0px none #ffffff;*/\n/*  border-radius: 50px;*/\n/*}*/\n/*::-webkit-scrollbar-thumb:hover {*/\n/*  background: #ffffff;*/\n/*}*/\n/*::-webkit-scrollbar-thumb:active {*/\n/*  background: #000000;*/\n/*}*/\n/*::-webkit-scrollbar-track {*/\n/*  background: #666666;*/\n/*  border: 0px none #ffffff;*/\n/*  border-radius: 50px;*/\n/*}*/\n/*::-webkit-scrollbar-track:hover {*/\n/*  background: #666666;*/\n/*}*/\n/*::-webkit-scrollbar-track:active {*/\n/*  background: #333333;*/\n/*}*/\n/*::-webkit-scrollbar-corner {*/\n/*  background: transparent;*/\n/*}*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/app.component.resultado.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid main-content\">\r\n  <div class=\"container-cabezera row\">\r\n    <div class=\"col-12 col-sm-5 text ff1 header\">Resultado diagn&oacute;stico de la piel</div>\r\n    <div class=\"col-12 col-sm-2 text ff1 header\"><div class=\"div-colores-corporativos\">PIEL {{apiservice.respuestas[2].tituloResp.toUpperCase()}}</div></div>\r\n    <div class=\"col-12 col-sm-3 text ff1\"></div>\r\n    <div class=\"col-12 col-sm-2 text ff1 header\"> <a class=\"link-no-underline\" href=\"http://www.hydradermica.com\">cerrar</a></div>\r\n    <div class=\"col-12 descripcion text\">\r\n      <p class=\"text-desc\">\r\n        {{apiservice.descripcion}}\r\n      </p>\r\n    </div>\r\n    <div class=\"row col-12\">\r\n      <div class=\"col-12\">\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg sharp botton-expand\" (click)=\"isCollapsed = !isCollapsed\"\r\n                [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n          ALGUNOS CONSEJOS PARA TU PIEL +\r\n        </button>\r\n      </div>\r\n      <div class=\"col-12\">\r\n        <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n            <ul class=\"lista-consejos text-desc text\">\r\n              <ng-container *ngFor=\"let consejo of this.apiservice.consejos.split('<br/>')\">\r\n                <li>\r\n                  {{consejo}}\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row container-center justify-content-center\">\r\n      <!--<div class=\"col-xs-4 leftcol fixed\">-->\r\n      <!--    This content needs to stay put while scrolling (aka fixed)-->\r\n      <!--</div>-->\r\n          <div cpMyPost></div>\r\n          <!--<app-mypost></app-mypost>-->\r\n  </div>\r\n  <div class=\"div-tamanyo-dinamico\"></div>\r\n  <div class=\"footer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 text-left\">\r\n            <p class=\"footer-text-diagnostico pregunta text\">¿Quiéres que te envíemos copia del resultado de tu diagnóstico?</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-5 text-left\">\r\n            <div class=\"row\">\r\n              <div class=\"col-2 col-sm-2\" style=\"text-align:right\">\r\n                <p class=\"text footer-text-diagnostico\"  ngDefaultControl>Email:</p>\r\n              </div>\r\n              <div class=\"col-10 col-sm-10 div-padding-zero-right\">\r\n                <p class=\"text footer-text-diagnostico\" [(ngModel)]=\"apiservice.mail\"  ngDefaultControl><input type=\"text\" class=\"mail-input\" name=\"\"/></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"col-12 col-sm-6 text-right text div-padding-zero-left div-padding-zero-right\">\r\n            <div class=\"row\">\r\n              <div class=\"col-11 col-sm-11 text-right text div-padding-zero-right\">He leído la <a class=\"link-politicas-privacidad\" href=\"http://www.hydradermica.com/politica-de-privacidad/\">POLÍTICA DE PRIVACIDAD</a> y la acepto&nbsp;</div>\r\n              <div class=\"col-1 col-sm-1 text-left\" style=\"padding: 0px 0px\">\r\n               <input [(ngModel)]=\"aceptadosTerminos\" type=\"checkBox\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          \r\n          <div class=\"col-3 col-sm-3 text-left\">\r\n          </div>\r\n          <div class=\"col-6 col-sm-2 text-left boton-enviar-margenes div-padding-zero-right\">\r\n            <button type=\"button\" [ngClass]=\"{'desactivado': !aceptadosTerminos || emailValido()}\" class=\"btn btn-primary btn-lg sharp btn-block\" (click)=\"apiservice.createJsonMailObject(aceptadosTerminos)\">Enviar</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-sm-12 texto-advertencia-final text text-left\">\r\n              *Este resultado no pretende, en ningún caso, sustituir un diagnóstico médico. Es de tipo general y por tanto no puede tener en cuenta las circunstancias específicas de cada persona. Existen productos cosmecéuticos que cuando se aplican pueden causar una reacción alérgica en personas sensibles, por  lo que Hydradermica no se hace responsable de cualquier problema derivado de un mal uso de sus productos.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n          </div>\r\n          <div class=\"col-12 col-sm-8\">\r\n            <img class=\"logotipo-footer\" src=\"assets/logo.png\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/app.component.resultado.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicioAPI_app_servicioAPI__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioAPI.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicioAPI_mypost_service__ = __webpack_require__("../../../../../src/app/servicioAPI/mypost.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicioAPI_app_servicioHttpConbinaciones__ = __webpack_require__("../../../../../src/app/servicioAPI/app.servicioHttpConbinaciones.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componente_post_mypost_component__ = __webpack_require__("../../../../../src/app/modulo_resultado/componente_post/mypost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directivas_mypost_directive__ = __webpack_require__("../../../../../src/app/directivas/mypost.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appComponentResultado; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var appComponentResultado = (function () {
    function appComponentResultado(route, router, apiservice, httpConbinaciones, postService) {
        this.route = route;
        this.router = router;
        this.apiservice = apiservice;
        this.httpConbinaciones = httpConbinaciones;
        this.postService = postService;
        this.isCollapsed = true;
        this.respuestas = [];
        this.aceptadosTerminos = false;
        this.productos = [];
        this.returnHome();
    }
    appComponentResultado.prototype.loadComments3 = function (callback) {
        var _this = this;
        var that = this;
        this.apiservice.getComments3()
            .subscribe(function (productoss) { return _this.productoss = productoss; }, function (err) {
            console.log(err);
        }, function () {
            callback(that.productoss);
        });
    };
    appComponentResultado.prototype.onUrl = function (param) {
        window.location.href = param;
    };
    appComponentResultado.prototype.rellenarRespuestas = function (params) {
        var that = this;
        this.apiservice.respuestas.forEach(function (element, index) {
            that.respuestas.push({ respuesta: element.resp, subrespuestas: element.subresp });
        });
    };
    appComponentResultado.prototype.ngOnInit = function () {
        var that = this;
        this.apiservice.enviarLog();
        this.loadComments3(function (productoss) {
            that.route.params.subscribe(function (params) {
                that.rellenarRespuestas(params);
                var resp = that.apiservice.respuestas;
                that.postItems = that.postService.getAllPosts(that.productoss, resp, that.httpConbinaciones);
                that.postItems.forEach(function (element, index) {
                    that.postService.loadComponent(that.myPostDirective.viewContainerRef, element);
                });
            });
        });
    };
    appComponentResultado.prototype.returnHome = function () {
        if (!this.apiservice.resultadosMostrar)
            this.router.navigate(['/']);
    };
    appComponentResultado.prototype.emailValido = function () {
        var mailREGXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !mailREGXP.test(this.apiservice.mail);
    };
    return appComponentResultado;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__directivas_mypost_directive__["a" /* MyPostDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__directivas_mypost_directive__["a" /* MyPostDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__directivas_mypost_directive__["a" /* MyPostDirective */]) === "function" && _a || Object)
], appComponentResultado.prototype, "myPostDirective", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5__componente_post_mypost_component__["a" /* MyPostComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__componente_post_mypost_component__["a" /* MyPostComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__componente_post_mypost_component__["a" /* MyPostComponent */]) === "function" && _b || Object)
], appComponentResultado.prototype, "myPostComponent", void 0);
appComponentResultado = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-resultado',
        template: __webpack_require__("../../../../../src/app/modulo_resultado/app.component.resultado.html"),
        styles: [__webpack_require__("../../../../../src/app/modulo_resultado/app.component.resultado.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__servicioAPI_app_servicioAPI__["a" /* APIservice */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicioAPI_app_servicioAPI__["a" /* APIservice */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicioAPI_app_servicioHttpConbinaciones__["a" /* HttpConbinaciones */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__servicioAPI_mypost_service__["a" /* MyPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicioAPI_mypost_service__["a" /* MyPostService */]) === "function" && _g || Object])
], appComponentResultado);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.resultado.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/componente_post/mypost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPostComponent = (function () {
    function MyPostComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    return MyPostComponent;
}());
MyPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-mypost',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ViewContainerRef */]) === "function" && _a || Object])
], MyPostComponent);

var _a;
//# sourceMappingURL=mypost.component.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/contenedorPostItem/post-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostItem; });
var PostItem = (function () {
    function PostItem(component, data) {
        this.component = component;
        this.data = data;
    }
    return PostItem;
}());

//# sourceMappingURL=post-item.js.map

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/productos/app.component.producto.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <!--<div *ngIf=\"seMuestra\">-->\r\n    <!--<p>mos</p>-->\r\n    <!--<div class=\"card\" *ngIf=\"post.seMuestra\" >-->\r\n    <div class=\"card\">\r\n    <img [src]=\"post.rutaImagen\" class=\"card-img-top\" alt=\"Card image cap\" >\r\n      <div class=\"card-block\">\r\n      </div> \r\n      <div class=\"card-footer text-center\">\r\n        <div class=\"contenedor-texto-card\">\r\n          <p class=\"title-product\">{{post.producto}}</p>\r\n        </div>\r\n        <div class=\"div-tamanyo-dinamico\">\r\n        </div>\r\n        <div class=\"contendeor-boton-card-footer\">\r\n          <button type=\"button\" (click)=\"onUrl(post.rutaInfo)\" class=\"btn btn-primary btn-lg sharp card-button\" >\r\n            ver más\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modulo_resultado/productos/app.component.producto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Producto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// https://www.concretepage.com/angular-2/angular-2-4-dynamic-component-loader-example#dynamic-components
var Producto = (function () {
    function Producto() {
    }
    Producto.prototype.onUrl = function (url) {
        window.location.href = url;
    };
    return Producto;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
    __metadata("design:type", Object)
], Producto.prototype, "post", void 0);
Producto = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-producto',
        template: __webpack_require__("../../../../../src/app/modulo_resultado/productos/app.component.producto.html"),
        host: { 'class': 'col-12 col-md-101' }
    })
], Producto);

//# sourceMappingURL=app.component.producto.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/app.pipe.array.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=app.pipe.array.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/app.pipe.preguntas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value) {
        if (value !== undefined && value !== null) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, 'producto');
        }
        return value;
    };
    return UniquePipe;
}());
UniquePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'unique',
        pure: false
    })
], UniquePipe);

//# sourceMappingURL=app.pipe.preguntas.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/app.pipe.respuestas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return respPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var respPipe = (function () {
    function respPipe() {
    }
    respPipe.prototype.transform = function (value) {
        return value.filter(function (s) {
            return s.id != 1;
        });
    };
    return respPipe;
}());
respPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'respPipe'
    })
], respPipe);

//# sourceMappingURL=app.pipe.respuestas.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/app.pipe.respuestas2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return respPipe2; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Tell Angular2 we're creating a Pipe with TypeScript decorators
var respPipe2 = (function () {
    function respPipe2() {
    }
    // Transform is the new "return function(value, args)" in Angular 1.x
    respPipe2.prototype.transform = function (value, arg) {
        // ES6 array destructuring
        var id = arg;
        return value.filter(function (d) {
            return d.subrespOrigen.id == id;
        });
    };
    return respPipe2;
}());
respPipe2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Pipe */])({
        name: 'respPipe2'
    })
], respPipe2);

//# sourceMappingURL=app.pipe.respuestas2.js.map

/***/ }),

/***/ "../../../../../src/app/quest2.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cuesto2; });
var Cuesto2 = (function () {
    function Cuesto2(resp, tituloResp, subresp) {
        this.resp = resp;
        this.tituloResp = tituloResp;
        this.subresp = subresp;
        this.subresp = [
            { id: 1, texto: "" },
            { id: 1, texto: "" },
            { id: 1, texto: "" }
        ];
    }
    return Cuesto2;
}());

//# sourceMappingURL=quest2.interface.js.map

/***/ }),

/***/ "../../../../../src/app/servicioAPI/app.servicioAPI.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quest2_interface__ = __webpack_require__("../../../../../src/app/quest2.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIservice; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var APIservice = (function () {
    function APIservice(http) {
        // console.log("creado servicio api")
        this.http = http;
        this.backgrounds = [
            'assets/pregunta1.png',
            'assets/pregunta2.png',
            'assets/pregunta3.png',
            'assets/pregunta4.png',
            'assets/solucion.png'
        ];
        this.bck = 'assets/pregunta1.png';
        this.respuestas = [];
        this.btnSlected = [];
        this.resultadosMostrar = false;
        this.mostrarBottonEnviar = false;
        this.preguntas = [];
        this.DescripcionesConsejos = [];
        // public SurveyUrl  = "http://192.168.10.106/hydradermica/web/app_dev.php/conexion"; 
        // public ProductospUrl = "http://192.168.10.106/hydradermica/web/app_dev.php/productos"; 
        this.SurveyUrl = "assets/json/conexion.json";
        this.ProductospUrl = "assets/json/productos.json";
        this.LogUrl = "http://192.168.10.11/hydradermica/web/app_dev.php/Log";
        this.mailUrl = "http://192.168.10.11/hydradermica/web/app_dev.php/Mail";
    }
    APIservice.prototype.initRespuestas = function () {
        for (var index = 0; index < this.numResp; index++) {
            this.respuestas[index] = new __WEBPACK_IMPORTED_MODULE_3__quest2_interface__["a" /* Cuesto2 */](1, "", []);
        }
    };
    APIservice.prototype.change = function (i) {
        this.bck = this.backgrounds[i];
    };
    APIservice.prototype.getComments2 = function () {
        return this.http.get(this.SurveyUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ;
    APIservice.prototype.getComments3 = function () {
        return this.http.get(this.ProductospUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ;
    APIservice.prototype.putQuest = function (obj) {
        var json = JSON.stringify(obj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ "Content-Type": "application/json" });
        return this.http.post(this.mailUrl, json, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIservice.prototype.putLog = function (obj) {
        var json = JSON.stringify(obj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ "Content-Type": "application/json" });
        // console.log("ENVIANDO", json)
        return this.http.post(this.LogUrl, json, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    APIservice.prototype.onLoginSuccess = function (res) {
        //  console.log("BIEN")
        return res.json();
    };
    APIservice.prototype.onError = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.message || error);
    };
    APIservice.prototype.extractData = function (res) {
        console.log(res);
        var json2 = res.json();
        return json2 || {};
    };
    APIservice.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server handle error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    APIservice.prototype.showButton = function () {
        var mostrar = true;
        this.respuestas.forEach(function (element, index) {
            mostrar = (element.resp != 0 && element.resp != 1) && mostrar;
        });
        this.mostrarBottonEnviar = mostrar;
    };
    APIservice.prototype.resultados = function () {
        var that = this;
        this.resultadosMostrar = true;
        this.DescripcionesConsejos.forEach(function (element, index) {
            if (that.respuestas[2].resp == element.id) {
                that.descripcion = element.descripcion;
                that.consejos = element.consejo;
            }
        });
    };
    APIservice.prototype.createJsonMailObject = function (aceptadosTerminos) {
        if (aceptadosTerminos) {
            var obj = void 0;
            obj = {
                "email": this.mail,
                "quest1": this.preguntas[0].pregunta || "SEXO?",
                "resp1": this.respuestas[0].tituloResp,
                "quest2": this.preguntas[1].pregunta,
                "resp2": this.respuestas[1].tituloResp,
                "quest3": this.preguntas[2].pregunta,
                "resp3": this.respuestas[2].tituloResp,
                "quest4": this.preguntas[3].pregunta,
                "resp4": this.respuestas[3].tituloResp,
                "subresp1": this.respuestas[3].subresp[0].texto ? this.respuestas[3].subresp[0].texto : "",
                "subresp2": this.respuestas[3].subresp[1].texto ? this.respuestas[3].subresp[1].texto : "",
                "subresp3": this.respuestas[3].subresp[2].texto ? this.respuestas[3].subresp[2].texto : "",
                "descripcion": this.descripcion,
                "consejos": this.consejos
            };
            this.putQuest(obj).subscribe(function (data) { return console.log(data); });
        }
        else {
            console.error("acepta los terminos");
        }
    };
    APIservice.prototype.createObjLog = function () {
        return {
            'idCuestionario': 0,
            'quest1': this.preguntas[0].id,
            'resp1': this.respuestas[0].resp,
            'quest2': this.preguntas[1].id,
            'resp2': this.respuestas[1].resp,
            'quest3': this.preguntas[2].id,
            'resp3': this.respuestas[2].resp,
            'quest4': this.preguntas[3].id,
            'resp4': Number(this.respuestas[3].resp),
            'subresp1': Number(this.respuestas[3].subresp[0].id) || 1,
            'subresp2': Number(this.respuestas[3].subresp[1].id) || 1,
            'subresp3': Number(this.respuestas[3].subresp[2].id) || 1,
            email: "prueba_final@ff.com",
            fecha: "01/01/2017"
        };
    };
    APIservice.prototype.enviarLog = function () {
        var log = this.createObjLog();
        this.putLog(log).subscribe(function (data) { return console.log(data); });
    };
    return APIservice;
}());
APIservice.IP = "http://169.154.11.26";
APIservice.SERVER_PATH = "hydradermica/web/app_dev.php";
APIservice = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], APIservice);

var _a;
//# sourceMappingURL=app.servicioAPI.js.map

/***/ }),

/***/ "../../../../../src/app/servicioAPI/app.servicioHttpConbinaciones.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConbinaciones; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpConbinaciones = HttpConbinaciones_1 = (function () {
    function HttpConbinaciones(http) {
        var _this = this;
        this.http = http;
        // console.log("creado el servicio http resultado");
        this.http.get(HttpConbinaciones_1.SREVER_PATH + HttpConbinaciones_1.PATH + HttpConbinaciones_1.EXT).subscribe(function (data) {
            _this.productosConbinaciones = data;
        });
        this.http.get("https://jsonip.com").subscribe(function (data) {
            _this.ip = data["ip"];
        });
    }
    return HttpConbinaciones;
}());
HttpConbinaciones.SREVER_PATH = "assets/json";
HttpConbinaciones.EXT = ".json";
HttpConbinaciones.PATH = '/conbinaciones';
HttpConbinaciones = HttpConbinaciones_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], HttpConbinaciones);

var HttpConbinaciones_1, _a;
//# sourceMappingURL=app.servicioHttpConbinaciones.js.map

/***/ }),

/***/ "../../../../../src/app/servicioAPI/mypost.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modulo_resultado_contenedorPostItem_post_item__ = __webpack_require__("../../../../../src/app/modulo_resultado/contenedorPostItem/post-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modulo_resultado_productos_app_component_producto__ = __webpack_require__("../../../../../src/app/modulo_resultado/productos/app.component.producto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyPostService = (function () {
    function MyPostService(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    MyPostService.prototype.loadComponent = function (viewContainerRef, postItem) {
        // console.log(postItem.data.seMuestra ? "si" : "no")
        if (postItem.data.seMuestra) {
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(postItem.component);
            // 		viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            var myPost = componentRef.instance;
            myPost.post = postItem.data;
        }
    };
    MyPostService.prototype.calcularConbinaciones = function (respuestas, id, servicioHttpConbinaciones) {
        var conb = servicioHttpConbinaciones.productosConbinaciones[id - 1];
        for (var _i = 0; _i < conb.conbinaciones.length; _i++) {
            var auxiliarBooleano = true;
            for (var _j = 0; _j < conb.conbinaciones[_i].length; _j++) {
                var element = conb.conbinaciones[_i][_j];
                if (!element.subrespuesta) {
                    // console.log("id resp", Number(respuestas[element.id_pregunta - 1].resp))
                    // console.log("id resp en conb", element.id_respuesta)
                    auxiliarBooleano = (auxiliarBooleano &&
                        (Number(respuestas[element.id_pregunta - 1].resp) === element.id_respuesta));
                }
                else {
                    // console.log("id subresp", respuestas[element.id_pregunta - 1].subresp[_j - 2])
                    // console.log("id resp en conb", element.id_respuesta)
                    auxiliarBooleano = (auxiliarBooleano &&
                        (Number(respuestas[element.id_pregunta - 1].subresp[_j - 2].id) === element.id_respuesta));
                }
            }
            if (auxiliarBooleano) {
                return true;
            }
        }
        return false;
    };
    MyPostService.prototype.getAllPosts = function (productoss, resp, httpConbinaciones) {
        var postArray = [];
        var that = this;
        this.respuestas = resp;
        productoss.forEach(function (element, index) {
            //if(index < 1) {
            var obj = {
                id: element.id,
                producto: element.producto,
                descripcion: element.descripcion,
                rutaImagen: element.rutaImagen,
                rutaInfo: element.rutaInfo,
                httpConbinaciones: httpConbinaciones,
                //   seMuestra:true
                seMuestra: that.calcularConbinaciones(resp, element.id, httpConbinaciones)
            };
            postArray.push(new __WEBPACK_IMPORTED_MODULE_1__modulo_resultado_contenedorPostItem_post_item__["a" /* PostItem */](__WEBPACK_IMPORTED_MODULE_2__modulo_resultado_productos_app_component_producto__["a" /* Producto */], obj));
            //}
        });
        return postArray;
    };
    return MyPostService;
}());
MyPostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], MyPostService);

var _a;
//# sourceMappingURL=mypost.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map