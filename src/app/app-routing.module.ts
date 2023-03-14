import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './composant/home/home.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { MenShopComponent } from './men-shop/men-shop.component';
import { WomenShopComponent } from './women-shop/women-shop.component';
import { KidsShopComponent } from './kids-shop/kids-shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'prod',component:SingleProductPageComponent},
  {path:'men',component:MenShopComponent},
  {path:'women',component:WomenShopComponent},
  {path:'kids',component:KidsShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
