import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import {Category} from 'src/app/model/Category'
import { Item } from 'src/app/model/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private CategoryService: CategoryService,
              private ItemService: ItemService) { }

  name : any;
  Category?: Category[];
  Item?: Item[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');          
    });
    if (this.name == "all") {
    this.AllCategories();
    }
    else {
      this.getItems();
    }
  }

  AllCategories() {
    this.CategoryService.getAllCategories().subscribe((response: any) => {
      // just add .content to get from page (nested)
      this.Category = response.content;    
            
    })
    }
  getItems() {
    this.CategoryService.getItemsFromCategorie(this.name).subscribe((response: any) => {
      // just add .content to get from page (nested)
      this.Item = response.content;    
            
    })
    }

}
