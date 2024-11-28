import { Component, Input } from '@angular/core';



export interface GameCard {
  title: string;
  description: string;
  price: number;
  offer?: number;
  rating?: number;
  downloads?:number;
  image: string;
}

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  @Input()
  game!: GameCard;

  @Input()
  mode!: string;

  @Input()
  banner!: boolean;

  

  getStars(rating: number): boolean[] {
    const fullStars = Math.floor(rating); // Número de estrellas completas
    const halfStar = rating % 1 !== 0; // Si hay medio punto de estrella
    const stars = Array(5).fill(false); // Inicializa un array de 5 estrellas

    // Marca las estrellas llenas (completas)
    for (let i = 0; i < fullStars; i++) {
      stars[i] = true;
    }

    // Si hay medio punto de estrella, marca la siguiente estrella como media
    if (halfStar) {
      stars[fullStars] = null; // Esto indica que hay una estrella media
    }

    return stars;
  }

}
