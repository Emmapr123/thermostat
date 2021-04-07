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

  describe('powerSavingMode', function() {
    it ('is true by default', function() {
      expect(thermostat.powerSavingMode).toEqual(true)
    });
  });

  describe('up', function() {
    it('does not increase above 25 degrees if powerSavingMode is on', function() {
      for(let i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe ('powerSavingModeSwitch', function() {
    it ('can switch to being false', function () {
      thermostat.powerSavingModeSwitch()

      expect(thermostat.powerSavingMode).toBe(false)
    });
  });

  describe('up', function() {
    it('increases up to 32 degrees if powerSavingMode is off', function() {
      for(let i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(32)
    });
  });
  
  describe('reset', function() {
    it('can reset the temperature to 20', function() {
      thermostat.reset()

      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('energyUsage', function() {
    it('returns low-usage if temperature is below 18', function() {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.energyUsage()).toEqual("low-usage")
    });
    it('returns medium usage if the temperature is below 25 and above 18', function() {
      thermostat.reset();
      expect(thermostat.energyUsage()).toEqual("medium-usage")
    });
    it('returns high-usage if the temperature is above 25', function() {
      for(let i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage")
    });
  });
});



