import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  generateEvenSeries(n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i <= n; i = i + 2) {
      result.push(i);
    }

    return result;
  }
}
