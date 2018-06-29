import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  applicatioName:string;
  loginForm:FormGroup;
  years:Date;
  isFingerPrint : boolean = false;
  constructor() { }

  ngOnInit() {
    this.years = new Date();
    this.loginForm = new FormGroup({
        userName: new FormControl('', Validators.required),
        userPassword: new FormControl('', Validators.required)
    });
 
}

}
