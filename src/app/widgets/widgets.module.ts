import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCardComponent } from './cards/progress-card/progress-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { SpinnerCardComponent } from './cards/spinner-card/spinner-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartComponent } from './charts/apex/apex-chart/apex-chart.component';
import { NgxHeatMapComponent } from './charts/ngx-charts/ngx-heat-map/ngx-heat-map.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxAdvancedPieChartComponent } from './charts/ngx-charts/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component';
import { NgxGridPieChartComponent } from './charts/ngx-charts/ngx-grid-pie-chart/ngx-grid-pie-chart.component';
import { NgxLineChartComponent } from './charts/ngx-charts/ngx-line-chart/ngx-line-chart.component';
import { NgxVerticalBarChartComponent } from './charts/ngx-charts/ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';
import { NgxHorizontalBarChartComponent } from './charts/ngx-charts/ngx-horizontal-bar-chart/ngx-horizontal-bar-chart.component';
import { NgxNumberCardsComponent } from './charts/ngx-charts/ngx-number-cards/ngx-number-cards.component';
import { UserCardComponent } from './cards/user-card/user-card.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ChatComponent } from './components/chat/chat.component';
import { MatListModule } from '@angular/material/list';
import { GameCardComponent } from './cards/game-card/game-card.component';
import { LastMessagesComponent } from './components/last-messages/last-messages.component';
import { GamesCarouselComponent } from './components/games-carousel/games-carousel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './components/login/login.component';
import { PricingCardComponent } from './cards/pricing/pricing.component';
import { CommandModalComponent } from './components/command-modal/command-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProgressCardComponent,
    SpinnerCardComponent,
    UserCardComponent,
    ApexChartComponent,
    NgxHeatMapComponent,
    NgxAdvancedPieChartComponent,
    NgxGridPieChartComponent,
    NgxLineChartComponent,
    NgxVerticalBarChartComponent,
    NgxHorizontalBarChartComponent,
    NgxNumberCardsComponent,
    ChatComponent,
    GameCardComponent,
    LastMessagesComponent,
    GamesCarouselComponent,
    LoginComponent,
    PricingCardComponent,
    CommandModalComponent
    
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    NgApexchartsModule,
    NgxChartsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule ,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports:      [SpinnerCardComponent,ProgressCardComponent,UserCardComponent,ApexChartComponent,NgxHeatMapComponent,NgxAdvancedPieChartComponent,NgxGridPieChartComponent,NgxLineChartComponent,NgxVerticalBarChartComponent,NgxHorizontalBarChartComponent,NgxNumberCardsComponent,ChatComponent,GameCardComponent,LastMessagesComponent,GamesCarouselComponent,LoginComponent,PricingCardComponent,CommandModalComponent]
}) 
export class WidgetsModule { } 
