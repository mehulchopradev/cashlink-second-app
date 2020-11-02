import { TestBed } from '@angular/core/testing';
import { DatesService } from './dates.service';

import { SeriesService } from './series.service';

describe('A test suite to verify the working of the series service', () => {
  let service: SeriesService;
  let datesService: jasmine.SpyObj<DatesService>;

  beforeEach(() => {
    // mocking of the dependencies
    const spy = jasmine.createSpyObj('DatesService', ['today'])
    TestBed.configureTestingModule({
      providers: [
        SeriesService, // the current service that is being tested
        { provide: DatesService, useValue: spy}
      ]
    });
    service = TestBed.inject(SeriesService);
    datesService = TestBed.inject(DatesService) as jasmine.SpyObj<DatesService>;

    // training the spy object and its methods
    datesService.today.and.returnValue('01-02-2020');
  });

  it('should return proper array of even numbers when calling generateEvenSeries() with some input', () => {
    const actual: any = service.generateEvenSeries(10);
    const expected: number[] = [0, 2, 4, 6, 8, 10];
    expect(actual.result).toEqual(expected);
    expect(actual.computationDate).toEqual('01-02-2020');
  });

  it('should return an array of size 1 when calling generateEvenSeries() with input 0', () => {
    const actual: any = service.generateEvenSeries(0);
    const expected: number[] = [0];
    expect(actual.result).toEqual(expected);
    expect(actual.computationDate).toEqual('01-02-2020');
  });

  it('should return an array of even numbers when calling generateEvenSeries() with odd input', () => {
    const actual: any = service.generateEvenSeries(13);
    const expected: number[] = [0, 2, 4, 6, 8, 10, 12];
    expect(actual.result).toEqual(expected);
    expect(actual.computationDate).toEqual('01-02-2020');
  });
});
