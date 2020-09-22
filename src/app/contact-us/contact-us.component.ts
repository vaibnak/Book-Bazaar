import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userName: string;
  logged:boolean;
  constructor(public route:ActivatedRoute,public router:Router) {
  	this.userName = this.route.snapshot.paramMap.get('userName');
  		if(this.userName == "undefined"){
  			this.logged = false;
  		}else{
  			this.logged = true;
  		}
   }

  ngOnInit(): void {
  }

  homeEventHandler(){
  	this.router.navigate(["/home",this.userName]);
  }

  checkoutEventHandler(){
  	this.router.navigate(["/checkout",this.userName]);
  }

  aboutusEventHandler(){
  	this.router.navigate(["/aboutus",this.userName]);
  }

  orderEventHandler(){
  	this.router.navigate(["/order",this.userName]);
  }

}
