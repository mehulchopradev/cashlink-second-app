import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  num: number;

  result: number[];

  computationDate: string;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
  }

  onGenerate(): void {
    const { num } = this;
    const output = this.seriesService.generateEvenSeries(num);

    this.result = output.result;
    this.computationDate = output.computationDate;
  }

}
