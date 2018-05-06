"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.TutorialName = 'Angular JS2';
        this.appList = ["Binding", "Display", "Services"];
        this.newdate = new Date(2016, 3, 15);
        this.newValue = 123;
        this.perc = .30;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
// import { 
//   Component 
// } from '@angular/core';  
// @Component ({ 
//   selector: 'my-app', 
//   templateUrl: 'app/app.component.html' 
// }) 
// export class AppComponent { 
//   Status: boolean = true; 
//   onKey(event: any) { 
//      this.Status = false; 
//   } 
// }
// import {
//   Component
// } from '@angular/core';
// @Component ({
//   selector: 'my-app',
//   templateUrl: 'app/app.component.html'
// })
// export class AppComponent {
//   TutorialName: string = 'Angular JS2';
//   appList: string[] = ["Binding", "Display", "Services"];
// }
// import {
//   Component
// } from '@angular/core';
// @Component ({
//   selector: 'my-app',
//   templateUrl: 'app/app.component.html'
// })
// export class AppComponent {
//   appStatus: boolean = true;
//   appTitle: string = 'Welcome';
//   appList: any[] = [{
//      "ID": "1",
//      "Name": "One",
//      "url": 'app/Images/One.png'
//   },
//   {
//      "ID": "2",two.png'
//   } ];
// }
// // import { Component } from '@angular/core';
// // // import {PaginatePipe, PaginationService} from 'ngx-pagination';
// // @Component ({
// //    selector: 'my-app',
// //    template: 'Hello World'
// //   //  template: `
// //   //  <ul>
// //   //    <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
// //   //  </ul>
// //   //  <pagination-controls (pageChange)="p = $event"></pagination-controls>
// //   //  `
// // })
// // export class AppComponent { }
// // import { 
// //     Component 
// //  } from '@angular/core';  
// //  import { 
// //     appService 
// //  } from './app.service';  
// //  @Component({ 
// //     selector: 'my-app', 
// //     template: '<div>{{value}}</div>', 
// //     providers: [appService]  
// //  }) 
// //  export class AppComponent { 
// //     value: string = ""; 
// //     constructor(private _appService: appService) { } 
// //     ngOnInit(): void { 
// //        this.value = this._appService.getApp(); 
// //     }   
// //  }
// //  import { Component } from '@angular/core';
// // @Component ({
// //    selector: 'my-app',
// //    template: '<product-form></product-form>'
// // })
// // export class AppComponent { }
// // import { Component } from '@angular/core';
// // @Component ({
// //    selector: 'my-app',
// //    template: `
// //    <ul>
// //       <li><a [routerLink] = "['/Product']">Product</a></li>
// //       <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
// //    </ul>
// //    <router-outlet></router-outlet>`
// // })
// // export class AppComponent  { }
// // import { Component } from '@angular/core';
// // import { IProduct } from './products';
// // import { ProductService } from './products.service';
// // import { appService } from './app.service';
// // import { Http , Response } from '@angular/http';
// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // @Component ({
// //    selector: 'my-app',
// //    template: '<div>Hello</div>',
// //    //templateUrl: 'app/app.component.html',
// //    providers: [ProductService]
// // })
// // export   class   AppComponent  {
// //    iproducts: IProduct[];
// //     appTitle: string = 'Welcome';
// //     appStatus: boolean = true;
// //     appList: any[] = [ {
// //         "ID": "1",
// //         "Name" : "One",
// //         "url": 'app/Images/One.png'
// //     },
// //     {
// //         "ID": "2",
// //         "Name" : "Two",
// //         "url": 'app/Images/Two.png'
// //     } ];
// //    constructor(private _product: ProductService) {
// //    }
// //    ngOnInit() : void {
// //       this._product.getproducts()
// //       .subscribe(iproducts => this.iproducts = iproducts);
// //    }
// // }
// // @Component ({
// //    selector: 'my-app',
// //    templateUrl: 'app/app.component.html'  
// // })
// // export class AppComponent {
// //    appTitle: string = 'Welcome';
// //    appStatus: boolean = true;
// //    appList: any[] = [ {
// //       "ID": "1",
// //       "Name" : "One",
// //       "url": 'app/Images/One.png'
// //    },
// //    {
// //       "ID": "2",
// //       "Name" : "Two",
// //       "url": 'app/Images/Two.png'
// //    } ];
// // } 
//# sourceMappingURL=app.component.js.map