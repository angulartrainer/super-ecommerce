import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

import * as ApexCharts from 'apexcharts';
import { ProductService } from '../services/product.service';

@Directive({
  selector: '[superBarChart]',
  standalone: true,
})
export class BarChartDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const container = this.renderer.createElement('div');
    this.renderer.appendChild(this.el.nativeElement, container);

    var options = {
      series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
    };

    const chart = new ApexCharts(container, options);
    chart.render();
  }
}
