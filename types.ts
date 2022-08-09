let isDone: boolean = true;
let decimals: number = 5;
let hex: number = 0xf00D;
let binary: number = 0b1010;
let octal: number = 0o744;

let message: string = '';

let messages: string[] = ['Message 1', 'Message 2', 'Message 3', 'Message 4', 'Message5'];
let strictMessage: Array<number> = [1, 2];
let strictMessage1: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f'];

let strictMessage2: ['Message 1', 'Message 2', 'Message 3'] = ['Message 1', 'Message 2', 'Message 3'];
let strictMessage3: ['Message 1', number] = ['Message 1', 1];

let anyType: any = {};

enum Truck {
    Ford = 'ford',
    Tesla = 'tesla'
};

enum Car {
    BMW = 1,
    Ford = 2,
}


const car: {
    engine: {
        power: number,
    }
    doors: number,
} = {
    engine: {
        power: 500
    },
    doors:2
}


class Suv {
    constructor(public  model: string) {


    }

    drive(): void {
        console.log(`I am driving ${this.model}`)
    }
}

const suv = new Suv('BMW');
suv.drive();

function identity<T>(arg: T): T {
    return arg;
};

let output = identity<string>('myString');

const setNumber = new Set<number>();

setNumber.add(1);

const setString = new Set<string>();

setString.add('1');