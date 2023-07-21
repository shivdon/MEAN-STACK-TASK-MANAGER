import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSignupButtonClicked(name: string, email: string, password: string) {
    this.authService
      .signup(name, email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }
}
