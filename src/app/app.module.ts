import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './components/headers/headers.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
