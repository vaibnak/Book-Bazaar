import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

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

  contactusEventHandler(){
  	this.router.navigate(["/contactus",this.userName]);
  }

  orderEventHandler(){
  	this.router.navigate(["/order",this.userName]);
  }


}
