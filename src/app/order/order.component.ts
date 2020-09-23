import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import {ManageUsersService} from '../manage-users.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userName:string;
  displayLoading:boolean;
  orderedBook;
  notLogged:boolean;
  totalOrders: number;	
  constructor(public route:ActivatedRoute,private manageUsersService:ManageUsersService,public router:Router) { 
  	this.userName = this.route.snapshot.paramMap.get('userName');
  	this.displayLoading = true;
  	this.notLogged = false;
  	this.totalOrders = 0;
  	if(this.userName == "undefined"){
  		this.notLogged = true;
  	}
  }

  ngOnInit(): void {
  	let tmpArray = [];
    let arr1 = [];
    let arr2 = [];

    // we have the username so getting the books that the user has selected
  	this.manageUsersService.getOrder({userName: this.userName})
 	  .subscribe((data)=>{
   		
      // Object.entries takes the object and converts it into arrays, had to do this because
      // was getting error on iterating over the data 
   		arr1 = Object.entries(data);
      arr1 = arr1.map((item=>item[1]));

      for(let b of arr1){
        // we now have the book title so getting all info of the book
   			this.manageUsersService.getBookFromBooks({title: b.book})
  		 	.subscribe((data)=>{
          // can not iterate over data hence converting it to array 
  		 		arr2 = Object.entries(data);
          arr2 = arr2.map((item)=>item[1]);

  		 		for(let tmp of arr2){
            // adding quantity field to the book 
            tmp.quantity = b.quantity; 
  		 			tmpArray.push(tmp)
  		 			this.totalOrders += tmp.quantity;
              
  		 		}
  		 		this.displayLoading = false;
  		 	},(err)=>{
  		 		console.log(err);
  		 	})
   		}
   		this.displayLoading = false;
   		this.orderedBook = tmpArray;
 	  },(err)=>{
 		  console.log(err);
 	  })
  }

  aboutusEventHandler(){
	 this.router.navigate(["/aboutus",this.userName]);
  }

   contactusEventHandler(){
	  this.router.navigate(["/contactus",this.userName]);
	}

	checkoutEventHandler(){
		this.router.navigate(["/checkout",this.userName])	
	}

	homeEventHandler(){
		this.router.navigate(["/home",this.userName]);	
	}


}
