import {Injectable} from '@angular/core';
import {ContactMessage} from '../_entities/contact-message';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {httpOptions} from '../_constants/http-option';

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {

  constructor(private httpClient: HttpClient) {
  }

  sendMessage(contact: ContactMessage): Observable<any> {
    return this.httpClient.post<any>('http://localhost:62025/api/public/contact-message', contact, httpOptions);
  }
}
