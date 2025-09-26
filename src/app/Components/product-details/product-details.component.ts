import { Component, inject, Output, EventEmitter  } from '@angular/core';
import { Iproduct } from '../../Modles/iproduct';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute , RouterOutlet , Router  } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {


  selectedProduct: any | undefined;
  @Output() addToCart = new EventEmitter<any>();
  // Dependency Injection: using inject() function
  route = inject(ActivatedRoute);
  router = inject(Router);
  // Dependency Injection: using constructor injection
  constructor(private ApiService : ApiServiceService) {
    // Get the product ID from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.selectedProduct = this.ApiService.getProductById(id).subscribe((product)=> {
         this.selectedProduct = product;
      });
      console.log(this.selectProduct);
    }
  }

  onAddToCart() {
    if (this.selectedProduct) {
      this.addToCart.emit(this.selectedProduct);
    }
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    console.log(product);
  }

  backToProducts() {
    this.router.navigate(['/products']).catch((err: unknown) => {
      console.error('Navigation error:', err);
    });
  }
}

