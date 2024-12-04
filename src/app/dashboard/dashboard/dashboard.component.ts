import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { ThemeService } from 'src/app/theme.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  constructor(private themeService: ThemeService,private cdr: ChangeDetectorRef) {}
  

  ngAfterViewInit() {
    this.cdr.detectChanges(); 
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.HandsetPortrait,Breakpoints.TabletLandscape,Breakpoints.TabletPortrait,Breakpoints.Medium,Breakpoints.Small,Breakpoints.Tablet,Breakpoints.Large]).subscribe(result => {
      this.isHandsetSideNav = result.matches;
    });
  }

  
  private breakpointObserver = inject(BreakpointObserver);

  isHandsetSideNav: boolean = false; 

  
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


