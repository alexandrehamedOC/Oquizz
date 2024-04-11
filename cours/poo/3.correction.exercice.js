/* eslint-disable max-len */
/*
Coder une classe 'Vehicule'

Propriétés / Attributs :
`nbOfWheels` (number), `enginePower` (number), `isStarted` (boolean)

Méthodes :
- constructor(nbOfWheels, enginePower) // isStarted est 'false' par défaut
- start() // Passe isStarted à true
- stop() // Passe isStarted à false
- makeNoise() // Si started, logger 'vrooooom', sinon ne fait rien.
- toString() // RETOURNE "Véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}."
- boostEngine(power); // (Bonus) Pour ajouter la valeur power à la puissance du moteur, capé à 2000 max au cas où ça dépasserait !

Pour tester (si possible avant d'avoir terminer d'écrire toutes les méthodes => test progressif )
Instancier quelques véhicules pour tester !
- une ferrari
- une clio C3
- une moto
- une trotinette electrique

*/

class Vehicule {
  nbOfWheels;

  enginePower;

  isStarted = false;

  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;
  }

  start() {
    // Mon objet véhicule qui exécute la méthode start (this)
    // Je lui passe sa propriété isStarted à true
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }

  // Si started, logger 'vrooooom', sinon ne fait rien.
  makeNoise() {
    if (this.isStarted) {
      console.log('vrooooom');
    }
  }

  // RETOURNE "Véhicule à X roues, de puissance Y, {est démarré | n'est pas démarré}."
  toString() {
    const startStr = this.isStarted ? 'est démarré' : "n'est pas démarré";
    return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, ${startStr}.`;
  }

  // (Bonus) Pour ajouter la valeur power à la puissance du moteur, capé à 2000 max au cas où ça dépasserait !
  boostEngine(power) {
    // Je boost la puissance
    this.enginePower += power;
    // équivalent à
    // this.enginePower = this.enginePower + power;
    // Si la puissance boostée est supérieure à 2000
    // Je la remet à 2000
    if (this.enginePower > 2000) {
      this.enginePower = 2000;
    }
  }
}

const ferrari = new Vehicule(4, 500);
console.log(ferrari);

ferrari.start();
console.log(ferrari);

console.log(ferrari.toString());
