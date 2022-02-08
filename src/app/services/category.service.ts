import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { Item } from '../model/Item';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {


   }

   getCategories(): Observable<Category[]>{
    return this.http.get(`${environment.API_URL}/category`)
      .pipe(
        map(response => response as Category[])
      )
  }
  getAllCategories(): Observable<Category[]>{
    return this.http.get(`${environment.API_URL}/category/all`)
      .pipe(
        map(response => response as Category[])
      )
  }
  getItemsFromCategorie(cat : string): Observable<Item[]>{
    return this.http.get(`${environment.API_URL}/category/${cat}`)
      .pipe(
        map(response => response as Item[])
      )
  }
}
