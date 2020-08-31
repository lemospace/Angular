import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor(private router: Router) {}

  firstname = '';
  lastname = '';
  email = '';
  description = '';

  submitted = false;

  onSubmit() {
    this.router.navigateByUrl('contact-compete');
  }

  ngOnInit(): void {}
}
