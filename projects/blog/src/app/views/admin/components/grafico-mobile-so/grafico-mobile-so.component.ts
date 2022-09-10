import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jt-grafico-mobile-so',
  templateUrl: './grafico-mobile-so.component.html',
  styleUrls: ['./grafico-mobile-so.component.scss']
})
export class GraficoMobileSoComponent {
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

  // ngOnInit(): void {
  // }
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
