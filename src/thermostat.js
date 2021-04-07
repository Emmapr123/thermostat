class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
  };
  up() {
    this.temperature++;
  };

  down() {
    if(this.temperature > 10) { this.temperature-- };
  };
}