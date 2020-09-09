import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor(private router: Router) {}
  model = {
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  };

  onSubmit() {
    this.router.navigateByUrl('contact-complete');
  }

  ngOnInit(): void {}
}
