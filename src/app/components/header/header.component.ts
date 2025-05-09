import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private productService: ProductService) {}

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.productService.searchProducts(searchTerm);
  }

  onLogin(): void {
    alert('Login functionality will be implemented here');
  }

  onCartClick(): void {
    alert('Cart functionality will be implemented here');
  }
}
