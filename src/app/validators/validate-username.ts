import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, switchMap } from 'rxjs';
import { UserService } from '../services/user.service';

export function ValidateUsernameAsync(_user: UserService): AsyncValidatorFn {
  return function (
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return _user.validateUsername(control.value).pipe(
      map((usernameExists) => {
        return usernameExists ? { usernameExists: true } : null;
      })
    );
  };
}
