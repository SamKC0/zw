import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { Category } from '../model/Category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private AuthService: AuthService) {


   }

   getItem(item: string): Observable<Item[]>{
    // return this.http.get(`${environment.API_URL}/item/${item}`)
    //   .pipe(
    //     map(response => response as Item[])
    //   )

    // this.AuthService.generateToken().then((value) => {
    //   console.log(value);
    //   // expected output: "Success!"
    // });

        return this.http.get<Item[]>(`${environment.API_URL}/item/${item}`);
      
  }
//name: string, description: string, staticImage: string,
//cat: string[], user:string

// Only need id if not new cat, dont add id if new cat
  addItem(name: string, description: string, id : string, category: string,
    image: string){
          const Item = {name: name , description: description, category:  [      {
            "id" : id,
            "category": category,
            "staticImage": image
        }]
        , username: "troll" };
          return this.http.post(`${environment.API_URL}/item/new`, Item)
          
        }
  async addRating(id: string, rating: string ){
    const token = await this.AuthService.generateToken();
    const formData = new FormData();
    formData.append("itemId", id);      
    formData.append("rating", rating);      
    formData.append("userToken", token);      
    return this.http.post(`${environment.API_URL}/item/rate`, formData);
    }
    
  async addComment(id: string, comment: string, parentId: string | null){
    // const token = await this.AuthService.generateToken();
    const token =  await this.getAuthHeader();
    const formData = new FormData();
    if (parentId!=null){
    formData.append("parentId", parentId);
    }
    formData.append("itemId", id);      
    formData.append("comment", comment);      
    return this.http.post(`${environment.API_URL}/item/comment`, formData, token);
    
  }

  getComments(item: string): Observable<Post[]>{
        return this.http.get<Post[]>(`${environment.API_URL}/item/comment/${item}`);
  }


   async getAuthHeader() {
     //TODO: handel when user is not logged in. it will throw error on console.
    const token = await this.AuthService.generateToken();
    const httpOptions = {
      headers: new HttpHeaders({
       "X-Auth": token
      })
    };
    return httpOptions;
  }

}
