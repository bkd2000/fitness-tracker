import { Component, OnInit } from '@angular/core';
import { NgForm, Form} from '../../../../node_modules/@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any;
  maxDate;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date;
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: Form) {
    console.log(form);
  }
}
