import { Component,Input,OnChanges,OnInit,SimpleChanges,inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ProgressCard, ProgressCardComponent } from 'src/app/widgets/cards/progress-card/progress-card.component';
import { SpinnerCardComponent } from 'src/app/widgets/cards/spinner-card/spinner-card.component';

import { ThemeService } from 'src/app/theme.service';
import * as ApexCharts from 'apexcharts';
import { ApexOptions } from 'ng-apexcharts';
import { series } from './data';


@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrl: './apex-charts.component.scss'
})
export class ApexChartsComponent implements OnInit,OnChanges{

  @Input() themeChanged: string = '';
  baseAngleCircleOptions!: ApexOptions;
  angleCircleOptions!: ApexOptions;
  angleCircleOptionsTransparent!: ApexOptions;
  angleCircleOptionsBox!: ApexOptions;
  baseLineChartOptions!:ApexOptions;
  lineChartOptions!:ApexOptions;
  lineChartOptionsTransparent!:ApexOptions;
  lineChartOptionsBox!:ApexOptions;
  baseRadarChartOptions!:ApexOptions;
  radarChartOptions!:ApexOptions;
  radarChartOptionsTransparent!:ApexOptions;
  radarChartOptionsBox!:ApexOptions;
  basicColumnChartOptions!:ApexOptions;
  areaChartOptions!:ApexOptions;

  constructor(private themeService: ThemeService,card: ProgressCardComponent,spinnerCard: SpinnerCardComponent, private breakpointObserver: BreakpointObserver) {

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
      this.updateCharts();
      
  }
  updateCharts() {
    ApexCharts.exec('angleCircle', 'updateOptions', this.angleCircleOptions,true,true);
      ApexCharts.exec('angleCircleTransparent', 'updateOptions', this.angleCircleOptionsTransparent,true,true);
      ApexCharts.exec('angleCircleBox', 'updateOptions', this.angleCircleOptionsBox,true,true);
      ApexCharts.exec('line', 'updateOptions', this.lineChartOptions,true,true);
      ApexCharts.exec('radar', 'updateOptions', this.radarChartOptions,true,true);
      ApexCharts.exec('radarTransparent', 'updateOptions', this.radarChartOptionsTransparent,true,true);
      ApexCharts.exec('radarBox', 'updateOptions', this.radarChartOptionsBox,true,true);
      ApexCharts.exec('bar', 'updateOptions', this.basicColumnChartOptions,true,true);
      ApexCharts.exec('line', 'updateOptions', this.lineChartOptions,true,true);
      ApexCharts.exec('lineTransparent', 'updateOptions', this.lineChartOptionsTransparent,true,true);
      ApexCharts.exec('lineBox', 'updateOptions', this.lineChartOptionsBox,true,true);
      ApexCharts.exec('area', 'updateOptions', this.areaChartOptions,true,true);
  }
  ngOnInit(): void {

    this.themeService.themeChanged$.subscribe((nuevoTema) => {
      this.ngOnInit(); // update theme
      this.updateCharts();
      let primaryColor:string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-primary");
      this.colorLabels(primaryColor);

    });

    this.initializeOptions();
    this.angleCircleOptions = this.createChartOptions(this.baseAngleCircleOptions,"angleCircle");
    this.angleCircleOptionsTransparent = this.createChartOptions(this.baseAngleCircleOptions,"angleCircleTransparent");
    this.angleCircleOptionsBox = this.createChartOptions(this.baseAngleCircleOptions,"angleCircleBox");
    this.radarChartOptions = this.createChartOptions(this.baseRadarChartOptions,"radar");
    this.radarChartOptionsTransparent = this.createChartOptions(this.baseRadarChartOptions,"radarTransparent");
    this.radarChartOptionsBox = this.createChartOptions(this.baseRadarChartOptions,"radarBox");
    this.lineChartOptions = this.createChartOptions(this.baseLineChartOptions,"line");
    this.lineChartOptionsTransparent = this.createChartOptions(this.baseLineChartOptions,"lineTransparent");
    this.lineChartOptionsBox = this.createChartOptions(this.baseLineChartOptions,"lineBox");
    
    
    
  }

  createChartOptions(baseOptions: any, chartId: string): any {
    return {
      ...baseOptions,
      chart: {
        ...baseOptions.chart,
        id: chartId,
      },
    };
  }
  

  initializeOptions(){
    
    let primaryColor:string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-primary");
    
    this.baseAngleCircleOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 300,
        type: "radialBar",
        id:"angleCircle"
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
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
      //colors: [primaryColor, "#0084ff", "#39539E", "#0077B5"],
      labels: ["Story Points", "Time Units", "Progress", "Estimated"],
      legend: {
        show: true,
        floating: true,
        fontSize: "16px",
        position: 'left',
        offsetX: 0,
        offsetY: 10,
        horizontalAlign:'left',
        labels: {
          useSeriesColors: true
        },
        formatter: function(seriesName: string, opts: { w: { globals: { series: { [x: string]: string; }; }; }; seriesIndex: string | number; }) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 5
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    };
    

    this.baseLineChartOptions = {
      series: [
        {
          name: "stepline-series",
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
        }
      ],
      chart: {
        type: "line",
        height: 280,
        foreColor: primaryColor,
        toolbar: {
          show: false
        },
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        },
        id:"line",
        group:"lines"
      },
      stroke: {
        curve: "stepline"
      },
      dataLabels: {
        enabled: false       
      },
      title: {
        text: "Downloads",
        align: "left"
      },
      markers: {
        hover: {
          sizeOffset: 4
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
      grid:{
        borderColor: primaryColor
      }
    };


    this.baseRadarChartOptions = {
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
        text: "Basic Radar Chart"
      },
      xaxis: {
        categories: ["January", "February", "March", "April", "May", "June"],
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


    this.basicColumnChartOptions = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: "bar",
        height: 260,
        foreColor: primaryColor,
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        },
        toolbar:{
          show: false
        },
        id:"bar",
        group:"bars"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        },
        
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ],
        axisBorder:{color:primaryColor},     
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        },
        axisBorder:{color:primaryColor}
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      },
      theme:{
        monochrome: {
          enabled: true,
          color: primaryColor,
          shadeTo: 'dark',
          shadeIntensity: 0.65
        }
      },
      grid:{
        borderColor: primaryColor
      }
    };

    this.areaChartOptions = {
      series: [
        {
          name: "STOCK ABC",
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
        text: "Fundamental Analysis of Stocks",
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

    
     
  }

  

  progressCard1: ProgressCard = {
    title: "Work in Progress",
    showMenu: false,
    value: "215",
    text: "Story Points",
    pendding: "50",
    progress: "69%"
  };

  progressCard2: ProgressCard = {
    title: "Propossal",
    showMenu: false,
    value: "360",
    text: "Time Units",
    pendding: "120",
    progress: "75%"
  };

  

  /** Based on the screen size, switch from standard to one column per row */
  cols$ = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.TabletPortrait]).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { row: '1', cols: 1, rows: 1 },
          { row: '2', cols: 1, rows: 1 }
        ];
      }

      return [
        { row: '1', cols: 4, rows: 1 },
        { row: '2', cols: 2, rows: 1 }
      ];
    })

    
    
  );

  getColspan(cols:number){
    if(cols==4){
      return 2;
    }else{
      return 1;
    }
  }

  redrawChart(chart: any,color:string) {

    setTimeout(() => {
    // Ejecuta el redimensionamiento del gráfico
    chart.windowResizeHandler();

    // Espera un momento y luego aplica el color a las etiquetas
    
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
