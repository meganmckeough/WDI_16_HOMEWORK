require 'pry'

puts 'Filename: '
file_to_check = gets().chomp()

no_of_lines = File.readlines(file_to_check).size

# no_of_lines = File.readlines(ARGV[0]).size
# now you place second filename in CLI

puts ("#{no_of_lines} line(s)")

