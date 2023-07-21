import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskerComponent } from './pages/tasker/tasker.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './pages/signin/signin.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: TaskerComponent, canActivate: [authGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
