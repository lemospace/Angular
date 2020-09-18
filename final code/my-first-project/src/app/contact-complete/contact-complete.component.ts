import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-complete',
  templateUrl: './contact-complete.component.html',
  styleUrls: ['./contact-complete.component.scss'],
})
export class ContactCompleteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.router.navigateByUrl('main');
  }
}
