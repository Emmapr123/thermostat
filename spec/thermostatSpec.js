describe('thermostat', function() {
  let thermostat = new Thermostat;

  it ('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  describe('up', function() {
    it('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe('down', function() {
    it ('decreases the temperature by 1', function() {
      thermostat.down();
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });

    it('does not decrease below 10 degrees', function() {
      for(let i = 0; i < 12; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(10)
    });
  });
});



