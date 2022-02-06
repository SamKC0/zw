import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/model/Category'
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private CategoryService: CategoryService) { }

  Category?: Category[];
  
  ngOnInit(): void {
    this.Categories();
  }

  Categories() {
    this.CategoryService.getCategories().subscribe((response: any) => {
      // just add .content to get from page (nested)
      this.Category = response.content;    
            
    })
    }

}
