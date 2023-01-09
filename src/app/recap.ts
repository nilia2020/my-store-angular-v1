const usename: string | number = 'Jorge';

const sum = (a: number, b:number) => {
  return a + b
}

sum(1,5);

class Person {
  constructor(public age: number, public lastName: string) {
  }
}

const jorge = new Person(50, 'Niglia');

jorge.lastName;
