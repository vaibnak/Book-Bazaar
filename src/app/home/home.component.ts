import { Component, OnInit } from '@angular/core';
import {ManageUsersService} from '../manage-users.service';
import { GetFiltersService } from '../get-filters.service';
import { ActivatedRoute,Router } from "@angular/router";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLoading:boolean;
  noResult:boolean;
  books;
  booksArr;
  filterByAuthor;
  filterByGenere;
  filterByYear;
  currentBook;
  currentAuthor;
  currentGenere;
  currentYear;
  userName:string;
  constructor(public route:ActivatedRoute,private manageUsersService:ManageUsersService, private getFilterService: GetFiltersService) {
  		this.displayLoading = true;
  		this.noResult = false;
  		this.userName = this.route.snapshot.paramMap.get('userName');
   }

  ngOnInit(): void {
  	this.manageUsersService.getBook()
 	.subscribe((data)=>{
 		console.log(data);
 		// this.displayLoading = false;
 		this.books = data;
 		this.currentBook = cloneDeep(this.books); 
 		let tmpBooks = cloneDeep(this.books);
 		this.createBooksArr(tmpBooks);
 	},(err)=>{
 		console.log(err);
 	})

 	this.getFilterService.getFilterByAuthors()
 	.subscribe((data)=>{
 		this.filterByAuthor = data;
 	},(err)=>{
 		console.log(err);
 	})

 	this.getFilterService.getFilterByGenere()
 	.subscribe((data)=>{
 		this.filterByGenere = data;
 	},(err)=>{
 		console.log(err);
 	})

 	this.getFilterService.getFilterByYear()
 	.subscribe((data)=>{
 		console.log("year",data);
 		this.filterByYear = data;
 	},(err)=>{
 		console.log(err);
 	})

  }

  createBooksArr(tmpBooks){

  	this.booksArr = [];
  	while(tmpBooks.length > 0){
  		let arr1 = tmpBooks.splice(0,3);
  		this.booksArr.push(arr1);
  		this.displayLoading = false;
  	}

	}

	checkByAuthor(e){
		// let cur = this.filterByAuthor.filter((aut)=> aut.isChecked == true);
		this.currentAuthor = this.filterByAuthor.filter((aut)=> aut.isChecked == true);
		this.currentAuthor = this.currentAuthor.map((aut)=> aut.id);
		this.filterBook();	
	}
		

	checkByGenere(e){
		this.currentGenere = this.filterByGenere.filter((gen)=>gen.isChecked == true);
		this.currentGenere = this.currentGenere.map((gen)=>gen.id);
		this.filterBook();
	}

	checkByYear(e){
		this.currentYear = this.filterByYear.filter((yr)=>yr.isChecked == true);
		this.filterBook();
	}

	filterBook(){
		this.currentBook = cloneDeep(this.books);
		console.log("this.currentAuthor", typeof this.currentAuthor)
		if(this.currentAuthor === undefined){
			console.log("currentAuthor is undefined");
		}
		if((this.currentAuthor !== undefined && (this.currentAuthor.length > 0))){
			this.currentBook = this.currentBook.filter((b)=>{	
				return this.currentAuthor.includes(b.author)
			});
		}
		
		if((this.currentGenere !== undefined && (this.currentGenere.length > 0))){
			
			this.currentBook = this.currentBook.filter((b)=>{	
				return this.currentGenere.includes(b.genere)
			});			
		}


		if((this.currentYear !== undefined) && ((this.currentYear.length > 0))){
			this.currentBook = this.currentBook.filter((b)=>{
				let yr = Number(b.releaseYear);
				for(let year of this.currentYear){
					if((yr>=year.startYear)&&(yr<= year.endYear)){
						return true;
					}
				}
				return false;
			})	
		}
		

		if(((this.currentAuthor !== undefined) && (this.currentAuthor.length == 0))&&((this.currentGenere !== undefined) && (this.currentGenere.length==0))&&((this.currentYear !== undefined) &&  this.currentYear.length == 0)){
			let tmpBooks = cloneDeep(this.books);
			this.createBooksArr(tmpBooks);
			return;
		}

		if(this.currentBook.length == 0){
			this.noResult = true;
		}else{
			let tmpBooks = cloneDeep(this.currentBook);
			this.createBooksArr(tmpBooks);
		}


	}

	addEventHandler(e,book){
		e.target.childNodes[0].textContent = "Added";
		e.target.className = "btn btn-success dis";
		// e.disabled = true;

		this.manageUsersService.storeUserBook({userName:this.userName,book:book})
 		.subscribe((data)=>{
 			console.log(data);
 			// this.displayLoading = false;
 		},(err)=>{
 			console.log(err);
 		})
	}


}



