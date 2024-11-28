import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Pricing } from 'src/app/widgets/cards/pricing/pricing.component';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver){
    
  }
  
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.TabletPortrait]).pipe(
      map(({ matches }) => {
        if (matches) {
          this.isHandset=true;
        }else{
          this.isHandset=false;
        }
    
        
        })
      ).subscribe();
  }

  isHandset!:boolean;

  

  pricingFree:Pricing={
    icon:'person',
    description:"Free Small Business Package",
    free: true,
    price: '5$',
    offer: '0$',
    title:"Super Saiyan",
    legend:"3 users per month",
    items:[
      {
        title: 'Almacenamiento ilimitado',
        included: true
      },
      {
        title: 'Carga archivos de hasta 150 GB',
        included: true
      },
      {
        title: 'Hubs inteligentes',
        included: true
      },
      {
        title: 'Uso compartido',
        included: true
      },
      {
        title: 'Estándares SOC avanzados',
        included: false
      },
      {
        title: 'Integraciones como Microsoft Office, Copilot, Salesforce',
        included: false
      },
      {
        title: '1.000 llamadas API al mes',
        included: true
      },
      {
        title: 'Flujos de trabajo avanzados',
        included: false
      },
      {
        title: 'Asistencia 24/7',
        included: false
      }
    ]
  };

    pricingMedium:Pricing={
      icon:'group_add',
      description:"For medium-sized companies that need more resources and to improve their processes",
      free: false,
      price: '29$',
      offer: '25$',
      title:"Super Saiyan God",
      legend:"100 users per month",
      items:[
        {
          title: 'Almacenamiento ilimitado',
          included: true
        },
        {
          title: 'Carga archivos de hasta 150 GB',
          included: true
        },
        {
          title: 'Hubs inteligentes',
          included: true
        },
        {
          title: 'Uso compartido',
          included: true
        },
        {
          title: 'Estándares SOC avanzados',
          included: false
        },
        {
          title: 'Integraciones como Microsoft Office, Copilot, Salesforce',
          included: true
        },
        {
          title: '100.000 llamadas API al mes',
          included: true
        },
        {
          title: 'Flujos de trabajo avanzados',
          included: false
        },
        {
          title: 'Asistencia 24/7',
          included: false
        }
      ]
    };

    pricingPremium:Pricing={
      icon:'bolt',
      description:"All services at your fingertips without surprises",
      free: false,
      price: '99',
      offer: '88$',
      title:"Ultra Instinct",
      legend:"1.000+ users per month",
      items:[
        {
          title: 'Almacenamiento ilimitado',
          included: true
        },
        {
          title: 'Carga archivos de hasta 150 GB',
          included: true
        },
        {
          title: 'Hubs inteligentes',
          included: true
        },
        {
          title: 'Uso compartido',
          included: true
        },
        {
          title: 'Estándares SOC avanzados',
          included: true
        },
        {
          title: 'Integraciones como Microsoft Office, Copilot, Salesforce',
          included: true
        },
        {
          title: 'LLamadas API ilimitadas',
          included: true
        },
        {
          title: 'Flujos de trabajo avanzados',
          included: true
        },
        {
          title: 'Asistencia 24/7',
          included: true
        }
      ]
    };
   

  };

  



 

 











