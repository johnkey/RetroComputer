import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';


export interface AdvancedPieChartOptions{

  results: any[];
  view?: [number,number];
  showLabels?: boolean;
  showLegend?: boolean;
  isDoughnut?:boolean;
  colorScheme?: Color;
  gradient?:boolean;

};

@Component({
  selector: 'app-ngx-advanced-pie-chart',
  templateUrl: './ngx-advanced-pie-chart.component.html',
  styleUrl: './ngx-advanced-pie-chart.component.scss'
})
export class NgxAdvancedPieChartComponent implements OnInit,OnChanges{
  

  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: AdvancedPieChartOptions;

  public chartOptions: Partial<AdvancedPieChartOptions> | any;

  ngOnInit(): void {
    this.chartOptions=this.options;
  }

  ngOnChanges(): void {
    this.chartOptions=this.options;
  }
  

}
