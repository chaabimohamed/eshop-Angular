import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composant/header/header.component';
import { HeroComponent } from './composant/hero/hero.component';
import { FooterComponent } from './composant/footer/footer.component';
import { BrandsComponent } from './composant/brands/brands.component';
import { LatestComponent } from './composant/latest/latest.component';
import { WeareComponent } from './composant/weare/weare.component';
import { HomeComponent } from './page/home-page/home.component';
import { ContactComponent } from './composant/contact/contact.component';
import { BannerComponent } from './composant/banner/banner.component';
import { ServicesComponent } from './composant/services/services.component';
import { RelatedComponent } from './composant/related/related.component';
import { ShopComponent } from './pageImp/shop-page-impl/shop.component';
import { SingleProdComponent } from './pageImp/prod-detail-page-imp/single-prod.component';
import { ShopPageComponent } from './page/shop-page/shop-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { SingleProductPageComponent } from './page/prod-detail-page/single-product-page.component';
import { MenComponent } from './pageImp/men-page-impl/men.component';
import { MenShopComponent } from './page/men-page/men-shop.component';
import { WomenShopComponent } from './page/women-page/women-shop.component';
import { KidsShopComponent } from './page/kids-page/kids-shop.component';
import { WomenComponent } from './pageImp/women-page-impl/women.component';
import { KidsComponent } from './pageImp/kids-page-impl/kids.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './composant/categories/categories.component';
import { ShopNavComponent } from './composant/shop-nav/shop-nav.component';
import { TopNavComponent } from './composant/top-nav/top-nav.component';
import { SocialMediaComponent } from './composant/social-media/social-media.component';
import { ContactInfoComponent } from './composant/contact-info/contact-info.component';
import { SearchComponent } from './composant/search/search.component';
import { LogoComponent } from './composant/logo/logo.component';
import { NavItemsComponent } from './composant/nav-items/nav-items.component';
import { ShoppCartComponent } from './composant/shopp-cart/shopp-cart.component';
import { SubscribeFormComponent } from './composant/subscribe-form/subscribe-form.component';
import { CardTitleDescComponent } from './composant/card-title-desc/card-title-desc.component';
import { MainSiteCateComponent } from './composant/main-site-cate/main-site-cate.component';
import { DisplayProductsComponent } from './composant/display-products/display-products.component';

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
    KidsComponent,
    CategoriesComponent,
    ShopNavComponent,
    TopNavComponent,
    SocialMediaComponent,
    ContactInfoComponent,
    SearchComponent,
    LogoComponent,
    NavItemsComponent,
    ShoppCartComponent,
    SubscribeFormComponent,
    CardTitleDescComponent,
    MainSiteCateComponent,
    DisplayProductsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RatingModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
