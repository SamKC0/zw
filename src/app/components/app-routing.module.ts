import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: 'auth', component: LoginComponent, },
  { path: '', component: HomepageComponent, },
  { path: 'item/new', component: AddItemComponent, },
  { path: 'item/:name', component: ItemComponent, },
  { path: 'category/:name', component: CategoryComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }