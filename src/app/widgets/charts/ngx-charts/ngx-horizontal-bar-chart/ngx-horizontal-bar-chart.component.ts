import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BarChartOptions } from '../ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';

@Component({
  selector: 'app-ngx-horizontal-bar-chart',
  templateUrl: './ngx-horizontal-bar-chart.component.html',
  styleUrl: './ngx-horizontal-bar-chart.component.scss'
})
export class NgxHorizontalBarChartComponent implements OnInit,OnChanges,AfterViewInit{

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
