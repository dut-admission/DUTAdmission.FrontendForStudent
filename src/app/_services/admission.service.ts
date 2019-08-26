import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document, DocumentForUpload} from '../_entities/document';
import {Tuition} from '../_entities/tuition';
import {httpOptions} from '../_constants/http-option';
import {API_URL} from '../_constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private httpClient: HttpClient) {
  }

}
