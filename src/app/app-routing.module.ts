import { ProfileComponent } from './profile/profile.component';
import { PaginaHqsdetalheComponent } from './pagina-hqsdetalhe/pagina-hqsdetalhe.component';
import { PaginaHqsComponent } from './pagina-hqs/pagina-hqs.component';
import { RegisteraddressComponent } from './registeraddress/registeraddress.component';
import { Register3Component } from './register3/register3.component';
import { Register2Component } from './register2/register2.component';
import { Register1Component } from './register1/register1.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: Register1Component },
  { path: 'payment', component: Register2Component },
  { path: 'address', component: RegisteraddressComponent },
  { path: 'hqs', component: PaginaHqsComponent},
  { path: 'details', component: PaginaHqsdetalheComponent},
  { path: 'teste', component: Register3Component },
  { path: 'profile', component: ProfileComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(routes);
