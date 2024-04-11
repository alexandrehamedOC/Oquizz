# QCM 3

`Active Record` est :

- ❌ l'inverse du `dataMapper`
- ✅ un `design pattern` pour accéder à la BDD
- ❌ une méthode d'instance
- ❌ "Tu connais pas Active Record ? C'est un groupe, ils étaient number one"

`MVC` veut dire :

- ✅ Model View Controller
- ❌ Major Version Control
- ❌ Merguezed Versionned Couscous

Une **méthode de classe** se définit avec le mot clé :

- ✅ `static` --> définir une méthode de class
- ❌ `class` --> définir une classe
- ❌ `public`
- ❌ aucun des trois

```js
class Student {
  firstname;
  promo;

  constructor(firstname, promo) {
    this.firstname = firstname;
    this.promo = promo;
  }

  static async findAll() { /* */ } // On l'appelle avec Student.findAll()

  getAllGrades() { /* */ } // const student = new Student(...);  student.getAllGrades();
}
```

Pour appeler le contructeur de la classe parente depuis la classe enfant, on utilise le mot clé :

- ❌ `constructor()`
- ✅ `super()`
- ❌ `parent()`
- ❌ `ohViensLaQuandJeTappelle()`
