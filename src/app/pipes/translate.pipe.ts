import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {
  }

  transform(key: any): any {
    let keyValue;
    keyValue = this.translate.data[key];
    if (keyValue) {
      return keyValue;
    } else {
      return `Missing Translation ${key}`;
    }
  }

}
