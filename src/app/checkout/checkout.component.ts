import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userName:string;
  constructor(public route:ActivatedRoute) {
  	this.userName = this.route.snapshot.paramMap.get('userName');
  	console.log(this.userName);
   }

  ngOnInit(): void {
  }

}
