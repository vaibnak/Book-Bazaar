import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ManageUsersService} from '../manage-users.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

   imageError: string;
   isImageSaved: boolean;
   cardImageBase64: string;

   entryForm = new FormGroup({
   		title: new FormControl(''),
		author: new FormControl(''),
		description: new FormControl(''),
		price: new FormControl(''),
	})


  constructor(private manageUsersService:ManageUsersService) { }



  ngOnInit(): void {
  }

  onSubmit(){
  	console.log("form submit function called");
  	console.log(this.entryForm.get('author').value)
  	console.log(this.entryForm.get('description').value)
  	console.log(this.cardImageBase64)
  	this.manageUsersService.uploadBook({title:this.entryForm.get('title').value,author: this.entryForm.get('author').value,description: this.entryForm.get('description').value,
  		price: this.entryForm.get('price').value,image: this.cardImageBase64})
 	.subscribe((data)=>{
 		console.log(data);
     
 	},(err)=>{
 		console.log(err);
 	})
  }

   fileChangeEvent(fileInput: any) {
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    // console.log("cardImageBase64: ",this.cardImageBase64);
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }

    removeImage() {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
    }

}
