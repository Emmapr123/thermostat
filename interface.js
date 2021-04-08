let thermostat = new Thermostat;

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature)
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
  $('#energyUsage').text(thermostat.energyUsage());
});

$('#up').click(function() {
  thermostat.up()
  $('#temperature').text(thermostat.temperature)
  $('#energyUsage').text(thermostat.energyUsage());
  $('#energyUsage').attr('class', thermostat.energyUsage());
});

$('#down').click(function() {
  thermostat.down()
  $('#temperature').text(thermostat.temperature)
  $('#energyUsage').text(thermostat.energyUsage());
  $('#energyUsage').attr('class', thermostat.energyUsage());
});

$('#reset').click(function() {
  thermostat = new Thermostat;
  $('#temperature').text(thermostat.temperature)
});

$('#powerSavingModeSwitch').click(function() {
  thermostat.powerSavingModeSwitch()
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
  $('#outdoorTemperature').text(data.main.temp);
})



