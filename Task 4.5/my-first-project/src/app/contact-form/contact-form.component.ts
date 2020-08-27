import { Component, OnInit } from '@angular/core';
import { ContactData } from '../contact/contact-data';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  firstname = '';
  lastname = '';
  email = '';
  description = '';

  logForm(value: any) {
    console.log(value);
  }

  ngOnInit(): void {}
}
