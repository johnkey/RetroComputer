import {  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {  BaseChartComponent, Color,  ScaleType } from '@swimlane/ngx-charts';



export interface HeatMapOptions{

  results: any[];
  view?: [number,number];
  legend?: boolean;
  showLabels?: boolean;
  animations?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  showYAxisLabel?: boolean;
  showXAxisLabel?: boolean;
  xAxisLabel?: string;
  yAxisLabel?: string;
  colorScheme?: Color;
  colors?:string[];

};

@Component({
  selector: 'app-ngx-heat-map',
  templateUrl: './ngx-heat-map.component.html',
  styleUrl: './ngx-heat-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxHeatMapComponent implements OnInit,OnChanges, AfterViewInit{
  
  constructor(public elementRef: ElementRef){}

  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: HeatMapOptions;

  private resizeObserver!: ResizeObserver;
  private width!:number;
  private height!:number;

  public chartOptions: Partial<HeatMapOptions> | any;
    
   ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions=this.options;
    this.chartOptions.colorScheme=this.generateScale(this.options.colors || []); 
    this.adjustToParent(this.width, this.height);
  }

   ngOnInit(): void {
    this.chartOptions=this.options;
    this.chartOptions.colorScheme=this.generateScale(this.options.colors || []);

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

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }
  
  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

  
  generateScale(colors : string[]): Color {
    
    const max = Math.max(...(this.options.results?.flatMap(value => value.series?.map((point: { value: any }) => point.value) || []) || []));
    const min = Math.min(...(this.options.results?.flatMap(value => value.series?.map((point: { value: any }) => point.value) || []) || []));


    const monocromeScale = Array.from({ length: 5 }).map((_, index) => {
      const factor = index / 4; // Ajusta la intensidad verde entre 0 y 1
      return this.interpolate(factor,colors);
    });

    return {
      name: 'monocrome-scale',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: monocromeScale
    };
  }

  interpolate(factor: number,colors:string[]): string {
    
    
    //const start = [212, 237, 218]; // Verde claro
    //const end = [56, 142, 60]; // Verde oscuro

    const start = this.hexToRgb(colors[0]); //  claro
    const end = this.hexToRgb(colors[1]); //  oscuro

    const r = Math.round(start[0] + factor * (end[0] - start[0]));
    const g = Math.round(start[1] + factor * (end[1] - start[1]));
    const b = Math.round(start[2] + factor * (end[2] - start[2]));

    return `rgb(${r}, ${g}, ${b})`;
  }

  hexToRgb(hex: string) {
    // Eliminar el símbolo '#' si está presente
    hex = hex.replace(/^#/, '');
  
    // Convertir cada par de caracteres hexadecimales a decimal
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    return [r,g,b];  //`rgb(${r}, ${g}, ${b})`;
  }
  

}
