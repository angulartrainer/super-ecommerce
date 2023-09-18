import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'super-top-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent {
  applicationName: string = 'Super Ecommerce';
}
