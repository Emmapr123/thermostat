let thermostat = new Thermostat;

$(document).ready(function() {
  $.get('http://localhost:4567/thermostat', function(data) {
    thermostat.setTemperature(parseInt(data));
    console.log(thermostat.temperature, thermostat.energyUsage())
    $('#temperature').text(data + 'c');
    $('#powerSavingMode').text(thermostat.powerSavingMode ? 'ON' : 'OFF');
    $('#energyUsage').text(thermostat.energyUsage());
    $('#temperature').attr('class', thermostat.energyUsage());
    $('#powerSavingModeSwitch').text(thermostat.powerSavingMode ? 'ON' : 'OFF');  
  });
  $.get('http://localhost:4567/city', function(data) {
    $('#location').val(data)
  });
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + $('#location').val() + '&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
      $('#outdoorTemperature').text(data.main.temp + 'c');
    });
});

function updateTemperature() {
  $.post('http://localhost:4567/thermostat', {temperature: thermostat.temperature});
  $('#temperature').text(thermostat.temperature + 'c');
  $('#energyUsage').text(thermostat.energyUsage());
  $('#temperature').attr('class', thermostat.energyUsage());
}

$('#up').click(function() {
  thermostat.up()
  updateTemperature()
});

$('#down').click(function() {
  thermostat.down()
  updateTemperature()
});

$('#reset').click(function() {
  thermostat = new Thermostat;
  updateTemperature()
});

$('#powerSavingModeSwitch').click(function() {
  thermostat.powerSavingModeSwitch()
  $('#powerSavingModeSwitch').text(thermostat.powerSavingMode ? 'ON' : 'OFF')
});

$('#location').change(function() {
  let city = $('#location').val();
  $.post('http://localhost:4567/city', {city: city});
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
    $('#outdoorTemperature').text(data.main.temp + 'c');
  });
});


