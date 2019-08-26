import {Component, OnInit} from '@angular/core';
import {LoginInfo} from '../_entities/login-info';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {SharedService} from '../_services/shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginInfo: LoginInfo;
    remembered: boolean;
    focus: boolean;
    focus1: boolean;

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private sharedService: SharedService) {
    }

    initRememberPassword() {
        const username = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        if (username !== null && password !== null) {
            this.loginInfo = new LoginInfo(username, atob(password));
            this.remembered = true;
        } else {
            this.loginInfo = new LoginInfo('', '');
        }
    }

    login(): void {
        this.sharedService.emitChange(true);
        if (this.isValidated()) {
            this.authenticationService.login(this.loginInfo).subscribe(
                value => {
                    this.sharedService.emitChange(false);
                    this.saveLoginInfoToLocal();
                    if (value['isStudent']) {
                        this.router.navigate(['/admission']);
                    } else {
                        this.sharedService.notifyError('Đăng nhập thất bại');
                    }
                },
                error => {
                    this.sharedService.emitChange(false);
                    this.sharedService.notifyError('Đăng nhập thất bại');
                }
            );
        }
    }

    saveLoginInfoToLocal() {
        if (this.remembered === true) {
            localStorage.setItem('userName', this.loginInfo.username);
            localStorage.setItem('password', btoa(this.loginInfo.password));
        } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('password');
        }
    }

    ngOnInit() {
        this.initRememberPassword();
    }

    isValidated(): boolean {
        return this.isNotEmptyString(this.loginInfo.username) && this.isNotEmptyString(this.loginInfo.password);
    }

    private isNotEmptyString(text: String) {
        return text !== undefined && text !== null && text !== '';
    }

    notifUserNameVaMatKhau() {
        if (!this.isValidated()) {
            this.sharedService.notifyError('Username và password không được bỏ trống!.');
        }
    }
}
