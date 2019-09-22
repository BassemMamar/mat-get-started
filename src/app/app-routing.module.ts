import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  // { path: 'shop', component: ShopComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
