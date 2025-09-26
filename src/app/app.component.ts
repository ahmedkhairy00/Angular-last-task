import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { FormatCreditCardPipe } from "./Pipes/format-credit-card.pipe";
import { ClockComponent } from "./Components/clock/clock.component";
import { ProductListComponentComponent } from "./Components/product-list-component/product-list-component.component";
import { ShoppingCardComponent } from "./Components/shopping-card/shopping-card-component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    FormatCreditCardPipe,
    RouterOutlet,
    ClockComponent,
    ProductListComponentComponent,
    ShoppingCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3-task';
  showClock = true;
  showCart = false;
  cartItems: any[] = [];
  total: number = 0;

  toggleClock() {
    this.showClock = !this.showClock;
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  handleAddToCart(product: any) {
    const exisitingProduct = this.cartItems.find((prod) => prod.id === product.id);
    if (exisitingProduct) {
      exisitingProduct.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  onRouteActivate(componentRef: any) {
    if (componentRef && componentRef.addToCart) {
      componentRef.addToCart.subscribe((product: any) => this.handleAddToCart(product));
    }
  }
}
