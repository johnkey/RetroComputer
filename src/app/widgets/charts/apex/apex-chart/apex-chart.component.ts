import { Component, Input, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrl: './apex-chart.component.scss'
})
export class ApexChartComponent {

  @ViewChild("chart")
  chart!: ChartComponent;
  
  public chartOptions: Partial<ApexOptions> | any;
  
  @Input()
  options!: ApexOptions ;

  @Input()
  mode!: string;

  constructor() {
    
  }
  ngOnInit(): void {
    this.chartOptions = this.options;
   
  }

}
