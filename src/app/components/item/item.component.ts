import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from 'src/app/model/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemFound = true;
  name : any;
  constructor(private route: ActivatedRoute, private ItemService: ItemService) { }

  Item?: Item;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');          
    });
    this.getItem();
  }
  getItem() {
    this.ItemService.getItem(this.name).subscribe((response: any) => {
      // just add .content to get from page (nested)
      this.Item = response; 
    },   
    err => {
      // item not found
      this.itemFound = false;
    })
    }

    addRating(rating:string){
      this.ItemService.addRating(this.Item!.id , rating);
    }
    async addComment(comment:string){
      (await this.ItemService.addComment(this.Item!.id, comment)).subscribe(
        (response) => {
        alert("res");
        },
        err => {
          alert(JSON.stringify(err));
        })
     
    }

}
