/* eslint-disable max-classes-per-file */
class Vehicule {
  nbOfWheels;

  enginePower;

  isStarted = false;

  // Ici cette propriété ne sera pas mise sur mon instance
  // Elle reste sur la class
  static nbVehiculeCreated = 0;

  constructor(nbOfWheels, enginePower) {
    this.nbOfWheels = nbOfWheels;
    this.enginePower = enginePower;

    // A chaque fois qu'on créer un véhicule, on incrémente le compteur
    Vehicule.nbVehiculeCreated += 1;
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

  // Les méthodes static sont des méthodes qui sont attachées à la class
  // Elle ne sont pas attachées à l'instance
  static resetNbVehiculeCreated() {
    Vehicule.nbVehiculeCreated = 0;
  }
}

console.log(Vehicule.nbVehiculeCreated); // 0

const ferrari = new Vehicule(4, 500);
console.log(ferrari);

console.log(Vehicule.nbVehiculeCreated); // 1

const porsche = new Vehicule(4, 600);
console.log(porsche);

console.log(Vehicule.nbVehiculeCreated); // 2

Vehicule.resetNbVehiculeCreated();

console.log(Vehicule.nbVehiculeCreated); // 0
