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
import { TDLProjectComponent } from './tdlproject/tdlproject.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { LokalnaReferencjaComponent } from './lokalna-referencja/lokalna-referencja.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LCChildComponent } from './lc-child/lc-child.component';
import { TDLAddTaskComponent } from './tdl-add-task/tdl-add-task.component';
import { TDLv2Component } from './tdlv2/tdlv2.component';
import { TdlTodoComponent } from './tdlv2/tdl-todo/tdl-todo.component';
import { TdlDoneComponent } from './tdlv2/tdl-done/tdl-done.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
    NgForNgIFComponent,
    IfElseComponent,
    DataBindingComponent,
    EventBindingComponent,
    TDLProjectComponent,
    CommunicationComponent,
    ChildComponent,
    LokalnaReferencjaComponent,
    LifeCycleComponent,
    LCChildComponent,
    TDLAddTaskComponent,
    TDLv2Component,
    TdlTodoComponent,
    TdlDoneComponent,

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
