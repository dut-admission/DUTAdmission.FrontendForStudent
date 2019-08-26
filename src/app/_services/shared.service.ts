import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {API_URL} from '../_constants/api-url';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  closeResult = '';

  constructor(private toastr: ToastrService,
              private modalService: NgbModal,
              private http: HttpClient,
              ) {
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();

  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  notifySuccess(message: string) {
    this.toastr.clear();
    this.toastr.success(`${message}`, 'Thành công', {
      timeOut: 3000,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-top-center'
    });
  }

  notifyError(message: string) {
    this.toastr.clear();
    this.toastr.error(`${message}`, 'Thất bại', {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-top-center'
    });
  }

  openFormModal(content, size) {
    this.modalService.open(content, {windowClass: '', size: size, centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  dismissAll() {
    this.modalService.dismissAll();
  }

  getEducationProgram(): Observable<any> {
    return this.http.get<any>(API_URL.EDUCATION_PROGRAM);
  }
}
