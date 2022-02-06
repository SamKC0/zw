import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

  }
  firebaseConfig = {
    apiKey: "AIzaSyClL2hKlXFxonHna2joKaVx5Rjwt9UdFf8",
    authDomain: "letscollab-5c185.firebaseapp.com",
    projectId: "letscollab-5c185",
    storageBucket: "letscollab-5c185.appspot.com",
    messagingSenderId: "62670413797",
    appId: "1:62670413797:web:6b1a3cfa3e49806354990c",
    measurementId: "G-NPJBXDER9S"
  };
  firebase = firebase.initializeApp(this.firebaseConfig)

  GoogleLogin(){
    console.log('Login Btn Call')    
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // code which runs on success   
      this.checkAuthState();   
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      alert(errorCode);

      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
  }

  checkAuthState(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        alert(user.email)
      }else{

      }
    })
  }
}

