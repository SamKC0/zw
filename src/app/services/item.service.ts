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
    // return this.http.get(`${environment.API_URL}/item/${item}`)
    //   .pipe(
    //     map(response => response as Item[])
    //   )
        return this.http.get<Item[]>(`${environment.API_URL}/item/${item}`);
      
  }
//name: string, description: string, staticImage: string,
//cat: string[], user:string
  addItem(){
          const Item = {name: "name" , description: "description", category:  [      {
            
            "category": "Bathroom2",
            "staticImage": "https://image.similarpng.com/very-thumbnail/2020/06/Logo-Instagram-premium-vector-PNG.png"
        }]
        , username: "troll" };
          return this.http.post(`${environment.API_URL}/item/new`, Item)
          
        }

}
