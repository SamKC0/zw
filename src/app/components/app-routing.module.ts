import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'auth', component: LoginComponent, },
  { path: '', component: HomepageComponent, },
  { path: 'item/:name', component: ItemComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }