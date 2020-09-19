import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../manage-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLoading:boolean;
  books;
  constructor(private manageUsersService:ManageUsersService) {
  		this.displayLoading = true;
   }

  ngOnInit(): void {
  	this.manageUsersService.getBook()
 	.subscribe((data)=>{
 		console.log(data);
 		this.displayLoading = false;
 		this.books = data;
 	},(err)=>{
 		console.log(err);
 	})
  }



}
