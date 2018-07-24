import { Component, OnInit } from '@angular/core';
import { Form } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: Form) {
    console.log(form);
  }
}
