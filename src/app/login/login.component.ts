import { Component } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(public userService: UsersService ) {}

   login() {
    
   }
}