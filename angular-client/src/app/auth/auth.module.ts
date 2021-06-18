import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guard/auth.guard";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule {
}
