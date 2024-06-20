import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { MasterBaseComponent } from 'projects/guide-dog/src/lib/components/master-base/master-base.component';

@Component({
  selector: 'jt-grafico-desktop-so',
  templateUrl: './grafico-desktop-so.component.html',
  styleUrls: ['./grafico-desktop-so.component.scss'],
})
export class GraficoDesktopSOComponent extends MasterBaseComponent implements OnInit, OnDestroy {
  public doughnutChartLabels: string[] = ['Chrome', 'Firefox', 'IExplorer', 'Chrome', 'Firefox', 'IExplorer'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [350, 450, 100, 350, 450, 100] }],
  };
  doughnutChartType: ChartType = 'doughnut';

  constructor(protected override injector: Injector) {
    super(injector);
  }

  public chartClicked({ event, active }: { event: ChartEvent; active: {}[] }): void {}

  public chartHovered({ event, active }: { event: ChartEvent; active: {}[] }): void {}
}
