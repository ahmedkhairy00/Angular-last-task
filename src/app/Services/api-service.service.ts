import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Iproduct } from '../Modles/iproduct';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _HttpClient : HttpClient) { }


    getProductById(id : number) : Observable<any>{
      return this._HttpClient.get<any>(`${environment.API_URL}/${id}`);
    }

   getAllProducts() {
  return this._HttpClient.get<any[]>(environment.API_URL).pipe(
    map(res => res.map(p => this.normalizeProduct(p)))
  );
}
searchProducts(query: string) {
  return this._HttpClient.get<any>(`https://dummyjson.com/products/search?q=${query}`).pipe(
    map(res => res.products.map((p: any) => this.normalizeProduct(p)))
  );
}

getProductsByCategory(category: string) {
  return this._HttpClient.get<any[]>(`${environment.API_URL}/category/${category}`).pipe(
    map(res => res.map(p => this.normalizeProduct(p)))
  );
}

getCategories(): Observable<string[]> {
  return this._HttpClient.get<string[]>('https://fakestoreapi.com/products/categories');
}

private normalizeProduct(p: any): Iproduct {
   return {
    id: p.id,
    title: p.title,
    price: p.price,
    description: p.description,
    category: p.category,
    image: p.image || p.thumbnail,
    quantity: p.quantity ?? 1,          // default to 1
    catogryId: p.catogryId ?? 0         // default to 0 if missing
  };
}



}
