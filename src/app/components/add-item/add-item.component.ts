import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {    
    this.addItem();
  }

  addItem(){
    this.ItemService.addItem().subscribe(
      (response) => {
      alert("res");
      },
      err => {
        alert(err);
      })
  }

}
