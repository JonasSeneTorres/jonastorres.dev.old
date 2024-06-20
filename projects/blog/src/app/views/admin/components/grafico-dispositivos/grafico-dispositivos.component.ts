import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-grafico-dispositivos',
  templateUrl: './grafico-dispositivos.component.html',
  styleUrls: ['./grafico-dispositivos.component.scss'],
})
export class GraficoDispositivosComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  chartLabels: string[] = ['mobile', 'desktop'];

  chartData: ChartData<'doughnut'> = {
    labels: this.chartLabels,
    datasets: [{ data: [70, 30] }],
  };
  chartType: ChartType = 'doughnut';
  chartOptions = {
    responsive: true,
  };

  constructor(protected override injector: Injector) {
    super(injector);
  }

  chartClicked({ event, active }: { event: ChartEvent; active: {}[] }): void {}

  chartHovered({ event, active }: { event: ChartEvent; active: {}[] }): void {}
}
