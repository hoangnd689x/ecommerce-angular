import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartServiceComponent } from './cart-service/cart-service.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CartServiceComponent  
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
