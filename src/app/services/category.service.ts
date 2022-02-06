import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {


   }
   getToplist(): Observable<Category[]>{
    return this.http.get(`${environment.API_URL}/category`)
      .pipe(
        map(response => response as Category[])
      )
  }
}
