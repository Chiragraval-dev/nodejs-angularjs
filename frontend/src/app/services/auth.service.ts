import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    endpoint: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<boolean> {
        let API_URL = `${this.endpoint}auth`;
        return this.http.post<{ token: string }>(API_URL, { username: username, password: password })
            .pipe(
                map(result => {
                    if (result && result['flag'] === 0) {
                        return result['message'];
                    } else {
                        localStorage.setItem('access_token', result.token);
                        return true;
                    }
                })
            );
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
    }

    checkUserLoggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
    }
}