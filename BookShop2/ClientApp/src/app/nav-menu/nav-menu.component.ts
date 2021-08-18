import { Component } from '@angular/core';
import { UserService, User } from '../core/services/api.client.generated';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isLoggedIn: boolean = false;
  isExpanded: boolean = false;
  email: string;
  loginForm: any;

  constructor(private UserService: UserService) {
    let user = sessionStorage.getItem("activeUser");
    this.isLoggedIn = !!user;
  }

  login() {
    if (this.email) {
      this.UserService.userExistsByEmail(this.email).subscribe(result => {
        if (result) {
          sessionStorage.setItem("activeUser", this.email);
          window.location.reload();
        }
      });
    }
  }


  logout() {
    sessionStorage.removeItem("activeUser");
    window.location.reload();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
