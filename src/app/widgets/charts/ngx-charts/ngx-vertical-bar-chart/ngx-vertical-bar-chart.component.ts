import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

export interface BarChartOptions{

  results: any[];
  view?: [number,number];
  legend?: boolean;
  showLabels?: boolean;
  animations?: boolean;
  gradient?:boolean;
  showYAxis?: boolean;
  showXAxis?: boolean;
  showYAxisLabel?: boolean;
  showXAxisLabel?: boolean;
  showGridLines?:boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  roundEdges?:boolean;
  colorScheme?: Color;
  
};



@Component({
  selector: 'app-ngx-vertical-bar-chart',
  templateUrl: './ngx-vertical-bar-chart.component.html',
  styleUrl: './ngx-vertical-bar-chart.component.scss'
})
export class NgxVerticalBarChartComponent implements OnInit,OnChanges {

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
