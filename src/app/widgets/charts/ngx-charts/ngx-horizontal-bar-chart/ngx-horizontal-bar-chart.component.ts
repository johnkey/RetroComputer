import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BarChartOptions } from '../ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';

@Component({
  selector: 'app-ngx-horizontal-bar-chart',
  templateUrl: './ngx-horizontal-bar-chart.component.html',
  styleUrl: './ngx-horizontal-bar-chart.component.scss'
})
export class NgxHorizontalBarChartComponent implements OnInit{

  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: BarChartOptions;

  public chartOptions: Partial<BarChartOptions> | any;

  ngOnInit(): void {
    this.chartOptions=this.options;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions=this.options;
  }


}
