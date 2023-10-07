import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'super-demo-content-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-content-modal.component.html',
  styleUrls: ['./demo-content-modal.component.scss'],
})
export class DemoContentModalComponent {
  @Output() ok: EventEmitter<void> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();

  okAction() {
    this.ok.emit();
  }

  cancelAction() {
    this.close.emit();
  }
}
