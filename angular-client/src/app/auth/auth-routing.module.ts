import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AuthRoutingModule {
}
