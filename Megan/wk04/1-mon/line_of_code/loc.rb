require 'pry'

puts 'Filename: '
file_to_check = gets().chomp()

no_of_lines = File.readlines(file_to_check).size

puts ("#{no_of_lines} line(s)")

