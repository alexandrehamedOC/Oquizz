const lapooDog = {
  name: 'Lapoo',
  age: 2,
  color: 'white',
  bark() {
    console.log(`Wouaf wouaf ${lapooDog.name}`);
  },
};

const pongoDog = {
  name: 'Pongo',
  age: 4,
  color: 'black and white',
  bark() {
    console.log(`Wouaf wouaf ${pongoDog.name}`);
  },
};

function createDog(name, age, color) {
  return {
    name,
    age,
    color,
    bark() {
      console.log(`Wouaf wouaf ${name}`);
    },
  };
}

const perditaDog = createDog('Perdita', 3, 'white and black');
const scoobyDog = createDog('Scooby', 8, 'brown');

console.log(perditaDog);
console.log(scoobyDog);

perditaDog.bark();
scoobyDog.bark();
