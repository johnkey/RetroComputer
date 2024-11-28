// theme.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new Subject<string>();
  themeChanged$ = this.themeSubject.asObservable();

  changeTheme(nuevoTema: string) {
    this.themeSubject.next(nuevoTema);
  }

}
