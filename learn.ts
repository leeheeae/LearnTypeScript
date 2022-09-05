export default function () {}

let message: string = 'hello world';
let value: number = 1;

let nullableString: string | null = null;
nullableString = 'hi';

let undefinedOrNumber: undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'bye';
numberOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

let anyValue: any = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello world';

function process(a: number, b: number, isDouble?: boolean) {
  const sum = a + b;
  return isDouble ? sum * 2 : sum;
}

const total = process(1, 2);
const doubleTotal = process(1, 2, true);

function hello(value: string, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${value}`;
}

const result = hello('World');
const nullResult = hello('World', true);

const replaced = result.replace('Hello', 'Bye'); // null이라고 에러 뜸

const replaced2 = () => {
  // null 대한 처리를 해줘야함
  if (result !== null) {
    const replace = result.replace('Hello', 'Bye');
  }
  const replace = result?.replace('Hello', 'Bye');
};

interface Profile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string;
}

function printUsername(profile: Profile) {
  console.log(profile.username);
}

const profile: Profile = {
  id: 1,
  username: 'test',
  displayName: '디스플레이네임',
};

const profileWithPhoto: Profile = {
  id: 1,
  username: 'test',
  displayName: '디스플레이네임',
  photoURL: 'photo.png',
};

printUsername(profile);

interface Relationship {
  from: Profile;
  to: Profile;
}

const relationship: Relationship = {
  from: {
    id: 1,
    username: 'test',
    displayName: 'test name',
  },
  to: {
    id: 2,
    username: 'johndoe',
    displayName: 'dfsf',
  },
};

interface Accout extends Profile {
  email: string;
  password: string;
}

const accout: Accout = {
  id: 1,
  username: 'ssdfasd',
  displayName: 'sadfasd',
  email: 'sdfas@naver.com',
  password: '1231421',
};

interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 6);

const area = circle.getArea();
const perimeter = circle.getPerimeter();

const numbers: number[] = [1, 2, 3, 4, 5];
const texts: string[] = ['hellow', 'world'];

// interface Person {
//   name: string;
// }

// const people: Person[] = [{name: 'sdfsd'}, {name: 'sss'}];

type Person = {
  name: string;
};

// const person: Person = {
//   name: 'safsd',
// };

type People = Person[];
const people: People = [{name: 'sdfasd'}];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';

type Empolyee = Person & {
  job: string;
};

const empolyee: Empolyee = {
  name: 'sadf',
  job: 'programmer',
};

function wrap<T>(value: T) {
  return {value};
}

const person: Person = {name: 'sdf'};
const result2 = wrap(person);
console.log(result2.value.name); //

interface Item<T> {
  id: number;
  data: T;
}

interface Place {
  location: string;
}

const personItem: Item<Person> = {
  id: 1,
  data: {
    name: 'dfsf',
  },
};

const placeItem: Item<Place> = {
  id: 2,
  data: {
    location: 'korea',
  },
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
const first = queue.dequeue(); // 0
const second = queue.dequeue(); // 1
