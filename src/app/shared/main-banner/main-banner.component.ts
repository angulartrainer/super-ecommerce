import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'super-main-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent {
  @Input() image: string = 'https://via.placeholder.com/1200x400';
  @Input() alttext: string = '';
  @Input() heading: string = '';

  @Output() headingclicked: EventEmitter<any> = new EventEmitter();

  headingClickHandler(event: any) {
    this.headingclicked.emit(event)
  }
}
