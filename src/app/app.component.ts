import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavigationComponent } from './shared/top-navigation/top-navigation.component';

@Component({
  selector: 'super-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopNavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'super-ecommerce';
}
