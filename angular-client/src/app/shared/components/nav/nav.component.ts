import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  loggedUser: User;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.loggedUser.subscribe(
      user => this.loggedUser = user
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    if (!this.authService.isLoggedIn()) {
      return;
    }
    this.authService
      .logout()
      .then(
        () => this.router.navigate(['/login'])
      )
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
