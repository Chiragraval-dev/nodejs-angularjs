import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './../services/auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        if (this._authService.checkUserLoggedIn()) {
            this._authService.logout();
            this._router.navigate(['login']);
            return false;
        } else {
            return true;
        }
    }
}