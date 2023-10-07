import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoService } from 'src/app/services/demo.service';
import { Subject, takeUntil } from 'rxjs';
import { ModalService } from '../modal.service';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { DemoContentModalComponent } from '../demo-content-modal/demo-content-modal.component';

@Component({
  selector: 'super-demo-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss'],
})
export class DemoLifecycleComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  destroy$ = new Subject<void>();

  constructor(
    private _demo: DemoService,
    private modalService: ModalService,
    private overlay: Overlay
  ) {
    this._demo.random$.pipe(takeUntil(this.destroy$)).subscribe((random) => {
      // console.log(random);
    });
  }

  @Input() message: string = '';

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openModal() {
    const config = new OverlayConfig({
      hasBackdrop: true,
      panelClass: 'modal',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    console.log('open modal');

    const { overlay, instance } =
      this.modalService.open<DemoContentModalComponent>(
        DemoContentModalComponent,
        config
      );

    instance.ok.subscribe(() => {
      console.log('Ok');
    });

    instance.close.subscribe(() => {
      console.log('Close');
      overlay.dispose();
    });

    overlay.backdropClick().subscribe(() => {
      overlay.dispose();
    });
  }
}
