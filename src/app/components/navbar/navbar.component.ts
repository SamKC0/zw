import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userExists?: string;

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
   this.checkState();
    
  }

  GoogleLogin(){
    this.AuthService.GoogleLogin();
    
  }

  checkState(){    
    // if (!localStorage.getItem("userExists")) {      
    //   this.userExists = true;
    // }
     this.AuthService.checkAuthState()
     .then((res) => {    
         //user exists         
         this.userExists = "true";
     }).catch((err) => {
        // user doesnt exist        
        this.userExists = "false";
     } );
  }

  logoutUser(){
    localStorage.removeItem("userExists");
    this.AuthService.logoutUser();
    window.location.reload();    
  }

}
