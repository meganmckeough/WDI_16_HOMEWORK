require 'pry'

# planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# # second value
# # puts planeteers[1]

# # add heart
# # planeteers.push('Heart')

# rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
# heroes_array = []

# heroes_array.push(rangers)
# heroes_array.push(planeteers)

# heroes = heroes_array.flatten

# # alphabetize
# # heroes.sort

# #randomise
# random_heroes = heroes.shuffle

# #random element
# random_hero = heroes.sample

#find those starting with b
# def starts_with_b? (heroes)
# 	heroes.each do |hero|
# 		if hero.start_with?('B')
# 		puts hero
# 		end
# 	end
# end

# starts_with_b?(heroes)

#HASHES

ninja_turtle = {
	:name => 'Michelangelo',
	:weapon => 'Nunchuks',
	:radical => true,
	:age => 30
}

#remove radical
ninja_turtle.delete(:radical)

#add new pizza toppings key and values
ninja_turtle[:pizza_toppings] = %w|pizza cheese peppers chilli|

#access first in array
# p ninja_turtle[:pizza_toppings][0]

#array of keys

ninja_keys = ninja_turtle.keys

#printing key and value

ninja_turtle.each do |key, value|
    puts "#{key} is equal to #{value}"
end
















