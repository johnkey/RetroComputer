import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonsComponent } from './partials/widgets/buttons/buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './partials/widgets/tables/tables.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsComponent } from './partials/widgets/forms/forms.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserProfileComponent } from './partials/admin/user-profile/user-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ApexChartsComponent } from './partials/widgets/apex-charts/apex-charts.component';
import { NgxChartsComponent } from './partials/widgets/ngx-charts/ngx-charts.component';
import { SalesDashboardComponent } from './partials/admin/sales-dashboard/sales-dashboard.component';
import { GamesCatalogComponent } from './partials/pages/games-catalog/games-catalog.component';
import { CarouselModule } from 'primeng/carousel';
import { LogingComponentsComponent } from './partials/pages/loging-components/loging-components.component';
import { PricingPageComponent } from './partials/pages/pricing-page/pricing-page.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes=[]

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    ButtonsComponent,
    TablesComponent,
    FormsComponent,
    UserProfileComponent,
    ApexChartsComponent,
    NgxChartsComponent,
    SalesDashboardComponent,
    GamesCatalogComponent,
    LogingComponentsComponent,
    PricingPageComponent
    
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    WidgetsModule,
    NgApexchartsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule
    
  ]
})
export class DashboardModule { }
