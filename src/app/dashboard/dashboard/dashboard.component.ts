import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { ThemeService } from 'src/app/theme.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private themeService: ThemeService,private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges(); 
  }
  
  private breakpointObserver = inject(BreakpointObserver);

  panelOpenState = false;

  isHandsetSideNav$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.HandsetPortrait,Breakpoints.TabletLandscape,Breakpoints.TabletPortrait,Breakpoints.Large,Breakpoints.Medium,Breakpoints.Small,Breakpoints.Tablet,Breakpoints.WebPortrait])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  
  logout(){
    
  }
 //function that changes the parent class to switch from one monochrome theme to another
  toggleTheme(isAmberMode: boolean) {
    if(isAmberMode){
      document.body.classList.remove('green-theme');
      document.body.classList.add('amber-theme');
      this.themeService.changeTheme('amber-theme');
    } else {
      document.body.classList.remove('amber-theme');
      document.body.classList.add('green-theme');
      this.themeService.changeTheme('green-theme');
    }
  }

  
  

}
