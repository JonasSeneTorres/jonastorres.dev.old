import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'jt-grafico-desktop-so',
  templateUrl: './grafico-desktop-so.component.html',
  styleUrls: ['./grafico-desktop-so.component.scss']
})
export class GraficoDesktopSOComponent /*implements OnInit*/ {
  public doughnutChartLabels: string[] = [
    'Chrome',
    'Firefox',
    'IExplorer',
    'Chrome',
    'Firefox',
    'IExplorer'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 350, 450, 100 ] }
    ]
  };
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  }
}
