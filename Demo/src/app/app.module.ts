import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
// import {NgxPaginationModule} from 'ngx-pagination';

@NgModule ({
  //  imports:      [ BrowserModule,NgxPaginationModule],
    imports:      [ BrowserModule],
   declarations: [ AppComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }

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