let count = 0;
count += 1;
count = '갑자기 문자열?!' //error TS2322: Type '"갑자기 문자열?!"' is not assignable to type 'number'.

const message: string = 'hello TS!'

const done: boolean = true

const numbers: number[] = [1, 2, 3]
const messages: string[] = ['일', '이', '삼']

messages.push(1) //error TS2345: Argument of type '1' is not assignable to parameter of type 'string'.

let mightBeUndefined: string | undefined = undefined
let nullableNumber: number| null = null

let color : 'red' | 'orange' | 'yellow' = 'red'
color = 'yellow'
color = 'green' //error TS2322: Type '"green"' is not assignable to type '"red" | "orange" | "yellow"'.


function sum (x:number, y: number): number {
    // return x + y
    return null //error TS2322: Type 'null' is not assignable to type 'number'.
}


function sumArray(numbers: number []): number {
    return numbers.reduce((acc, current) => acc * current, 0)
}

const total = sumArray([1, 2, 3, 4, 5])


interface Shape {
    getArea(): number
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius
    }

    getArea() {
        return this.radius * this.radius * Math.PI
    }
}


class Rectangle implements Shape {
    height: number;
    constructor(private width: number, height: number) {
        this.width = width;
        this.height = height;
    } 

    getArea() {
        return this.width * this.height
    }
}

const circle = new Circle(5)
const rectangle = new Rectangle(10, 5)
console.log(circle.radius)
console.log(rectangle.width) //error TS2341: Property 'width' is private and only accessible within class 'Rectangle'.

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)]

shapes.forEach(shape => {
    console.log(shape.getArea())
})

//////////////////////////////////////////////////

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    skills: string[]
}
const person: Person = {
    name: '안나',
    age: 20
}

const expert: Developer = {
    name: '엘사',
    age: 21,
    skills: ['javascript', 'react']
  };

const people: Person[] = [person, expert]

//////////////////////////////////////////////////

type seniorDeveloper = Person & {
    skills: string[]
}

type Company = {
    id?: number
    name: string,
}

const disney: Company = {
    name: '디즈니'
}

type Startup = Company & {
    location: string
}

const pixar: Startup = {
    name: '픽사',
    location: '엘에이'
}

type Companies = Company[]
const companies: Companies = [disney, pixar]

type Color = 'red' | 'orange' | 'yellow'
const onePick: Color = 'red'
const colors: Color[] = [onePick, 'orange', 'yellow']



/** generics */

function merge(a: any, b: any) {
    return {
        ...a,
        ...b
    }
}

const merged = merge({ foo: 1 }, { bar: 1})



function merging <A, B> (a: A, b: B) : A & B {
    return {
        ...a,
        ...b
    }
}

const mergedMerged = merging({foo: 1}, { bar: 2})


function wrap<T> (param: T) {
    return {
        param
    }
}

const wrapped = wrap(10)

/** interface - generics */

class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
