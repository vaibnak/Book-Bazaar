import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {ManageUsersService} from '../manage-users.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userName:string;
  userBook;
  total:number;
  constructor(public route:ActivatedRoute,private manageUsersService:ManageUsersService,public router:Router) {
  	this.userName = this.route.snapshot.paramMap.get('userName');
  	console.log(this.userName);
    this.total = 0;
   }

  ngOnInit(): void {
  	console.log("in ngOnInit");
  	let tmpArray = [];

  	this.manageUsersService.getUserBook({user: this.userName})
 	.subscribe((data)=>{
 		console.log("books by the user:",data);
 		// this.displayLoading = false;
 		for(let b of data){
 			console.log("each book data",b);
 			this.manageUsersService.getBookFromBooks({title: b.book})
		 	.subscribe((data)=>{
		 		console.log(data);
		 		for(let tmp of data){
		 			tmpArray.push(tmp)
          this.total += Number(tmp.price)  
		 		}
		 	},(err)=>{
		 		console.log(err);
		 	})
 		}
 		this.userBook = tmpArray;
 		console.log("userBook: ",this.userBook);
 	},(err)=>{
 		console.log(err);
 	})
  }

  getUserBook(){
    let tmpArray = [];
    this.total = 0;
    this.manageUsersService.getUserBook({user: this.userName})
     .subscribe((data)=>{
       console.log("books by the user:",data);
       // this.displayLoading = false;
       for(let b of data){
         console.log("each book data",b);
         this.manageUsersService.getBookFromBooks({title: b.book})
         .subscribe((data)=>{
           console.log(data);
           for(let tmp of data){
             tmpArray.push(tmp)
            this.total += Number(tmp.price)  
           }
         },(err)=>{
           console.log(err);
         })
       }
       this.userBook = tmpArray;
       console.log("userBook: ",this.userBook);
     },(err)=>{
       console.log(err);
     })
  }

  removeItemEventHandler(title){
    this.manageUsersService.removeUserBook({userName:this.userName,book:title})
     .subscribe((data)=>{
       console.log(data);
       this.getUserBook();
       // this.displayLoading = false;
     },(err)=>{
       console.log(err);
     })

  }

  homeEventHandler(){
    this.router.navigate(["/home",this.userName]);
  }

}


