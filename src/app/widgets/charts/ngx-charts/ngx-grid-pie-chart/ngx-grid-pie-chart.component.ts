import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';


export interface GridPieChartOptions{

  results: any[];
  view?: [number,number];
  showLabels?: boolean;
  showLegend?: boolean;
  colorScheme?: Color;

};

@Component({
  selector: 'app-ngx-grid-pie-chart',
  templateUrl: './ngx-grid-pie-chart.component.html',
  styleUrl: './ngx-grid-pie-chart.component.scss'
})
export class NgxGridPieChartComponent implements OnInit,OnChanges{
  
  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: GridPieChartOptions;

  public chartOptions: Partial<GridPieChartOptions> | any;

  ngOnInit(): void {
    this.chartOptions=this.options;
  }

  ngOnChanges(): void {
    this.chartOptions=this.options;
  }

}
