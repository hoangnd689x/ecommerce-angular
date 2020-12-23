import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

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
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ProductDetailComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaymentService,ProductService,ProductDetailService,CartService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
