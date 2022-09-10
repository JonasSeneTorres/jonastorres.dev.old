import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jt-grafico-desktop-navegadores',
  templateUrl: './grafico-desktop-navegadores.component.html',
  styleUrls: ['./grafico-desktop-navegadores.component.scss']
})
export class GraficoDesktopNavegadoresComponent {
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
