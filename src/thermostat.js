class Thermostat {
  constructor(temperature) {
    this.temperature = 20;
  };
  up() {
    this.temperature++;
  };

  down() {
    this.temperature--;
  };
}