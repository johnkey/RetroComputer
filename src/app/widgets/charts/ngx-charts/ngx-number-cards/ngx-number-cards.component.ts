import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class NgxNumberCardsComponent implements OnInit,OnChanges {

  @Input()
  mode!: string;

  @Input()
  title!: string;

  @Input()
  options!: NumberCardOptions;

  isMobile: boolean = false;  

  public chartOptions: Partial<NumberCardOptions> | any;

  constructor(private breakpointObserver: BreakpointObserver, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chartOptions=this.options;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.chartOptions=this.options;
  }

}
