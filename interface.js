let thermostat = new Thermostat;

$(document).ready(function() {
  $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
  $('#powerSavingModeSwitch').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
  $.get('http://localhost:4567/thermostat', function(data) {
    $('#temperature').text(data + 'c')
  })
});

$('#up').click(function() {
  thermostat.up()
  $.post('http://localhost:4567/thermostat', {temperature: thermostat.temperature});
  $('#temperature').text(thermostat.temperature + 'c');
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#down').click(function() {
  thermostat.down()
  $.post('http://localhost:4567/thermostat', {temperature: thermostat.temperature});
  $('#temperature').text(thermostat.temperature + 'c')
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#reset').click(function() {
  thermostat = new Thermostat;
  $.post('http://localhost:4567/thermostat', {temperature: thermostat.temperature});
  $('#temperature').text(thermostat.temperature + 'c')
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
});

$('#powerSavingModeSwitch').click(function() {
  thermostat.powerSavingModeSwitch()
  $('#powerSavingModeSwitch').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});

$('#location').change(function() {
  let city = $('#location').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
    $('#outdoorTemperature').text(data.main.temp + 'c');
  });
});


