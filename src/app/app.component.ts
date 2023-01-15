import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  position = 0;
  name = 'jorge';
  age = 50;
  image = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  bkgr1 = "#ffaaaa"
  person = {
    name: 'Jorge',
    age: 50,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };
  names: string[] = ['Paula', 'Leticia', 'Morena'];
  newName = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  plusAge() {
    this.person.age += 1
  }
  minusAge() {
    this.person.age -= 1
  }

onScroll(event: Event) {
  const element = event.target as HTMLElement;
  this.position = element.scrollTop;
  if (this.position > 100) {
    this.bkgr1 = "#dddd25"
  } else {
    this.bkgr1 = "#ff32aa"
  }
}
changeName(event: Event) {
  const element = event.target as HTMLInputElement;
  this.person.name = element.value
}
addName() {
  this.names.push(this.newName);
  this.newName = '';
}
deleteName(index: number) {
  this.names.splice(index, 1)
}
}
