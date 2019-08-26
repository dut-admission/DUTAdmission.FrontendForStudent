import {Component, OnInit} from '@angular/core';
import {ForgetPassword} from '../_entities/forget-password';
import {AuthenticationService} from '../_services/authentication.service';
import {SharedService} from '../_services/shared.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPassword: ForgetPassword;
  focus: boolean;
  focus1: boolean;

  constructor(private authenticationService: AuthenticationService,
              private sharedService: SharedService) {
    this.forgetPassword = new ForgetPassword();
  }

  ngOnInit() {
  }

  getNewPassword() {
    if (this.isValidated()) {
      this.sharedService.emitChange(true);
      this.authenticationService.getPassword(this.forgetPassword).subscribe(
        value => {
          this.sharedService.emitChange(false);
          this.sharedService.notifySuccess('Mật khẩu mới của bạn đã được gửi về email của bạn.');
        },
        error => {
          this.sharedService.emitChange(false);
          this.sharedService.notifyError(error['error']);
        }
      );
    }
  }

  isValidated() {
    return this.isNotEmptyString(this.forgetPassword.username) && this.isNotEmptyString(this.forgetPassword.email);
  }

  private isNotEmptyString(text: String) {
    return text !== undefined && text !== null && text !== '';
  }

  notifyInvalidData() {
    if (!this.isValidated()) {
      this.sharedService.notifyError('Username và email không được bỏ trống!.');
    }
  }
}
