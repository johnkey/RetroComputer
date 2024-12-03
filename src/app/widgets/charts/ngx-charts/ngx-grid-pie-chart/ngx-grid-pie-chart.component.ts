import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
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
export class NgxGridPieChartComponent implements OnInit,OnChanges,AfterViewInit{
  
  private resizeObserver!: ResizeObserver;
  public width!:number;
  public height!:number;

  constructor(public elementRef: ElementRef){}
  
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
