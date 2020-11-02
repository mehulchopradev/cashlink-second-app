import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { SepPipe } from '../sep.pipe';

import { SeriesComponent } from './series.component';

describe('SeriesComponent', () => {
  let component: SeriesComponent;
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesComponent, SepPipe ],
      imports: [
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the result and computationDate section on load of component', () => {
    const hostElement = fixture.nativeElement;

    const resultElement: HTMLElement = hostElement.querySelector('.result');
    expect(resultElement).toBeNull();

    const computationDateElement: HTMLElement = hostElement.querySelector('.computationDate');
    expect(computationDateElement).toBeNull();
  });

  it('shows the result and computationDate section when clicking the button', () => {
    const hostElement = fixture.nativeElement;

    const numElement:HTMLInputElement = hostElement.querySelector('.num');
    numElement.value = '10';

    numElement.dispatchEvent(new Event('input'));

    hostElement.querySelector('.btn').click();

    fixture.detectChanges();

    const resultElement: HTMLElement = hostElement.querySelector('.result');
    expect(resultElement).toBeTruthy();
    expect(resultElement.textContent).toContain('0|2|4|6|8|10');

    const computationDateElement: HTMLElement = hostElement.querySelector('.computationDate');
    expect(computationDateElement).toBeTruthy();
    expect(computationDateElement.textContent).toContain(moment().format('DD-MM-yyyy'));
  });
});
