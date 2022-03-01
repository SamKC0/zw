import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(token : string){
    const formData = new FormData();    
    formData.append("userToken", token);  
    return this.http.post(`${environment.API_URL}/user`, formData).subscribe((response: any) => {
      alert("success");
    },   
    err => {
      alert("success");
    })
  }

}
