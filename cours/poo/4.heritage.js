/* eslint-disable max-classes-per-file */
class Vehicule {
  nbOfWheels;

  enginePower;

  isStarted = false;

  /**
   * @param {number} nbOfWheels Nombre de roues
   * @param {number} enginePower Puissance du moteur
   */
  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;
  }

  start() {
    this.isStarted = true;
  }

  stop() {
    this.isStarted = false;
  }

  makeNoise() {
    if (this.isStarted) {
      console.log('vrooooom');
    }
  }

  toString() {
    const startStr = this.isStarted ? 'est démarré' : "n'est pas démarré";
    return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, ${startStr}.`;
  }

  boostEngine(power) {
    this.enginePower += power;
    if (this.enginePower > 2000) {
      this.enginePower = 2000;
    }
  }
}

// Ici je dis que ma class Voiture hérite de toutes les propriétées et méthodes de la class Vehicule
class Voiture extends Vehicule {
  // Je rajoute en plus des propriétés de mes véhicules,
  // d'autres propriétés spécifiques à ma voiture
  nbOfDoors;

  constructor(enginePower, nbOfDoors) {
    // Quand on hérite d'une class, il faut appeler le constructor de la class parent
    // on utilise le mot clé super
    // super n'est pas michelisable, c'est un mot clé qui représente la class parente
    super(4, enginePower);

    this.nbOfDoors = nbOfDoors;
  }
}

const ferrari = new Voiture(500, 3);

ferrari.start();
ferrari.makeNoise();

class Twingo extends Voiture {
  // Avec l'héritage, on peut également surcharger les méthodes situées dans la class parente
  boostEngine(power) {
    this.enginePower += power;
    if (this.enginePower > 100) {
      this.enginePower = 100;
    }
  }
}

const twingo = new Twingo(50, 5);

twingo.boostEngine(500);
