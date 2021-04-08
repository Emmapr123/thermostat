let thermostat = new Thermostat;

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature)
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});

$('#up').click(function() {
  thermostat.up()
  $('#temperature').text(thermostat.temperature)
});

$('#down').click(function() {
  thermostat.down()
  $('#temperature').text(thermostat.temperature)
});

$('#reset').click(function() {
  thermostat = new Thermostat;
  $('#temperature').text(thermostat.temperature)
});

$('#powerSavingModeSwitch').click(function() {
  thermostat.powerSavingModeSwitch()
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});



