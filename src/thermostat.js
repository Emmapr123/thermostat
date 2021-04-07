class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
    this.powerSavingMode = true;
  };
  up() {
    if(this.powerSavingMode) {
      if(this.temperature < 25)  {this.temperature++};
    } else {
      if(this.temperature < 32) {this.temperature++};
    };
  };

  down() {
    if(this.temperature > 10) { this.temperature-- };
  };

  powerSavingModeSwitch() {
    this.powerSavingMode = !this.powerSavingMode
  }
}