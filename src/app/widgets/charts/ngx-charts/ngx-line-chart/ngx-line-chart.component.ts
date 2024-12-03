import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
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
export class NgxLineChartComponent implements OnInit,OnChanges,AfterViewInit{

  private resizeObserver!: ResizeObserver;
  public width!:number;
  public height!:number;

  constructor(public elementRef: ElementRef){}
  
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
    this.adjustToParent(this.width, this.height);
  }

  ngAfterViewInit(): void {
    const parentElement = this.elementRef.nativeElement;

    // Observa cambios en el tamaño del contenedor padre
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        this.adjustToParent(width-52, height-52);
      }
    });

    this.resizeObserver.observe(parentElement);
  }

  private adjustToParent(width: number, height: number): void {
    // Ajusta las dimensiones del componente hijo
    this.width=width;
    this.height=height;
    this.chartOptions.view = [width,height];
  }

}
