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
  booksArr;
  constructor(private manageUsersService:ManageUsersService) {
  		this.displayLoading = true;
   }

  ngOnInit(): void {
  	this.manageUsersService.getBook()
 	.subscribe((data)=>{
 		console.log(data);
 		// this.displayLoading = false;
 		this.books = data;
 		this.createBooksArr();
 	},(err)=>{
 		console.log(err);
 	})
  }

  createBooksArr(){

  	this.booksArr = [];
  	while(this.books.length > 0){
  		let arr1 = this.books.splice(0,3);
  		this.booksArr.push(arr1);
  		this.displayLoading = false;
  	}
  	console.log(this.booksArr);

	// (this.books.length > 0){
 //   		let arr1 = this.books.splice(0,3);
 //    	this.booksArr.push(arr1);
 //    	// console.log(arr)	
 //  }

	}

}



