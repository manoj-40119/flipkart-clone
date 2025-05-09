import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categories = [
    {
      name: 'Top Offers',
      image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f15c02bfeb02d15d.png'
    },
    {
      name: 'Grocery',
      image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/29327f40e9c4d26b.png'
    },
    {
      name: 'Mobile',
      image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/22fddf3c7da4c4f4.png'
    },
    {
      name: 'Fashion',
      image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/82b3ca5fb2301045.png'
    }
  ];
}
