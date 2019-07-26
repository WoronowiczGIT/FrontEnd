import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
// import { RouterModule, Routes } from '@angular/router';
import { NgForNgIFComponent } from './ng-for-ng-if/ng-for-ng-if.component';
import { IfElseComponent } from './if-else/if-else.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
    NgForNgIFComponent,
    IfElseComponent,
    DataBindingComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
