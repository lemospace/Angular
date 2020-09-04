import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewProductRouterModule } from './add-new-product-router.module';
import { AddNewProductComponent } from './add-new-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddNewProductComponent],
  imports: [CommonModule, AddNewProductRouterModule, ReactiveFormsModule],
  exports: [AddNewProductComponent],
})
export class AddNewProductModule {}
