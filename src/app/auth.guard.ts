import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
  
    private router: Router,
    private userService: UserService,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('jwtToken') || '{}' !== null) {
      const role = route.data['roles'] as Array<string>;

      if (role) {
        const match = this.userService.roleMatch(role);

        if (match) {
          return true;
        } else {
          this.router.navigate(['/Forbidden']);
          return false;
        }
      }
    }

    this.router.navigate(['/Login']);
    return false;
  }
}