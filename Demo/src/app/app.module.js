"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
// import {NgxPaginationModule} from 'ngx-pagination';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        //  imports:      [ BrowserModule,NgxPaginationModule],
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { ProductFormComponent } from './product-form.component';
// @NgModule ({
//    imports: [ BrowserModule,FormsModule],
//    declarations: [ AppComponent,ProductFormComponent],
//    bootstrap: [ AppComponent ]
// })
// export class AppModule { }
// import { NgModule } from '@angular/core'; 
// import { BrowserModule } from '@angular/platform-browser'; 
// import { AppComponent } from './app.component'; 
// import { Appproduct } from './product.component' 
// import { AppInventory } from  './Inventory.component' 
// import { PageNotFoundComponent } from  './NotFound.component' 
// import { RouterModule, Routes } from '@angular/router';  
// const appRoutes: Routes = [ 
//    { path: 'Product', component: Appproduct }, 
//    { path: 'Inventory', component: AppInventory }, 
//    { path: '**', component: PageNotFoundComponent } 
// ];  
// @NgModule ({ 
//    imports: [ BrowserModule, 
//    RouterModule.forRoot(appRoutes)], 
//    declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent], 
//    bootstrap: [ AppComponent ] 
// }) 
// export class AppModule {
// }  
//# sourceMappingURL=app.module.js.map