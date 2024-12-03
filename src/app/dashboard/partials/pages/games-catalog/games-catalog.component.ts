import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';

import { trendigGames } from './data';
import { GameCard } from 'src/app/widgets/cards/game-card/game-card.component';

/* const HANDSET_PORTRAIT = "(max-width: 599.98px) and (orientation: portrait)";
const HANDSET_LANDSCAPE = "(max-width: 959.98px) and (orientation: landscape)";
const TABLET_PORTRAIT = "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)"; */

/* Handset
: 
"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)"
HandsetLandscape
: 
"(max-width: 959.98px) and (orientation: landscape)"
HandsetPortrait
: 
"(max-width: 599.98px) and (orientation: portrait)"
Large
: 
"(min-width: 1280px) and (max-width: 1919.98px)"
Medium
: 
"(min-width: 960px) and (max-width: 1279.98px)"
Small
: 
"(min-width: 600px) and (max-width: 959.98px)"
Tablet
: 
"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)"
TabletLandscape
: 
"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)"
TabletPortrait
: 
"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)"
Web
: 
"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)"
WebLandscape
: 
"(min-width: 1280px) and (orientation: landscape)"
WebPortrait
: 
"(min-width: 840px) and (orientation: portrait)"
XLarge
: 
"(min-width: 1920px)"
XSmall
: 
"(max-width: 599.98px)" */

@Component({
  selector: 'app-games-catalog',
  templateUrl: './games-catalog.component.html',
  styleUrl: './games-catalog.component.scss'
})
export class GamesCatalogComponent implements OnInit{

  games:GameCard[]=[];
  demo!:GameCard;
  demo2!:GameCard;

  isBanner:boolean=true;
  carouselStep:number=1;
  carouselItems:number=6;


 

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService) {

    
  }



  ngOnInit(): void {

      this.themeService.themeChanged$.subscribe((nuevoTema) => {
            
        this.initializeOptions();
        
        
      });

      this.initializeOptions();

  }

  cols$ = this.breakpointObserver.observe([
    Breakpoints.HandsetPortrait, 
    Breakpoints.HandsetLandscape,
    Breakpoints.TabletPortrait,
    Breakpoints.TabletLandscape,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge
  ]).pipe(
    map((result) => {

      /* const isHandsetPortrait = result.breakpoints[HANDSET_PORTRAIT];
      const isHandsetLandscape = result.breakpoints[HANDSET_LANDSCAPE];
      const isTabletPortrait = result.breakpoints[TABLET_PORTRAIT]; */
      
      if (result.breakpoints[ Breakpoints.HandsetPortrait] || result.breakpoints[ Breakpoints.HandsetLandscape] ) {
        console.log('Handset detected');
        this.isBanner = false;
        this.carouselItems = 1;
        this.carouselStep = 1;
        return [
          { row: '1', cols: 1, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      } else if (result.breakpoints[ Breakpoints.TabletPortrait]) {
        console.log('TabletPortrait detected');
        this.isBanner = true;
        this.carouselItems = 3;
        this.carouselStep = 1;
        return [
          { row: '1', cols: 1, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      }else if (result.breakpoints[ Breakpoints.TabletLandscape] || result.breakpoints[ Breakpoints.Medium] ) {
        console.log('medium detected');
        this.isBanner = true;
        this.carouselItems = 4;
        this.carouselStep = 1;
        return [
          { row: '1', cols: 3, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      }else if (result.breakpoints[ Breakpoints.Large]) {
        console.log('medium detected');
        this.isBanner = true;
        this.carouselItems = 5;
        this.carouselStep = 2;
        return [
          { row: '1', cols: 3, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      }else if (result.breakpoints[ Breakpoints.XLarge] ) {
        console.log('medium detected');
        this.isBanner = true;
        this.carouselItems = 6;
        this.carouselStep = 3;
        return [
          { row: '1', cols: 3, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      }
      
      // Configuración por defecto (desktop o tamaños mayores)
      console.log('Default detected');
      this.isBanner = true;
      this.carouselItems = 6;
      this.carouselStep = 3;
      return [
        { row: '1', cols: 3, rows: 1 },
        { row: '2', cols: 1, rows: 1 },
        { row: '3', cols: 1, rows: 1 }
      ];
    })
  );
  
  

  private initializeOptions() {

    this.demo={
      title:"Street Fighter II",
      description:"Is a fighting video game originally released for the CP System arcade board in 1991. It is the second installment of the Street Fighter series and the sequel to the original Street Fighter released in 1987. This was the first game in the Street Fighter series to achieve worldwide fame and started the phenomenon of video games in the fighting genre.",
      price:10,
      offer:20,
      rating:3.5,
      downloads:120,
      image:"streetfighter.jpg"
   };
   
   this.games=trendigGames;
   
  
  }


  currentIndex = 0;

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.games.length - 1) {
      this.currentIndex++;
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 320}px)`; // Ajusta 320px al ancho de cada tarjeta + margen
  }

  getColspan(cols: number): number {
    return Math.max(cols - 1, 1);
  }

  

}
