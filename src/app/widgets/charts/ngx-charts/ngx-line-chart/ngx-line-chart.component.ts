import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { curveStep } from 'd3-shape';

export interface LineChartOptions{

  results: any[];
  view?: [number,number];
  legend?: boolean;
  showLabels?: boolean;
  animations?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  showYAxisLabel?: boolean;
  showXAxisLabel?: boolean;
  showGridLines?:boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  colorScheme?: Color;

};

@Component({
  selector: 'app-ngx-line-chart',
  templateUrl: './ngx-line-chart.component.html',
  styleUrl: './ngx-line-chart.component.scss'
})
export class NgxLineChartComponent implements OnInit,OnChanges{

  
  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: LineChartOptions;

  public chartOptions: Partial<LineChartOptions> | any;
  curve:any;
    

  ngOnInit(): void {
    this.chartOptions=this.options;
    this.curve = curveStep;
  }

  ngOnChanges(): void {
    this.chartOptions=this.options;
    this.curve = curveStep;
  }

}
