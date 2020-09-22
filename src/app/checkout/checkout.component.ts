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
  displayLoading;
  notLogged:boolean;
  constructor(public route:ActivatedRoute,private manageUsersService:ManageUsersService,public router:Router) {
  	this.userName = this.route.snapshot.paramMap.get('userName');
  	console.log("username: ",this.userName);
    this.total = 0;
    this.notLogged = false;
    if(this.userName == "undefined"){
      this.notLogged = true;
    }
   }

  ngOnInit(): void {
 
  	let tmpArray = [];
    let arr1 = [];
    let arr2 = [];

    // we have the username so getting the books that the user has selected
  	this.manageUsersService.getUserBook({user: this.userName})
 	  .subscribe((data)=>{
   		this.displayLoading = false;
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
            this.total += Number(tmp.price*tmp.quantity)  
  		 		}
  		 	},(err)=>{
  		 		console.log(err);
  		 	})
   		}
   		this.userBook = tmpArray;
 	  },(err)=>{
 		  console.log(err);
 	  })

  }

  getUserBook(){
      let tmpArray = [];
      let arr1 = [];
      let arr2 = [];

      this.total = 0;
      // we have the username so getting the books that the user has selected
      this.manageUsersService.getUserBook({user: this.userName})
       .subscribe((data)=>{
         this.displayLoading = false;
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
              this.total += Number(tmp.price*tmp.quantity)  
             }
           },(err)=>{
             console.log(err);
           })
         }
         this.userBook = tmpArray;
       },(err)=>{
         console.log(err);
       })
  }

  removeItemEventHandler(title){
    this.manageUsersService.removeUserBook({userName:this.userName,book:[title]})
     .subscribe((data)=>{
       console.log(data);
       this.getUserBook();
     },(err)=>{
       console.log(err);
     })

  }

  homeEventHandler(){
    this.router.navigate(["/home",this.userName]);
  }

  changeQuantityEventHandler(title,quantity){
    this.manageUsersService.updateQuantity({userName:this.userName,book:title,quantity:quantity})
     .subscribe((data)=>{
       this.getUserBook();
     },(err)=>{
       console.log(err);
     })    
  }

  getorderEventHandler(){
    let tmp = [];
    tmp = this.userBook.map((item)=>{
      return {book: item.title,quantity: item.quantity,user:this.userName};
    })

    this.manageUsersService.orderBook(tmp)
     .subscribe((data)=>{
       console.log(data);
     },(err)=>{
       console.log(err);
     })

     let tmpBook = [];
     tmpBook = tmp.map((item)=>item.book);
     this.manageUsersService.removeUserBook({userName:this.userName,book:tmpBook})
     .subscribe((data)=>{
       console.log(data);
       this.getUserBook();
     },(err)=>{
       console.log(err);
     })
     
  }

  orderEventHandler(){
    this.router.navigate(["/order",this.userName]);
  }



}


