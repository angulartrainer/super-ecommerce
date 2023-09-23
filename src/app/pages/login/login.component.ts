import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'super-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _user: UserService) {}

  error: any = null;

  loginUser(form: NgForm) {
    if (form.valid) {
      console.log('make api call');
      console.log(form.value);
      const { email, password } = form.value;

      this._user.login(email, password).subscribe({
        error: ({error}) => {
          console.log(error);
          this.error = error;
        },
      });
    } else {
      console.log('error in form');
    }
  }
}
