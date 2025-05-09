import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.productService.searchProducts(searchTerm);
  }

  onLogin(): void {
    alert('Login functionality will be implemented here');
  }

  onCartClick(): void {
    // TODO: Implement cart view
    alert('Cart view will be implemented here');
  }
}
