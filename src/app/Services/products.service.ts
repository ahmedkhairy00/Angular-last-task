import { Injectable } from '@angular/core';
import { Iproduct } from '../Modles/iproduct';
import { Icatogary } from '../Modles/icatogary';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // All Products 
    // defines Array Of Products
       products: Iproduct[] = [
    // Mobiles
    {
      id: 1,
      name: "mobile Apple iPhone 15 128GB - Black",
      quantity: 25,
      price: 799.99,
      imgUrl: "https://m.media-amazon.com/images/I/51L9Y2Mo1oL._AC_UL320_.jpg",
      catogryId: 10,
    },
    {
      id: 2,
      name: " mobile Samsung Galaxy S24 FE 5G",
      quantity: 15,
      price: 699.99,
      imgUrl: "https://m.media-amazon.com/images/I/71rpXWlF2dL._AC_UL320_.jpg",
      catogryId: 10,
    },
    {
      id: 3,
      name: " mobile Google Pixel 8 Pro",
      quantity: 10,
      price: 899.99,
      imgUrl: "https://m.media-amazon.com/images/I/41wV1Y61oIL._AC_UL320_.jpg",
      catogryId: 10,
    },
  
    // Laptops
    {
      id: 4,
      name: "Laptops Dell XPS 15 OLED (16GB, 1TB)",
      quantity: 8,
      price: 1849.99,
      imgUrl: "https://m.media-amazon.com/images/I/31lY75SW6+L._AC_UL320_.jpg",
      catogryId: 20,
    },
    {
      id: 5,
      name: "Laptops HP Spectre x360 14 — Touchscreen",
      quantity: 12,
      price: 1599.99,
      imgUrl: "https://m.media-amazon.com/images/I/81RXoQVaBlL._AC_UL320_.jpg",
      catogryId: 20,
    },
    {
      id: 6,
      name: " Laptops MacBook Air M2 2023",
      quantity: 20,
      price: 1199.00,
      imgUrl: "https://m.media-amazon.com/images/I/610iA5rlVmL._AC_UL320_.jpg",
      catogryId: 20,
    },
  
    // TVs
    {
      id: 7,
      name: "Samsung 55\" QLED 4K Smart TV",
      quantity: 5,
      price: 1299.99,
      imgUrl: "https://m.media-amazon.com/images/I/81L8p+hbggL._AC_UL320_.jpg",
      catogryId: 30,
    },
    {
      id: 8,
      name: "LG OLED 65\" Evo Series TV",
      quantity: 3,
      price: 2499.99,
      imgUrl: "https://m.media-amazon.com/images/I/61UlCWhPUVL._AC_UL320_.jpg",
      catogryId: 30,
    },
  
    // Watches / Smartwatches
    {
      id: 9,
      name: "Apple Watch Series 9 45mm Smartwatches",
      quantity: 30,
      price: 429.00,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71bf9IpGjtL._AC_SL1500_.jpg",
      catogryId: 40,
    },
    {
      id: 10,
      name: "Samsung Galaxy Watch6 44mm Smartwatches",
      quantity: 22,
      price: 349.99,
      imgUrl: "https://m.media-amazon.com/images/I/71yJHlmjKvL._AC_UL320_.jpg",
      catogryId: 40,
    },
  ];

  // Define Array Of Catogries
  catogeries : Icatogary[] = 
[
  {name : "Mobile" , id : 10},
  {name : "Laptops" , id : 20},
  {name : "Tv" , id : 30},
  {name : "Watch" , id : 40}

]

  // Toggle Boolean Value
  isOpen : boolean = true;

  filterProduct : Iproduct[] = [];

  constructor() { }

  // get products by category ID
  getProductsByCatID(catId: number): Iproduct[] {
    return this.products.filter((prod) => prod.catogryId === catId);
  }

  // get product by product ID
  getProductByID(productId: number): Iproduct | undefined {
    return this.products.find((prod) => prod.id === productId);
  }

  // providedIn: 'root' means this service is a singleton and available app-wide without needing to add it to providers[] in a module.
}

