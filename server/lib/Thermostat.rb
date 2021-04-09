class Thermostat 

  def self.temperature
    @temperature ||= 20
  end 

  def self.set(temp)
    @temperature = temp
  end

  def self.city
    @city ||= 'London'
  end 

  def self.set_city(city)
    @city = city
  end

end 
#   def down
#     if(this.temperature > 10) { this.temperature-- };
#   end 

#   powerSavingModeSwitch() {
#     this.powerSavingMode = !this.powerSavingMode
#   };

#   reset() {
#     this.temperature = 20;
#   };

#   energyUsage() {
#     if(this.temperature < 18) {
#       return "low-usage";
#     } else if(this.temperature < 25) {
#       return "medium-usage";
#     } else {
#       return "high-usage";
#     }
#   }
# }