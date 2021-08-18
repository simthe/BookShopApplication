import { Component, Inject } from '@angular/core';
import { UserService, User } from '../core/services/api.client.generated';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public user: User;
  public userExists: boolean;

  constructor(private UserService: UserService, private Router: Router) {
    this.user = new User();
  }

  public register() {
    this.UserService.userExistsByEmail(this.user.emailAddress).subscribe((result) => {
      if (!result) {
        this.UserService.postUser(this.user).subscribe(() => {
          //set as active user
          sessionStorage.setItem("activeUser", this.user.emailAddress);

          //redirect to home
          this.Router.navigate(['/']);
        }, error => { console.log(error); });
      }
      else {
        this.userExists = false;
      }
    });

  }
}
