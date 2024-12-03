import { Component, Input ,Injectable, inject} from '@angular/core';
import { ProgressCard } from '../progress-card/progress-card.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-spinner-card',
  templateUrl: './spinner-card.component.html',
  styleUrls: ['./spinner-card.component.scss']
})
export class SpinnerCardComponent {

  private breakpointObserver = inject(BreakpointObserver);

  @Input()
  values!: ProgressCard; 

  @Input()
  mode!: string;

  diameter = this.breakpointObserver.observe([
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
        return 150;
      } else if (result.breakpoints[ Breakpoints.TabletPortrait]) {
        return 150;
      }else if (result.breakpoints[ Breakpoints.TabletLandscape] || result.breakpoints[ Breakpoints.Medium] ) {
        return 90;
      }else if (result.breakpoints[ Breakpoints.Large]) {
        return 120;
      }else if (result.breakpoints[ Breakpoints.XLarge] ) {
        return 150;
      }
      
      // Configuración por defecto (desktop o tamaños mayores)
      return 150;
    })
  );

}
