import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../manage-users.service';
import { GetFiltersService } from '../get-filters.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLoading:boolean;
  books;
  tmpBooks;
  booksArr;
  isSelected;
  filterByAuthor;
  filterByGenere;
  constructor(private manageUsersService:ManageUsersService, private getFilterService: GetFiltersService) {
  		this.displayLoading = true;
   }

  ngOnInit(): void {
  	this.manageUsersService.getBook()
 	.subscribe((data)=>{
 		console.log(data);
 		// this.displayLoading = false;
 		this.books = data;
 		this.tmpBooks = cloneDeep(this.books);
 		this.createBooksArr();
 	},(err)=>{
 		console.log(err);
 	})

 	this.getFilterService.getFilterByAuthors()
 	.subscribe((data)=>{
 		console.log(data);
 		this.filterByAuthor = data;
 	},(err)=>{
 		console.log(err);
 	})

 	this.getFilterService.getFilterByGenere()
 	.subscribe((data)=>{
 		console.log(data);
 		this.filterByGenere = data;
 	},(err)=>{
 		console.log(err);
 	})

  }

  createBooksArr(){

  	this.booksArr = [];
  	while(this.tmpBooks.length > 0){
  		let arr1 = this.tmpBooks.splice(0,3);
  		this.booksArr.push(arr1);
  		this.displayLoading = false;
  	}

	}

	checkByAuthor(e){
		
		let currentAuthor = this.filterByAuthor.filter((aut)=> aut.isChecked == true);
		currentAuthor = currentAuthor.map((aut)=> aut.id);
		
		if(currentAuthor.length == 0){
			
			this.tmpBooks = cloneDeep(this.books);
			this.createBooksArr();
			return;
		}else{
			this.filterBookByAuthor(currentAuthor);	
		}

		
	}

	filterBookByAuthor(currentAuthor){
		
		let tmpBooks1 = this.books.filter((b)=>{
			
			return currentAuthor.includes(b.author)
		});
		
		this.tmpBooks = tmpBooks1;
		this.createBooksArr();
	}

	checkByGenere(e){
		let currentGenere = this.filterByGenere.filter((gen)=>gen.isChecked == true);
		currentGenere = currentGenere.map((gen)=>gen.id);

		if(currentGenere.length == 0){
			this.tmpBooks = cloneDeep(this.books);
			this.createBooksArr();
			return;
		}else{
			this.filterBookByGenere(currentGenere);
		}
	}

	filterBookByGenere(currentGenere){
		
		let tmpBooks1 = this.books.filter((b)=>{
			
			return currentGenere.includes(b.genere)
		});
		
		this.tmpBooks = tmpBooks1;
		this.createBooksArr();
	}


}



