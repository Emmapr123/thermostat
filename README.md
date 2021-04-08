### html skeleton

header - state what it is
current temp
up button
down button
reset button

powersavingmode status
powersavingmode button

energy usage


To call the weather API

$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=289b88a2e3e5fb781d9de6163f5e3c39', function(data) {
  console.log(data.main.temp);
})



$.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=289b88a2e3e5fb781d9de6163f5e3c39&units=metric', function(data) {
  console.log(data.main.temp);
})