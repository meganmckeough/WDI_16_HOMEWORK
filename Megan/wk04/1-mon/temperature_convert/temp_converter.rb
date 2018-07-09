require 'pry'

puts ('Type in a temp to convert')
temp_to_convert = gets().chomp()
puts ('Type in a unit')
temp_unit = gets.chomp()

# if temp_unit != (/[fckFCK]/)
# 	puts 'Must be F, C or K!'
# end

temp = temp_to_convert.to_i

def temp_conversion(temp, temp_unit)
	if temp_unit == "f"
		celsius_temp = ((temp-32)/1.8).round(2)
		kelvin_temp = ((temp+459.67)/1.8).round(2)
		puts ("Fahrenheit: #{temp} to Celsius: #{celsius_temp} to Kelvin: #{kelvin_temp}")
	elsif temp_unit == "C"
		fahren_temp = (temp * 1.8 + 32).round(2)
		kelvin_temp = (temp + 273.16).round(2)
		puts ("Celsius: #{temp} to Fahrenheit: #{fahren_temp} to Kelvin: #{kelvin_temp}")
	else temp_unit == "K"
		celsius_temp = (temp - 273.15).round(2)
		fahren_temp = (temp * 1.8 - 459.67).round(2)
		puts ("Kelvin: #{temp} to Fahrenheit: #{fahren_temp} to Celsius: #{celsius_temp}")
	end
end 

temp_conversion(temp, temp_unit)

