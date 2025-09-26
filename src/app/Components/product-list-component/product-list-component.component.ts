import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ShoppingCardComponent } from "../shopping-card/shopping-card-component";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SearchComponent } from "../search/search.component";
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [ProductCardComponent, ShoppingCardComponent, ProductDetailsComponent, SearchComponent],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent implements OnInit {

  products: any[] = [];

  @Output() addToCart = new EventEmitter<any>();
  constructor(private _ApiService: ApiServiceService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  // 🔹 Load all products initially
  loadAllProducts() {
    this._ApiService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res; // dummyjson wraps in { products: [] }
      },
      error: (err) => console.error(err)
    });
  }

  // 🔹 Search handler (from child)
  onSearchChanged(value: string) {
    if (!value.trim()) {
      this.loadAllProducts();
      return;
    }

    this._ApiService.searchProducts(value).subscribe({
      next: (res) => {
        this.products = res; // API returns { products: [] }
              console.log('🔍 Search results:', this.products);
      },
      error: (err) => console.error(err)
    });
  }

  // 🔹 Category filter handler (from child)
  onFilterChanged(category: string) {
    if (category === '0') {
      this.loadAllProducts();
      return;
    }

    this._ApiService.getProductsByCategory(category).subscribe({
      next: (res) => {
        this.products =  res;
      },
      error: (err) => console.error(err)
    });
  }

  // 🔹 Add to cart handler
  handleAddToCart(product: any) {
    this.addToCart.emit(product);
  }
}
