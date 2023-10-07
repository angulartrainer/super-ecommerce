import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private random: ReplaySubject<number> = new ReplaySubject(2);

  random$ = this.random.asObservable();

  constructor() {
    setInterval(() => {
      const random1 = Math.round(Math.random() * 1000000);
      const random2 = Math.round(Math.random() * 1000000);
      const random3 = Math.round(Math.random() * 1000000);
      const random4 = Math.round(Math.random() * 1000000);

      console.log(random1, 'random1');
      console.log(random2, 'random2');
      console.log(random3, 'random3');
      console.log(random4, 'random4');

      this.random.next(random1);
      this.random.next(random2);
      this.random.next(random3);
      this.random.next(random4);
    }, 5000);

    this.random.subscribe((num) => {
      console.log(num, "subscribe");
    });
  }
}
