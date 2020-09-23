import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../user';
import {ManageUsersService} from '../manage-users.service';
import  {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
		name: new FormControl('',[Validators.required]),
		userName: new FormControl('',[Validators.required]),
		phoneNo: new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
		password: new FormControl('',[Validators.required]),
		cnfrmPassword: new FormControl('',[Validators.required]),
		address: new FormControl('',[Validators.required])
	})

	user:User;



  constructor(private manageUsersService:ManageUsersService,public router:Router) { 
  	
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.registerForm.get('name').value)
  	console.log(this.registerForm.get('userName').value)
  	this.user = new User(this.registerForm.get('name').value,this.registerForm.get('userName').value,
  		this.registerForm.get('phoneNo').value,this.registerForm.get('password').value,this.registerForm.get('address').value);
 
 	console.log(this.user);
 	this.manageUsersService.registerUser(this.user)
 	.subscribe((data)=>{
 		console.log(data);
     this.router.navigate(["/home",this.registerForm.get('userName').value]);
 	},(err)=>{
 		console.log(err);
 	})
  }

  homeEventHandler(){
    this.router.navigate(["/home","undefined"]);
  }

  checkoutEventHandler(){
     this.router.navigate(["/checkout","undefined"]); 
  }

  orderEventHandler(){
    this.router.navigate(["/order","undefined"]);
  }

  aboutusEventHandler(){
    this.router.navigate(["/aboutus","undefined"]);
  }

  contactusEventHandler(){
    this.router.navigate(["/contactus","undefined"]);
  }


}
