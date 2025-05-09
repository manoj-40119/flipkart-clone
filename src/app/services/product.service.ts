import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: "iPhone 13",
      price: 69999,
      discount: "10% off",
      image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg"
    },
    {
      id: 2,
      title: "Samsung Galaxy S21",
      price: 49999,
      discount: "15% off",
      image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg"
    },
    {
      id: 3,
      title: "OnePlus 9",
      price: 39999,
      discount: "5% off",
      image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg"
    },
    {
      id: 4,
      title: "Mi 11",
      price: 29999,
      discount: "20% off",
      image: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg"
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() { }

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  searchProducts(searchTerm: string): void {
    const filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.productsSubject.next(filteredProducts);
  }
} 