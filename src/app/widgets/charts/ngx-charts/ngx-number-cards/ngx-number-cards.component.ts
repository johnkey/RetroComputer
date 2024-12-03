import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';


export interface NumberCardOptions{

  results: any[];
  view?: [number,number];
  colorScheme?: Color;
  cardColor?:string;
  textColor?: string;
};


@Component({
  selector: 'app-ngx-number-cards',
  templateUrl: './ngx-number-cards.component.html',
  styleUrl: './ngx-number-cards.component.scss'
})
export class NgxNumberCardsComponent implements OnInit,OnChanges, AfterViewInit, OnDestroy {


  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: NumberCardOptions;

  isMobile: boolean = false;  

  public chartOptions: Partial<NumberCardOptions> | any;

  private resizeObserver!: ResizeObserver;

  private width!:number;
  private height!:number;

  constructor(private breakpointObserver: BreakpointObserver, private cdRef: ChangeDetectorRef,public elementRef: ElementRef) { }

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
        this.adjustToParent(width, height-32);
      }
    });

    this.resizeObserver.observe(parentElement);
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private adjustToParent(width: number, height: number): void {
    // Ajusta las dimensiones del componente hijo
    this.width=width;
    this.height=height;
    this.chartOptions.view = [width,height];
  }



}
