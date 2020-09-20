import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ManageUsersService} from '../manage-users.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
		userName: new FormControl(''),
		password: new FormControl(''),
	})
  
  constructor(private manageUsersService:ManageUsersService,public router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.loginForm.get('password').value)
  	console.log(this.loginForm.get('userName').value)

 	
 	this.manageUsersService.loginUser({userName:this.loginForm.get('userName').value, password: this.loginForm.get('password').value})
 	.subscribe((data)=>{
 		console.log(data);
 		var tempObj:any=data["message"];
      	if(tempObj == true){
        	this.router.navigate(["/home",this.loginForm.get('userName').value]);
      	}
 	},(err)=>{
 		console.log(err);
 	})
  }

}
