import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactiveGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

export class DeactiveGuardService implements CanDeactivate<IDeactiveGuard> {
  canDeactivate(component: IDeactiveGuard, route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot
  ) : boolean | Promise <boolean> | Observable <boolean> {
    return component.canExit();
  }
}