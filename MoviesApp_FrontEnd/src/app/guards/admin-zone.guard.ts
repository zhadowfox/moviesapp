import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class adminZoneGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const idRolFromToken = this.authService.getRolFromToken();
    console.log(idRolFromToken)
    if (idRolFromToken && idRolFromToken == 1) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}