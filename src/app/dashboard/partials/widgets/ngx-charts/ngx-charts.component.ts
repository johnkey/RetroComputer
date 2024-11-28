import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {  Component,  OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import {data ,advancedPiedata,gridPiedata, lineChartdata,verticalBardata} from './data';
import { HeatMapOptions } from 'src/app/widgets/charts/ngx-charts/ngx-heat-map/ngx-heat-map.component';
import { AdvancedPieChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-advanced-pie-chart/ngx-advanced-pie-chart.component';
import {  BaseChartComponent, ScaleType } from '@swimlane/ngx-charts';
import { GridPieChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-grid-pie-chart/ngx-grid-pie-chart.component';
import { ThemeService } from 'src/app/theme.service';
import { LineChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-line-chart/ngx-line-chart.component';
import { BarChartOptions } from 'src/app/widgets/charts/ngx-charts/ngx-vertical-bar-chart/ngx-vertical-bar-chart.component';
import { ColorService } from 'src/app/color.service';


@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrl: './ngx-charts.component.scss'
})
export class NgxChartsComponent implements OnInit{

  heatMapOptions!:HeatMapOptions;
  advancedPieOptios!:AdvancedPieChartOptions;
  gridPieOptions!:GridPieChartOptions;
  lineChartOptions!: LineChartOptions
  verticalBarOptions!: BarChartOptions;
  horizontalBarOptions!: BarChartOptions;

  
  
  

  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService,private colorService:ColorService) {

    
  }
  
  ngOnInit(): void {

    this.themeService.themeChanged$.subscribe((nuevoTema) => {
        
        this.initializeOptions();
        
    });
    
    this.initializeOptions();


  }


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
  

  private initializeOptions() {
    
    let radianceColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-highlight");
    let screenColor: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-surface");
    let secondarytext: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-secondary-on-dark");
    let foregroundText: string = getComputedStyle(document.body).getPropertyValue("--mdc-theme-text-primary-on-dark");

    this.heatMapOptions = {
      results: data,
      view: [300, 250],
      legend: true,
      showLabels: true,
      animations: true,
      xAxis: true,
      yAxis: true,
      showYAxisLabel: false,
      showXAxisLabel: false,
      xAxisLabel: 'Day',
      yAxisLabel: 'Hours',
      colors:[radianceColor, screenColor]
    };

    this.advancedPieOptios = {
      results: advancedPiedata,
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

    this.gridPieOptions = {
      results: gridPiedata,
      view: [700, 300],
      showLegend: true,
      showLabels: true,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, this.colorService.darkenColor(radianceColor, 30), foregroundText, this.colorService.darkenColor(radianceColor, 60), secondarytext, this.colorService.darkenColor(radianceColor, 10)]
      }
    };

    this.lineChartOptions = {
      results: lineChartdata,
      view: [350, 250],
      legend: false,
      showLabels: true,
      animations: true,
      xAxis: true,
      yAxis: true,
      showYAxisLabel: false,
      showXAxisLabel: false,
      showGridLines: false,
      xAxisLabel: 'Users',
      yAxisLabel: 'Year',
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, secondarytext]
      }
    };


    this.verticalBarOptions = {
      results: verticalBardata,
      view: [700, 250],
      showLabels: true,
      legend: true,
      animations: true,
      showXAxis: true,
      showYAxis: true,
      showYAxisLabel: true,
      showXAxisLabel: false,
      showGridLines: false,
      xAxisLabel: 'Countries',
      yAxisLabel: 'GDP Per Capita',
      roundEdges: false,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, secondarytext, screenColor]
      }
    };

    this.horizontalBarOptions = {
      results: verticalBardata,
      view: [300, 250],
      showLabels: true,
      legend: true,
      animations: true,
      showXAxis: true,
      showYAxis: true,
      showYAxisLabel: true,
      showXAxisLabel: false,
      showGridLines: false,
      xAxisLabel: 'Countries',
      yAxisLabel: 'GDP Per Capita',
      roundEdges: false,
      colorScheme: {
        name: 'monocrome-scale',
        selectable: true,
        group: ScaleType.Ordinal,
        domain: [radianceColor, foregroundText, secondarytext, screenColor]
      }
    };


  }

  

}
