import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { AddToCartFormComponent } from './add-to-cart-form/add-to-cart-form.component';
import { FormsModule } from '@angular/forms';
import { CheckOutFormComponent } from './check-out-form/check-out-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
@NgModule({
  declarations: [
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    AddToCartFormComponent,
    CheckOutFormComponent,
    ConfirmationComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ComponentsModule {}
