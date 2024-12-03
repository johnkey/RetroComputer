import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class NgxVerticalBarChartComponent implements OnInit,OnChanges,AfterViewInit {

  private resizeObserver!: ResizeObserver;
  public width!:number;
  public height!:number;

  constructor(public elementRef: ElementRef){}
  
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
