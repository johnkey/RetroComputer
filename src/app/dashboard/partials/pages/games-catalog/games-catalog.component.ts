import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';

import { trendigGames } from './data';
import { GameCard } from 'src/app/widgets/cards/game-card/game-card.component';

const HANDSET_PORTRAIT = "(max-width: 599.98px) and (orientation: portrait)";
const HANDSET_LANDSCAPE = "(max-width: 959.98px) and (orientation: landscape)";
const TABLET_PORTRAIT = "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)";

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
    Breakpoints.Handset, 
    Breakpoints.TabletPortrait
  ]).pipe(
    map((result) => {

      const isHandsetPortrait = result.breakpoints[HANDSET_PORTRAIT];
      const isHandsetLandscape = result.breakpoints[HANDSET_LANDSCAPE];
      const isTabletPortrait = result.breakpoints[TABLET_PORTRAIT];
      
      if (isHandsetPortrait ) {
        console.log('Handset detected');
        this.isBanner = false;
        this.carouselItems = 1;
        this.carouselStep = 1;
        return [
          { row: '1', cols: 1, rows: 1 },
          { row: '2', cols: 1, rows: 1 },
          { row: '3', cols: 1, rows: 1 }
        ];
      } else if (isTabletPortrait || isHandsetLandscape) {
        console.log('TabletPortrait detected');
        this.isBanner = true;
        this.carouselItems = 3;
        this.carouselStep = 1;
        return [
          { row: '1', cols: 1, rows: 1 },
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
