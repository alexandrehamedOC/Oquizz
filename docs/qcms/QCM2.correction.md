# QCM 2

Le MCD indique `VOITURE <-- 1,1 --> Possède <-- 0,N --> GARAGE.` C'est une relation de type ?

- One-to-One
- One-to-Many
- Many-to-Many
- Voiture-to-Garage

```txt
max(1, 1) -> 1
max(0, N) -> N
=> 1-N 
=> One-To-Many

(Conséquence pour le MLD)
On ajoute un `garage_id` du côté de la voiture
```

---

Le mot clé `extends` permet :

- ❌ d'instancier un élément d'une classe --> `new`
- ✅ d'hériter d'une classe --> `extends`
- ❌ de définir les attributs d'une classe --> `nom_de_l_attribut_dans_la_classe;`
- ❌ appeller le constructeur de la classe parent --> `super`
- ❌ appeller l'instance depuis la classe --> `this`

---

La méthode `constructor` d'une classe `C` permet d'appeler :

- ✅ `new C();` -> avec eventuellement des paramètre si le constructeur en attend !
- ❌ `new C;` -> manque les parenthèses
- ❌ `C.constructor()` -> `C.prototype.constructor()` mais on le verra pas !

---

`this` permet :

- ❌ d'accéder à la classe depuis l'extérieur
- ❌ d'accéder à une instance de classe de puis l'extérieur de la classe
- ✅ d'accéder à une instance de classe depuis l'intérieur de la classe

```js
class Humain {
  firstname; // attribut
  lastname;

  constructor(firstname, lastname) { // contructeur
  this.firstname = firstname;
  this.lastname = lastname;
  }

  getFullName() {
  return `${this.firstname} ${this.lastname}`; // this = accès à l'instance depuis l'intérieur de la classe
  }
}

const john = new Humain("John", "Doe"); // l'appel au constructeur via new
john.getFullName(); // "John Doe" // appel à une méthode d'instance

class Student extends Humain {
  promo;

  constructor(firstname, lastname, promo) {
  super(firstname, lastname); // Pour créer un Student, on créé avant tout un Humain => appelle le super = constructeur de la classe Humain !

  this.promo = promo;  
  }

  goToClass() {
  console.log(`Pfff !`);
  }
}

const tom = new Student("Tom", "Jedusor", "Serpentard"); // On créé un Student, qui sous le capot créé un Humain !
tom.getFullName(); // tom est un Humain, on a accès aux méthodes des Humain !
tom.goToClass(); // tom est un Student, on a accès aux méthodes des Students
```

---

[Lire le code founi après la question.] Laquelle de ces instructions déclenche une erreur ?

- ❌ `hachiko.drink();` // Hachiko est un Animal => drink() OK !
- ❌ `hachiko.color = "grey";` // color est une propriété publique de Animal => OK pour la modifier !
- ❌ `garfield.eat();` // garfield est un Animal => eat() est disponible !
- ✅ `garfield.bark();` // garfield n'est pas un Dog => bark() n'est pas disponible !

```js
class Animal {
  color;

  constructor(obj) {
  this.color = obj.color;
  }
  drink() {
  console.log("slurp slurp");
  }
  eat() {
  console.log("nom nom nom");
  }
}

class Dog extends Animal {
  constructor(obj) {
  super(obj);
  }

  bark() {
  console.log("waf waf");
  }
}

class Cat extends Animal {
  constructor(obj) {
  super(obj);
  }

  mew() {
    console.log("mew mew");
  }
}

const hachiko = new Dog({ color: "white" });
const garfield = new Cat({ color: "orange" });
```
