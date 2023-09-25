import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private random: BehaviorSubject<number> = new BehaviorSubject(0);

  random$ = this.random.asObservable();

  constructor() {
    setInterval(() => {
      this.random.next(Math.round(Math.random() * 1000000));
    }, 1000);
  }
}
