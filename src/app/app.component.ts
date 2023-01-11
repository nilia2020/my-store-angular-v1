import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  }
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
}
