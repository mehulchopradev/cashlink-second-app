import { Injectable } from '@angular/core';
import { DatesService } from './dates.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private datesService: DatesService) { }

  /* return {
    result -> number[]
    computationDate -> now (date) : format 02-11-2020
  } */
  generateEvenSeries(n: number): any {
    const result: number[] = [];
    for (let i = 0; i <= n; i = i + 2) {
      result.push(i);
    }

    return {
      result: result,
      computationDate: this.datesService.today('DD-MM-yyyy')
    }
  }
}
