import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const isAdminLoggedIn = window.sessionStorage.getItem("isAdminLoggedIn");
  return isAdminLoggedIn && JSON.parse(isAdminLoggedIn);;
};
