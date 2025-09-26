import { Component, EventEmitter, Input, Output, SimpleChange, OnChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeBorderDirective } from '../../Directives/change-border.directive';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ChangeBorderDirective , CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

   router = inject(Router);
  // Receive Data From Parent Components

  // 1 - We Use @Input To Recieve Data
@Input({required : true}) product: any;

 // To Send Data To Parent Component
 // 1 - Use @Output
 // 2 - Use Event => To Parent Know If Change Happend

 @Output () addToCart = new EventEmitter<any>();

 // 3 - Create Function That Will Invoke The Event
 onAddToCart() {
  // Here => emit mean Invoke event and send product with event.
  this.addToCart.emit(this.product);
  if(this.product.quantity > 0) {
      this.product.quantity -= 1;

  }
 }

 // 4 - Use ngOnChange To any Change Happend In Event Rerender The Componenent
 OnChanges(changes : SimpleChange) : void {
  this.onAddToCart();
 }


 productDetail(product : any) {
  console.log(product);
  //this.router.navigateByUrl(`products/:${product.id}`);
  this.router.navigateByUrl(`products/${product.id}`);
 }
}
