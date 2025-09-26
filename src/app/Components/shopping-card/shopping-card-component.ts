import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Iproduct } from '../../Modles/iproduct';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../Services/products.service';
import { NgClass } from "@angular/common";

@Component({
  selector: 'shopping-card-component',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './shopping-card-component.html',
  styleUrl: './shopping-card-component.css'
})
export class ShoppingCardComponent {
  @Input() items: any[] = [];
  @Input() totalPrice: number = 0;
  @Output() close = new EventEmitter<void>();

  CloseCart() {
    this.close.emit();
  }
}
