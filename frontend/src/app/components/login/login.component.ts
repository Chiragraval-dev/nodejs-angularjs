import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.auth.login(this.username, this.password).pipe(first()).subscribe(
      (result: any) => {
        if (result === true) {
          this.router.navigate(['dashboard']);
        } else {
          this.username = this.password = '';
          window.confirm(result);
        }
      },
      err => this.error = 'Could not authenticate'
    );
  }

}
