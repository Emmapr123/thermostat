let thermostat = new Thermostat;

$(document).ready(function() {
  $('#temperature').text(thermostat.temperature)
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#up').click(function() {
  thermostat.up()
  $('#temperature').text(thermostat.temperature)
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#down').click(function() {
  thermostat.down()
  $('#temperature').text(thermostat.temperature)
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#reset').click(function() {
  thermostat = new Thermostat;
  $('#temperature').text(thermostat.temperature)
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#powerSavingModeSwitch').click(function() {
  thermostat.powerSavingModeSwitch()
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});

$('#location').change(function() {
  let city = $('#location').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
    $('#outdoorTemperature').text(data.main.temp);
  });
});


