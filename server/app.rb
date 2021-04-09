require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'
require './lib/thermostat'

class Temp < Sinatra::Base 
  enable :sessions

  set :bind, '0.0.0.0'

  configure do
    enable :cross_origin
  end

  before do
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Headers'] = 'accept, authorization, origin'
    content_type 'application/json'
  end

  get '/thermostat' do
    @temperature = Thermostat.temperature
    @temperature.to_json
  end 

  post '/thermostat' do
    Thermostat.set(params[:temperature])
  end 

  get '/city' do 
    @city = Thermostat.city
    @city.to_json
  end 

  post '/city' do
    Thermostat.set_city(params[:city])
  end 

end 