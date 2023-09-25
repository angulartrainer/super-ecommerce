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

  constructor(private _demo: DemoService) {
    this._demo.random$
    .pipe(takeUntil(this.destroy$))
    .subscribe((random) => {
      console.log(random);
    })
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
}
