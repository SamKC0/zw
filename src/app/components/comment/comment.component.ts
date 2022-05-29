import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { Post } from 'src/app/model/Post';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() post: Post = {
    author: null,
    comments: [],
    content: '',
    creationDate: '',
    parentId: null,
    id: ''
  };
  @Input() itemId: string = "";


  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
  }
  async addComment(comment:string, parentId: string | null){

    const response = await this.ItemService.addComment(this.itemId, comment, parentId);
    alert(response);
    // (await this.ItemService.addComment(this.itemId, comment, parentId)).subscribe(
    //   (response) => {
    //   alert("res");
    //   },
    //   err => {
    //     alert(JSON.stringify(err));
    //   })
   
  }

}
