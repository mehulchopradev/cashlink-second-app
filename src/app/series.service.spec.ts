import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('A test suite to verify the working of the series service', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should return proper array of even numbers when calling generateEvenSeries() with some input', () => {
    const actual: number[] = service.generateEvenSeries(10);
    const expected: number[] = [0, 2, 4, 6, 8, 10];
    expect(actual).toEqual(expected);
  });

  it('should return an array of size 1 when calling generateEvenSeries() with input 0', () => {
    const actual: number[] = service.generateEvenSeries(0);
    const expected: number[] = [0];
    expect(actual).toEqual(expected);
  });

  it('should return an array of even numbers when calling generateEvenSeries() with odd input', () => {
    const actual: number[] = service.generateEvenSeries(13);
    const expected: number[] = [0, 2, 4, 6, 8, 10, 12];
    expect(actual).toEqual(expected);
  });
});
