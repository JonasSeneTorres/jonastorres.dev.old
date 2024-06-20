import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-grafico-num-visitantes',
  templateUrl: './grafico-num-visitantes.component.html',
  styleUrls: ['./grafico-num-visitantes.component.scss'],
})
export class GraficoNumVisitantesComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  chartLabels: string[] = ['mobile', 'desktop'];

  chartData: ChartData<'bar'> = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Essa semana' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Semana passada' },
    ],
  };
  chartType: ChartType = 'bar';
  chartOptions = {
    responsive: true,
  };

  constructor(protected override injector: Injector) {
    super(injector);
  }

  chartClicked({ event, active }: { event: ChartEvent; active: {}[] }): void {}

  chartHovered({ event, active }: { event: ChartEvent; active: {}[] }): void {}
}
