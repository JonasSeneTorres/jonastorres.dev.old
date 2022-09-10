import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jt-grafico-num-visitantes',
  templateUrl: './grafico-num-visitantes.component.html',
  styleUrls: ['./grafico-num-visitantes.component.scss']
})
export class GraficoNumVisitantesComponent {
  chartLabels: string[] = ['mobile', 'desktop'];

  chartData: ChartData<'bar'> = {
    labels: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Essa semana' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Semana passada' }
    ]
  };
  chartType: ChartType = 'bar';
  chartOptions = {
    responsive: true,
  };

  constructor() {}

  chartClicked({event, active}: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  chartHovered({event, active}: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
