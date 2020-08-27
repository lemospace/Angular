import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Data } from '../data';
import { DataService } from '../data.service';
import { dataComponents } from '../../assets/data';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
})
export class multiStepFormComponent implements OnInit {
  bikes: Data[];

  profileForm = this.fb.group({
    firstStep: this.fb.group({
      goodsName: ['', Validators.required],
      description: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dataService.getGoods().subscribe((res) => {
      this.bikes = res;
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
