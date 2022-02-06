import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/model/Category'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  Category?: Category[];
  
  ngOnInit(): void {
  }

}
