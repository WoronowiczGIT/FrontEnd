import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
// import { RouterModule, Routes } from '@angular/router';
import { NgForNgIFComponent } from './ng-for-ng-if/ng-for-ng-if.component';
import { IfElseComponent } from './if-else/if-else.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'ng-for-ng-if', component: NgForNgIFComponent },
  { path: 'event-binding', component: EventBindingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
