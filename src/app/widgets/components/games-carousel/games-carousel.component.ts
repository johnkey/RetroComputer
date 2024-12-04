import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GameCard, GameCardComponent } from '../../cards/game-card/game-card.component';


@Component({
  selector: 'app-games-carousel',
  templateUrl: './games-carousel.component.html',
  styleUrl: './games-carousel.component.scss'
})
export class GamesCarouselComponent implements AfterViewInit,OnChanges,OnDestroy{
  
  constructor(public elementRef: ElementRef){}
  
  @ViewChild('gameCarousel', { static: true }) gameCarousel!: ElementRef;
  
  

  @Input()
  games!: GameCard[];

  @Input()
  mode!: string;



  @Input() 
  visibleItems!:number; // Número inicial de ítems visibles
  @Input() 
  step = 1; // Número de ítems a desplazar
  itemWidth = 0; // Ancho dinámico de cada ítem
  currentIndex = 0;
  forward= 0;

  private resizeObserver!:ResizeObserver;

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  ngAfterViewInit(): void {
    this.updateCarousel();
    this.resizeObserver = new ResizeObserver(() => this.updateCarousel());
    this.resizeObserver.observe(this.gameCarousel.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visibleItems']) {
      this.updateCarousel();
    }
  }

  updateCarousel() {

    const carouselWidth = this.elementRef.nativeElement.clientWidth; // Ancho visible
    const computedStyle = getComputedStyle(this.gameCarousel.nativeElement);
  
    
    const paddingLeft = parseFloat(computedStyle.paddingLeft || '0');
    const paddingRight = parseFloat(computedStyle.paddingRight || '0');
    const availableWidth = carouselWidth - ((paddingLeft + paddingRight) * 2) - 32;

    //const containerWidth = this.gameCarousel.nativeElement.offsetWidth;
    //const singleItemWidth = containerWidth / this.visibleItems;


    // Calcular cuántos ítems caben en función del tamaño del contenedor
    //this.visibleItems = Math.max(1, Math.floor(containerWidth / singleItemWidth));
    
    this.itemWidth = availableWidth / this.visibleItems;
    this.forward = this.itemWidth  + paddingLeft  + paddingRight;
  
    // Asegurarse de que el índice actual no exceda el límite
    this.currentIndex = Math.min(this.currentIndex, this.games.length - this.visibleItems);
  }

 

  moveLeft() {
    this.currentIndex = Math.max(this.currentIndex - this.step, 0);
  }

  moveRight() {
    const maxIndex = Math.max(0, this.games.length - this.visibleItems);
    this.currentIndex = Math.min(this.currentIndex + this.step, maxIndex);
  }
  

 

}
