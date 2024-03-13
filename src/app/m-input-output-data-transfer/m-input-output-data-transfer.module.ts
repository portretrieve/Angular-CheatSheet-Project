import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MInputOutputDataTransferRoutingModule } from './m-input-output-data-transfer-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MSharedCompsModule } from '../m-shared-comps/m-shared-comps.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [
    CommonModule,
    MInputOutputDataTransferRoutingModule,
    MSharedCompsModule,
  ],
})
export class MInputOutputDataTransferModule {}
