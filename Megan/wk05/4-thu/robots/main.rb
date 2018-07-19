require 'pry'
require_relative 'robot'

puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.name
puts robot1.name
puts robot1.mac_add

puts "Robot 2: "
robot2 = Robot.new
puts robot2.name
puts robot2.name
puts robot2.name
puts robot2.mac_add


puts "Robot 3: "
robot3 = Robot.new
puts robot3.name
puts robot3.name
puts robot3.mac_add
puts "Resetting to factory settings."
robot3.reset
puts robot3.name
puts robot3.name
puts robot3.mac_add




