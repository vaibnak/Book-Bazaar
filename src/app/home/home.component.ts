import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../manage-users.service';
import { GetFiltersService } from '../get-filters.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLoading:boolean;
  books;
  booksArr;
  isSelected;
  constructor(private manageUsersService:ManageUsersService, private getFilterService: GetFiltersService) {
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

 	this.getFilterService.getFilterByAuthors()
 	.subscribe((data)=>{
 		console.log(data);
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

	}

	check(e){
		console.log(e.name);
	}

}



