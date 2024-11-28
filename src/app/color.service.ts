import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  darkenColor(hex: string, percent: number): string {
    // Eliminar el "#" si está presente
    hex = hex.replace(/^#/, '');
  
    // Convertir el color a formato RGB (3 dígitos a 6 dígitos si es necesario)
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
  
    // Obtener componentes RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Oscurecer cada componente en el porcentaje indicado
    r = Math.floor(r * (1 - percent / 100));
    g = Math.floor(g * (1 - percent / 100));
    b = Math.floor(b * (1 - percent / 100));
  
    // Convertir de nuevo a hexadecimal y asegurarse de que cada valor tenga 2 caracteres
    const darkenedHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  
    return darkenedHex;
  }
}
