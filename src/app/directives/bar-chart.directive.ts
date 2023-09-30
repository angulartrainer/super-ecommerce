import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import * as ApexCharts from 'apexcharts';
import { ProductService } from '../services/product.service';

@Directive({
  selector: '[superBarChart]',
  standalone: true,
})
export class BarChartDirective implements OnInit, OnChanges {
  @Input() data: number[] = [];
  @Input() xaxis: string[] = [];

  private chart: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const container = this.renderer.createElement('div');
    this.renderer.appendChild(this.el.nativeElement, container);

    var options = {
      series: [
        {
          name: "rating",
          data: this.data,
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: this.xaxis,
      },
    };

    this.chart = new ApexCharts(container, options);
    this.chart.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.chart) {
      this.chart.updateSeries([
        { name : "rating", data: changes['data']['currentValue'] }
      ])
    }
  }
}
