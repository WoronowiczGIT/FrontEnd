import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
// import { RouterModule, Routes } from '@angular/router';
import { NgForNgIFComponent } from './ng-for-ng-if/ng-for-ng-if.component';
import { IfElseComponent } from './if-else/if-else.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TDLProjectComponent } from './tdlproject/tdlproject.component';
import { CommunicationComponent } from './communication/communication.component';
import { LokalnaReferencjaComponent } from './lokalna-referencja/lokalna-referencja.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TDLv2Component } from './tdlv2/tdlv2.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'ng-for-ng-if', component: NgForNgIFComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'tdlproject', component: TDLProjectComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'lokalna-referencja', component: LokalnaReferencjaComponent },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: 'tdlv2', component: TDLv2Component },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
