import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewProductRouterModule } from './add-new-product-router.module';
import { AddNewProductComponent } from './add-new-product.component';

@NgModule({
  declarations: [AddNewProductComponent],
  imports: [CommonModule, AddNewProductRouterModule],
  exports: [AddNewProductComponent],
})
export class AddNewProductModule {}
