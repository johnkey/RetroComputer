import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { ButtonsComponent } from './dashboard/partials/widgets/buttons/buttons.component';

import { TablesComponent} from './dashboard/partials/widgets/tables/tables.component';
import { FormsComponent} from './dashboard/partials/widgets/forms/forms.component';
import { UserProfileComponent } from './dashboard/partials/admin/user-profile/user-profile.component';
import { ApexChartsComponent } from './dashboard/partials/widgets/apex-charts/apex-charts.component';
import { NgxChartsComponent } from './dashboard/partials/widgets/ngx-charts/ngx-charts.component';
import { SalesDashboardComponent } from './dashboard/partials/admin/sales-dashboard/sales-dashboard.component';
import { GamesCatalogComponent } from './dashboard/partials/pages/games-catalog/games-catalog.component';

import { LogingComponentsComponent } from './dashboard/partials/pages/loging-components/loging-components.component';
import { PricingPageComponent } from './dashboard/partials/pages/pricing-page/pricing-page.component';
import { MainComponent } from './dashboard/partials/main/main.component';

const routes: Routes = [
  {
    path:"",redirectTo:"dashboard/main",pathMatch:"full"
  },
  {
    path: 'dashboard',
    component: DashboardComponent, 
    children: [
      {
        path: '', 
        redirectTo: 'main', 
        pathMatch: 'full' 
      },
      {
        path: 'buttons', 
        component: ButtonsComponent, 
      },{
        path: 'tables', 
        component: TablesComponent, 
      },
      {
        path: 'sales', 
        component: SalesDashboardComponent
      },
      {
        path: 'user', 
        component: UserProfileComponent
      },
      {
        path: 'forms', 
        component: FormsComponent
      }
      ,
      {
        path: 'apex-charts', 
        component: ApexChartsComponent
      }
      ,
      {
        path: 'ngx-charts', 
        component: NgxChartsComponent
      }
      ,
      {
        path: 'games', 
        component: GamesCatalogComponent
      },
      {
        path: 'login', 
        component: LogingComponentsComponent
      },
      {
        path: 'pricing', 
        component: PricingPageComponent
      },
      {
        path: 'main', 
        component: MainComponent
      }

    ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
