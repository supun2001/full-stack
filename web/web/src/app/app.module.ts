import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './comp/home/home.component';
import { PhoneComponent } from './comp/phone/phone.component';
import { LoginComponent } from './comp/login/login.component';
import { PaymentComponent } from './comp/payment/payment.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchComponent } from './comp/search/search.component';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './comp/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhoneComponent,
    LoginComponent,
    PaymentComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
