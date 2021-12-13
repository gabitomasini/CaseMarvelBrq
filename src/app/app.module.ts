import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxViacepModule } from "@brunoc/ngx-viacep";
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Register1Component } from './register1/register1.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { RegisteraddressComponent } from './registeraddress/registeraddress.component';
import { PaginaHqsComponent } from './pagina-hqs/pagina-hqs.component';
import { PaginaHqsdetalheComponent } from './pagina-hqsdetalhe/pagina-hqsdetalhe.component';
import { ProfileComponent } from './profile/profile.component';
import { SnackbarModule } from 'ngx-snackbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Register1Component,
    Register2Component,
    Register3Component,
      RegisteraddressComponent,
      PaginaHqsComponent,
      PaginaHqsdetalheComponent,
      ProfileComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    NgxViacepModule,
    HttpClientModule,
    SnackbarModule,
    MatSnackBarModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
