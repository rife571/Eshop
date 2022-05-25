import { Component, OnInit } from '@angular/core';
import  {} from 'ng2-charts';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-chartpolar',
  templateUrl: './chartpolar.component.html',
  styleUrls: ['./chartpolar.component.css']
})
export class ChartpolarComponent implements OnInit {

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [ {
      data: [ 300, 500, 100, 40, 120 ],
      label: 'Series 1'
    } ]
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit(): void {
  }

}
