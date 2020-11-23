import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './service/payment.service';
import { ProductService } from './service/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailService } from './service/product-detail.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartService } from './service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaymentService,ProductService,ProductDetailService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
