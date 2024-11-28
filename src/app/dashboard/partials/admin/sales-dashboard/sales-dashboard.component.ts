import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
import { map } from 'rxjs';
import { ThemeService } from 'src/app/theme.service';
import { AdvancedPieChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component';
import { countrySales, platformsdata, publishersdata, series } from './data';

import { ApexOptions } from 'ng-apexcharts';
import { BarChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';
import { ProgressCard } from 'src/app/widgets/cards/progress-card/progress-card.component';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrl: './sales-dashboard.component.scss'
})
export class SalesDashboardComponent implements OnInit{
  

  advancedPieOptios!:AdvancedPieChartOptions;
  monthSales!:ProgressCard;
  areaChartOptions!:ApexOptions;
  radarChartOptions!:ApexOptions;
  horizontalBarOptionsPlatforms!: BarChartOptions;
  horizontalBarOptionsPublishers!: BarChartOptions;

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService) {

    
  }

  ngOnInit(): void {
    
    this.themeService.themeChanged$.subscribe((nuevoTema) => {
          
        this.initializeOptions();
        ApexCharts.exec('area', 'updateOptions', this.areaChartOptions,true,true);
        ApexCharts.exec('radar', 'updateOptions', this.radarChartOptions,true,true);
        
    });
  
    this.initializeOptions();
  }

 /** Based on the screen size, switch from standard to one column per row */
 cols$ = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.TabletPortrait]).pipe(
  map(({ matches }) => {
    if (matches) {
      return [
        { row: '1', cols: 1, rows: 1 },
        { row: '2', cols: 1, rows: 1 },
        { row: '3', cols: 1, rows: 1 }
      ];
    }

    return [
      { row: '1', cols: 4, rows: 1 },
      { row: '2', cols: 1, rows: 1 },
      { row: '3', cols: 2, rows: 1 }
    ];
    })
  );

  private initializeOptions() {
    
    let radianceColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-highlight");
    let screenColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-surface");
    let secondarytext: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-secondary-on-dark");
    let foregroundText: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-primary-on-dark");
    let primaryColor:string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-primary");
    

    this.advancedPieOptios = {
      results: countrySales,
      view: [700, 250],
      gradient: true,
      showLegend: true,
      showLabels: true,
      isDoughnut: false,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, secondarytext, screenColor]
      }
    };

    this.monthSales = {
      title: "Month Sales",
      showMenu: false,
      value: "5.234",
      text: "$ dollars",
      pendding: "10 days",
      progress: "21 days"
    };

    this.areaChartOptions = {
      series: [
        {
          name: "ANUAL BALANCE",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 250,
        zoom: {
          enabled: false
        },
        events: {
          mounted: (chart) => {

            this.redrawChart(chart,primaryColor);
            
          }
        },
        id:"area"
          
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      colors: [primaryColor],
      title: {
        text: "Anual Balance",
        align: "left",
        style:{
          color: primaryColor
        }
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
        labels:{
          style:{
            colors: [primaryColor]
          }
        }
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

    this.radarChartOptions = {
      series: [
        {
          name: "Series 1",
          data: [85, 50, 30, 40, 60, 20]
        }
      ],
      chart: {
        height: 300,
        type: "radar",
        foreColor: primaryColor,
        toolbar: {
          show: false
        },
        id:"radar",
        group:"radars"
      },
      title: {
        text: "Percent by Platform"
      },
      xaxis: {
        categories: ["PS5", "PS4", "XBOX", "PC", "Nintendo", "Android & iOS"],
        labels:{
          style:{
            colors : [primaryColor,primaryColor,primaryColor,primaryColor,primaryColor,primaryColor]
          }
        }
      },
      theme:{
        monochrome: {
          enabled: true,
          color: primaryColor,
          shadeTo: 'dark',
          shadeIntensity: 0.50
        }
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: primaryColor, 
            connectorColors: primaryColor
          }
        }
      }
    };

    this.horizontalBarOptionsPlatforms = {
      results: platformsdata,
      view: [700, 200],
      showLabels: true,
      legend: true,
      animations: true,
      showXAxis: true,
      showYAxis: true,
      showYAxisLabel: true,
      showXAxisLabel: false,
      showGridLines: false,
      xAxisLabel: 'Amount',
      yAxisLabel: 'Platforms',
      roundEdges: false,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, secondarytext, screenColor]
      }
    };

    this.horizontalBarOptionsPublishers = {
      results: publishersdata,
      view: [700, 200],
      showLabels: true,
      legend: true,
      animations: true,
      showXAxis: true,
      showYAxis: true,
      showYAxisLabel: true,
      showXAxisLabel: false,
      showGridLines: false,
      xAxisLabel: 'Amount',
      yAxisLabel: 'Publishers',
      roundEdges: false,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, secondarytext, screenColor]
      }
    };
    
   
  }

  redrawChart(chart: any,color:string) {

    // Ejecuta el redimensionamiento del gráfico
    chart.windowResizeHandler();

    // Espera un momento y luego aplica el color a las etiquetas
    setTimeout(() => {
      this.colorLabels(color);
    }, 200); // Ejecutar en el siguiente ciclo de eventos
    
  }

  colorLabels(color:string) {

    // Espera un momento y luego aplica el color a las etiquetas
    setTimeout(() => {
      // Modificar color de etiquetas de eje X
      document.querySelectorAll(".apexcharts-xaxis text").forEach((label) => {
        (label as HTMLElement).style.fill = color;  // Cambia "primaryColor" al color deseado
      });

      // Modificar color de etiquetas de eje Y
      document.querySelectorAll(".apexcharts-yaxis text").forEach((label) => {
        (label as HTMLElement).style.fill = color;  // Cambia "primaryColor" al color deseado
      });
    }, 200); // Ejecutar en el siguiente ciclo de eventos
    
  }

}
