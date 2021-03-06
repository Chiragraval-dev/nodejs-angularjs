import { AuthService } from './services/auth.service';
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  opened = true;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      if (this.sidenav) {
        this.sidenav.fixedTopGap = 55;
      }
      this.opened = false;
    } else {
      if (this.sidenav) {
        this.sidenav.fixedTopGap = 55;
      }
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      if (this.sidenav) {
        this.sidenav.fixedTopGap = 55;
      }
      this.opened = false;
    } else {
      if (this.sidenav) {
        this.sidenav.fixedTopGap = 55;
      }
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}