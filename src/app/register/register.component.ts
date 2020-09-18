import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
		name: new FormControl(''),
		userName: new FormControl(''),
		phoneNo: new FormControl(''),
		password: new FormControl(''),
		cnfrmPassword: new FormControl(''),
		address: new FormControl('')
	})

	user:User;



  constructor() { 
  	
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

  }

}
