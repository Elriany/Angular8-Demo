import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductServiceService } from './Services/product-service.service';

@NgModule({
  declarations: [ //add All Commponents
    AppComponent, NavbarComponent, ContentComponent, FooterComponent, RegisterComponent, LoginComponent, ProductComponent
  ],
  imports: [ //Module
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ProductServiceService],//services
  bootstrap: [AppComponent]//default Component
})
export class AppModule { }
