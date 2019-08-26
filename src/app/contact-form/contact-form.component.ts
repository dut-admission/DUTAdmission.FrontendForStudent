import {Component, OnInit} from '@angular/core';
import {ContactMessage} from '../_entities/contact-message';
import {ContactMessageService} from '../_services/contact-message.service';
import {SharedService} from '../_services/shared.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact: ContactMessage;
  focus: boolean;
  focus1: boolean;

  constructor(private contactService: ContactMessageService,
              private sharedService: SharedService
  ) {
    this.contact = new ContactMessage();
  }

  ngOnInit() {
  }

  sendMessage() {
    this.contactService.sendMessage(this.contact).subscribe(
      value => {
        this.sharedService.notifySuccess('Tin nhắn đã được gửi đến quản trị viên. Phản hồi sẽ được gửi qua email của bạn.');
      },
      error => {
        this.sharedService.notifyError(error);
      }
    );
    this.contact = new ContactMessage();
  }
}
