import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'jt-grafico-dispositivos',
  templateUrl: './grafico-dispositivos.component.html',
  styleUrls: ['./grafico-dispositivos.component.scss'],
})
export class GraficoDispositivosComponent {
  chartLabels: string[] = ['mobile', 'desktop'];

  chartData: ChartData<'doughnut'> = {
    labels: this.chartLabels,
    datasets: [{ data: [70, 30] }],
  };
  chartType: ChartType = 'doughnut';
  chartOptions = {
    responsive: true,
  };

  constructor() {}

  chartClicked({event, active}: {
    event: ChartEvent;
    active: {}[];
  }): void {
  }

  chartHovered({event, active}: {
    event: ChartEvent;
    active: {}[];
  }): void {
  }
}
