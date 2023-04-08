import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home-page/home.component';
import { ShopPageComponent } from './page/shop-page/shop-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { SingleProductPageComponent } from './page/prod-detail-page/single-product-page.component';
import { MenShopComponent } from './page/men-page/men-shop.component';
import { WomenShopComponent } from './page/women-page/women-shop.component';
import { KidsShopComponent } from './page/kids-page/kids-shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'prod',component:SingleProductPageComponent},
  {path:'men',component:MenShopComponent},
  {path:'women',component:WomenShopComponent},
  {path:'kids',component:KidsShopComponent},
  {path:'prod/:productId',component:SingleProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
