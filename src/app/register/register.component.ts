import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	myName:string;

  constructor() { 
  	this.myName = "vaibhav";
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.registerForm.get('name').value)
  	console.log(this.registerForm.get('userName').value)
  	
  }

}
