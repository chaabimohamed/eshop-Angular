import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composant/header/header.component';
import { HeroComponent } from './composant/hero/hero.component';
import { FooterComponent } from './composant/footer/footer.component';
import { BrandsComponent } from './composant/brands/brands.component';
import { LatestComponent } from './composant/latest/latest.component';
import { WeareComponent } from './composant/weare/weare.component';
import { HomeComponent } from './composant/home/home.component';
import { ContactComponent } from './composant/contact/contact.component';
import { BannerComponent } from './composant/banner/banner.component';
import { ServicesComponent } from './composant/services/services.component';
import { RelatedComponent } from './composant/related/related.component';
import { ShopComponent } from './composant/shop/shop.component';
import { SingleProdComponent } from './composant/single-prod/single-prod.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SingleProductPageComponent } from './single-product-page/single-product-page.component';
import { MenComponent } from './composant/men/men.component';
import { MenShopComponent } from './men-shop/men-shop.component';
import { WomenShopComponent } from './women-shop/women-shop.component';
import { KidsShopComponent } from './kids-shop/kids-shop.component';
import { WomenComponent } from './composant/women/women.component';
import { KidsComponent } from './composant/kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    BrandsComponent,
    LatestComponent,
    WeareComponent,
    HomeComponent,
    ContactComponent,
    BannerComponent,
    ServicesComponent,
    RelatedComponent,
    ShopComponent,
    SingleProdComponent,
    ShopPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    SingleProductPageComponent,
    MenComponent,
    MenShopComponent,
    WomenShopComponent,
    KidsShopComponent,
    WomenComponent,
    KidsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
