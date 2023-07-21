import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginButtonClicked(email: string, password: string) {
    this.authService
      .login(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res.status)
        if (res.status === 201) {
          // we have logged in successfully
          this.router.navigate(['/']);
        }
        console.log(res);
      });
  }
}
