import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(token: { headers: HttpHeaders; }){

    return this.http.post(`${environment.API_URL}/user`, null, token).subscribe((response: any) => {
      alert("success");
    },   
    err => {
      alert(JSON.stringify(err));
    })
  }

}
