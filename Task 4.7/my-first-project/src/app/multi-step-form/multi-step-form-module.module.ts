import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepFormComponent } from './multi-step-form.component';
import { FormatTitleModule } from '../format-title/format-title.module';
@NgModule({
  declarations: [MultiStepFormComponent],
  imports: [CommonModule, FormatTitleModule],
  exports: [MultiStepFormComponent],
})
export class MultiStepFormModuleModule {}
