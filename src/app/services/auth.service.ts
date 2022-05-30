import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private UserService: UserService) { }

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
    this.checkAuthState().then(() => {
      this.saveUsertoDB();
      window.location.reload();
    })  
      
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


// without promise
  // checkAuthState() {    
  //   firebase.auth().onAuthStateChanged(user=>{
  //     if(user){
  //       // setting user logged state
  //       localStorage.setItem('userExists', 'true');  
  //       console.log("test1");                      
  //     }else{    
  //       console.log("test2");        
  //     }
  //   })
  //   console.log("test3");
  // }
  checkAuthState(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          // setting user logged state
          localStorage.setItem('userExists', 'true');  
          resolve();                      
        }else{    
          reject();         
        }
      })
    });
  }

  logoutUser(){    
    firebase.auth().signOut(); 
  }

  generateToken2(): Promise<string>  {
    alert("4.5");
    return new Promise<string>((resolve, reject) => {
      
      // TODO: this function is not catching error.
    // firebase.auth().currentUser?.getIdToken().then(function(idToken) {
    //   alert(5);
    // }).catch(function(error) {
    //   // Handle error
    //   alert(6 + "error");

    // }

    // attempt 2
    // firebase.auth().currentUser?.getIdToken().then((result) => {
    //   alert("works.")
    // },   
    // err => {
    //   alert("error");
    //   //error
    //  }
    // );
    

})
}

// its executing not syncronaklly.
generateToken()  {
  return new Promise<string>((resolve, reject) => {
    firebase.auth().onAuthStateChanged(async user=>{
      if(user){
        const token = await user.getIdToken();
        resolve(token);
      }
        reject("false");
  })
  })

}

async saveUsertoDB(){
  var token:string = await this.generateToken();
  const httpOptions = {
    headers: new HttpHeaders({
     "X-Auth": token
    })
  };
  this.UserService.addUser(httpOptions);
}

}
