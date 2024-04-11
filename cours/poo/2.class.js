// Le seul but des class est d'avoir une usine à objets
// Ici une usine à chien
// Usine => Je créer un objet contenant des propriétés et des méthodes
class Dog {
  // Une bonne pratique est de lister les propriétés de l'objet
  name;

  age;

  // On peut assigner une valeur par défaut à nos propriétés
  color = 'brown';

  // Le constructor est non michélisable
  // C'est une méthode (fonction) qui est exécutée lors de la création de l'objet
  // new Dog('Lapoo', 2, 'white')
  constructor(name, age, color) {
    // On spécifie les propriétés de notre objet avec les paramètres de notre constructor
    // Le rôle du constructeur est de définir les propriétés de l'objet
    this.name = name;
    this.age = age;

    // Je ne modifie la couleur que si elle est passée en paramètre
    if (color) {
      this.color = color;
    }
    // Le mot clé this fait référence à l'objet courant (à l'instance de l'objet)
    // Ici le chien qui est en train d'être créé
  }

  // Je vais rajouter des méthodes à mon objet créé
  bark() {
    // La méthode bark est rattachée à l'objet créé
    // this fait référence à l'objet qui a exécuté la méthode
    console.log(`Wouaf wouaf ${this.name}`);
  }
}

// Pour utiliser notre usine, il faut utiliser le mot clé new
// Je créer un nouveau chien
// On créer une instance de la class Dog (un objet créer à partir de la class Dog)
const perditaDog = new Dog('Perdita', 3, 'white and black');

console.log(perditaDog);

perditaDog.bark();

const billDog = new Dog('Bill', 5);

console.log(billDog);

billDog.bark();
