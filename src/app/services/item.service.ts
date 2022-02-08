import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {


   }

   getItem(item: string): Observable<Item[]>{
    return this.http.get(`${environment.API_URL}/item/${item}`)
      .pipe(
        map(response => response as Item[])
      )
  }

}
