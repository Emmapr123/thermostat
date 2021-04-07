class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
    this.powerSavingMode = true;
  };
  up() {
      if(this.temperature < 25 && this.powerSavingMode)  {this.temperature++};
      if(this.temperature < 32 && !this.powerSavingMode) {this.temperature++};
  };

  down() {
    if(this.temperature > 10) { this.temperature-- };
  };

  powerSavingModeSwitch() {
    this.powerSavingMode = !this.powerSavingMode
  }

  reset() {
    this.temperature = 20;
  }
}