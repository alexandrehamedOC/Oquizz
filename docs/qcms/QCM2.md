# QCM 2

Le MCD indique `VOITURE <-- 1,1 --> Possède <-- 0,N --> GARAGE.` C'est une relation de type ?

- One-to-One
- One-to-Many
- Many-to-Many
- Voiture-to-Garage

---

Le mot clé `extends` permet :

- d'instancier un élément d'une classe
- d'hériter d'une classe
- de définir les attributs d'une classe

---

La méthode `constructor` d'une classe `C` permet d'appeler :

- `new C();`
- `new C;`
- `C.constructor()`

---

`this` permet :

- d'accéder à la classe depuis l'extérieur
- d'accéder à une instance de classe de puis l'extérieur de la classe
- d'accéder à une instance de classe depuis l'intérieur de la classe

---

[Lire le code founi après la question.] Laquelle de ces instructions déclenche une erreur ?

- `hachiko.drink();`
- `hachiko.color = "grey";`
- `garfield.eat();`
- `garfield.bark();`

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
