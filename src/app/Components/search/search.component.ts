import { Component,Output,EventEmitter, inject } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { Icatogary } from '../../Modles/icatogary';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../Services/api-service.service';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue : string = '';
      selectedCategory: number | null = null;

  @Output() filterChanged = new EventEmitter<string>();
    @Output() searchChanged = new EventEmitter<string>();
  
  // inject Service
  _ProductService = inject(ProductsService);
  _ApiService = inject(ApiServiceService);

categories: any[] = [];
  
ngOnInit() {
  this._ApiService.getCategories().subscribe({
    next: (res:string[]) => {
    this.categories = res;  
    console.log('Catogries',this.categories)
    },
    error: (err) => console.error(err)
  });
}

    onSearchChange() {
  const value = this.searchValue.trim().toLowerCase();
  this.searchChanged.emit(value || ""); // send empty string if cleared
  
}

onCategoryChange(event: any) {
  const category = event.target.value;
  this.filterChanged.emit(category);
}

}
