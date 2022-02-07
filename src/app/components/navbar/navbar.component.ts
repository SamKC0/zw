import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userExists = false;

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.checkState();
    
  }

  GoogleLogin(){
    this.AuthService.GoogleLogin();
    
  }

  checkState(){    
    if (!localStorage.getItem("userExists")) {      
      this.userExists = true;
    }
  }

  logoutUser(){
    localStorage.removeItem("userExists");
    window.location.reload();
  }

}
