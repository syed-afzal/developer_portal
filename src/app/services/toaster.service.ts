import {Injectable} from '@angular/core';
declare var toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() {
  }

  showToast(type, message) {
    switch (type) {
      case 'error':
        toastr.error(message, 'Error',
          { closeButton: true, timeOut: 4000, progressBar: true, allowHtml: true });
        break;
      case 'success':
        toastr.success('Successfully logged in ', 'Success',
          { closeButton: true, timeOut: 4000, progressBar: true, allowHtml: true });
        break;
    }
  }
}
