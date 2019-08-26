export class Password {
  old_password: string;
  new_password: string;
  renew_password: string;

  constructor() {
    this.new_password = '';
    this.old_password = '';
    this.renew_password = '';
  }
}
