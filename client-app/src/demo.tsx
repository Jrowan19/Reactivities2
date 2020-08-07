let data: number | string;

data = '42';

interface Icar {
  color: string;
  model: string;
  topSpeed?: Number;
}

const car1: Icar = {
  color: 'blue',
  model: 'bmw',
};

const car2: Icar = {
  color: 'red',
  model: 'mercedes',
  topSpeed: 100,
};

const multiply = (x: number, y: number) => {
  x * y;
};
