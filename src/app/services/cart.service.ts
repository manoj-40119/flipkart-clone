import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private cartCountSubject = new BehaviorSubject<number>(0);

  constructor() { }

  getCartItems(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(this.cartItems.length);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
    this.cartCountSubject.next(0);
  }
} 