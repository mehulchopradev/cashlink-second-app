import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() { }

  today(format: string): string {
    return moment().format(format);
  }
}
