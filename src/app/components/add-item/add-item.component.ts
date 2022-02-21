import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private ItemService: ItemService, private CategoryService: CategoryService) { }

  ngOnInit(): void {    
    this.AllCategories();
  }
  Category?: Category[];

  AllCategories() {
    this.CategoryService.getAllCategories().subscribe((response: any) => {
      // just add .content to get from page (nested)
      this.Category = response.content;           
    })
    }

  addItem(name: string, description: string, category: string){
    var id = "null";
    const image = "";
    for (let cat of this.Category!){
      if (cat.category == category){
        id = cat.id;
      }
    }
    this.ItemService.addItem(name, description, id, category, image ).subscribe(
      (response) => {
      alert("res");
      },
      err => {
      alert("err");
      })
  }

}
