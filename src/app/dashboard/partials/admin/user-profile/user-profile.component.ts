import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {  Component,  OnInit, ViewChild} from '@angular/core';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';
import { NgxNumberCardsComponent, NumberCardOptions } from 'src/app/widgets/charts/ngx-charts/ngx-number-cards/ngx-number-cards.component';
import {  downloads, lastConnections, numberCarddata, payments } from './data';
import { ScaleType } from '@swimlane/ngx-charts';
import { ColorService } from 'src/app/color.service';
import { Person } from 'src/app/widgets/cards/user-card/user-card.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface Connection {
  game: string;
  date:string;
  duration: string;
  start: string;
  end: string;
  description:string;
}

export interface Downloads {
  game: string;
  image: string;
  size: string;
  price: string;
  genere: string;
  description:string;
}

export interface Payments {
  date: string;
  amount: string;
  method:string;
  status: string;
}






@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class UserProfileComponent implements OnInit {

 
  @ViewChild('numberCards', { static: false }) numberCardsComponent!: NgxNumberCardsComponent;

  numberCardOptions!:NumberCardOptions;
  user:Person={
    nick: "Lucario78",
    email:  "lucario78@gmail.com",
    firstName: "John",
    lastName: "Doe",
    address: "Pixel Avenue",
    state: "Retroland",
    city: "Arcade City",
    postalCode: "1984-512"
  };
 
  
  connectionsDataSource = lastConnections;
  connectionColumns = ['game', 'date', 'start', 'end','duration'];
  downloadDataSource = downloads;
  downloadColumns = ['game', 'genere', 'size','price'];
  downloadColumnsWithExpand = [...this.downloadColumns, 'expand'];
  paymentsDatasource = payments;
  paymentColumns = ['date','amount','method','status'];
  expandedElement!: Downloads;
  
  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService,private colorService:ColorService) {

    
  }
 
 

  ngOnInit(): void {

    this.themeService.themeChanged$.subscribe((nuevoTema) => {
        
        this.initializeOptions();
        
    });
    
    this.initializeOptions();
    

  }

  
  initializeOptions(): void {

    let radianceColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-highlight");
    let screenColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-surface");
    let secondarytext: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-secondary-on-dark");
    let foregroundText: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-primary-on-dark");
    let primaryColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-primary");

    
    this.numberCardOptions={
      results: numberCarddata,
      view: [750, 150],
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, this.colorService.darkenColor(radianceColor,30), this.colorService.darkenColor(primaryColor,30)],      
      },
      cardColor: screenColor,
      textColor: primaryColor,
    };

  }

  /** Based on the screen size, switch from standard to one column per row */
 cols$ = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.Tablet,Breakpoints.Small]).pipe(
  map(({ matches }) => {
    
    if (matches) {
      return [
        { row: '1', cols: 1, rows: 2 },
        { row: '2', cols: 1, rows: 1 },
        { row: '3', cols: 1, rows: 1 }
      ];
    }

    return [
      { row: '1', cols: 4, rows: 1 },
      { row: '2', cols: 4, rows: 1 },
      { row: '3', cols: 2, rows: 1 }
    ];
    })
  );


  /* cols$ = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.TabletPortrait,Breakpoints.Tablet]).pipe(
    map((result) => {
      
      if (result.breakpoints[Breakpoints.Tablet]) {
        console.log('TABLET');
        return [
          { row: '1', cols: 1, rows: 2 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      }
  
      return [
        { row: '1', cols: 4, rows: 1 },
        { row: '2', cols: 4, rows: 1 },
        { row: '3', cols: 2, rows: 1 }
      ];
      })
    ); */

    
  trackByColumn(index: number, column: string): any {
    return column;  // Esto es simple, ya que la columna es un string único.
  }
  
  save(){
    console.log("User saved");
  }

  messages = [
    { sender: 'Lucario78', text: 'Hello, I can\'t download' },
    { sender: 'You', text: 'Hi!,How can I help you?' },
  ];

  sendMessage(): void {
    console.log("Message Sended");
  }

  

}
