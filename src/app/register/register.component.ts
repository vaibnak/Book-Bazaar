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
		password: new FormControl('',[Validators.required,Validators.minLength(4), Validators.maxLength(10)]),
		cnfrmPassword: new FormControl('',[Validators.required]),
		address: new FormControl('',[Validators.required])
	},this.pwdMatchValidator)

	user:User;
  userNameUnique:boolean;


  constructor(private manageUsersService:ManageUsersService,public router:Router) { 
  	
  }

  ngOnInit(): void {
    this.userNameUnique = true;
  }

  pwdMatchValidator(frm:FormGroup){
    return frm.get('password').value === frm.get('cnfrmPassword').value?null:{'mismatch':true};
  }

  checkUserName(userName){
    this.manageUsersService.getUser({userName:userName})
   .subscribe((data)=>{
     console.log(data);
     let arr1 = Object.entries(data);
     console.log("arr1: ",arr1);
     if(arr1.length > 0){
       this.userNameUnique = false;
     }else{
        this.registerUser();
     }
     
   },(err)=>{
     console.log(err);
     
   })



  }

  registerUser(){
    this.manageUsersService.registerUser(this.user)
     .subscribe((data)=>{
       console.log(data);
       this.router.navigate(["/home",this.registerForm.get('userName').value]);
     },(err)=>{
       console.log(err);
     })
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.registerForm.get('name').value)
  	console.log(this.registerForm.get('userName').value)
  	this.user = new User(this.registerForm.get('name').value,this.registerForm.get('userName').value,
  		this.registerForm.get('phoneNo').value,this.registerForm.get('password').value,this.registerForm.get('address').value);
    
   this.checkUserName(this.registerForm.get('userName').value);
 	  
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

  userNameEventHandler(){
    console.log("userNameEventHandler called");
    this.userNameUnique = true;
  }


}
