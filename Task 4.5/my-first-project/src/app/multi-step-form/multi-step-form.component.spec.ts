import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { multiStepFormComponent } from './multi-step-form.component';

describe('multiStepFormComponent', () => {
  let component: multiStepFormComponent;
  let fixture: ComponentFixture<multiStepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [multiStepFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(multiStepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
