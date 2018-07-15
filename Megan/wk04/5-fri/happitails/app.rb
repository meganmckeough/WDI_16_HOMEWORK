require 'pry'
require_relative 'animal'
require_relative 'client'

$shelter = {
	'clients' => [],
	'animals' => []
}

#test data
a1 = Animal.new('Bob', '4', 'f', 'dog')
a2 = Animal.new('Jazzy', '7', 'm', 'cat')

c1 = Client.new('Andy', '4', '50')
c2 = Client.new('Joan', '0', '25')

$shelter['animals'] << a1
$shelter['animals'] << a2

$shelter['clients'] << c1
$shelter['clients'] << c2

def listing_animals 
	$shelter['animals'].each do |animal|
		puts animal.animal_name
	end
end

def listing_clients 
	$shelter['clients'].each do |client|
		puts client.client_name
	end
end

loop do
	puts "----------------------"
	puts "MENU"
	puts "Welcome to Happitails!"
	puts "What would you like to do?"
	puts "(1) List all clients"
	puts "(2) List all animals"
	puts "(3) Create a new animal"
	puts "(4) Create a new client"
	puts "(5) Adopt an animal from the shelter"
	puts "(6) Register a lost animal for adoption"
	puts "(q)uit"

	user_input = gets.chomp

	if user_input == "q"
		exit
	end 

	#creating animal
	if user_input == "3"
		puts "What is the name of the animal?"
		name = gets.chomp
		puts "What is the age?"
		age = gets.chomp
		puts "What is the gender?"
		gender = gets.chomp
		puts "What is the species?"
		species = gets.chomp
		animal = Animal.new(name, age, gender, species)
		puts "Welcome #{name}!"
		puts "Add a toy for the animal. What toy?"
		toy = gets.chomp
		animal.adding_toys(toy)
		loop do
			puts "Any other toys? (y/n)"
			if gets.chomp == 'n' 
				break
			end
			puts "What toy?"
			toy = gets.chomp
			animal.adding_toys(toy)
		end
		puts "Registration complete!"
		$shelter['animals'] << animal
	end

	#creating client
	if user_input == "4"
		puts "What is the name of the client?"
		name = gets.chomp
		puts "How many children do you have, #{name}?"
		children = gets.chomp
		puts "What is your age, if you don't mind?"
		age = gets.chomp
		client = Client.new(name, children, age)
		puts "Welcome #{name}!"
		$shelter['clients'] << client
	end	

	#listing clients
	if user_input == '1'
		puts "Happitails current clients are:" 
		listing_clients
	end

	#listing animals
	if user_input == '2'
		puts "Current Happitails animals are:"
		listing_animals
	end

	#add animal to shelter

	#I got very stuck on this bit, 5 and 6 :( 
	if user_input == '5'
		puts "You are adopting an animal! Who would you like to adopt? (type name)"
		listing_animals
		chosen_animal = gets.chomp
		puts "What is the client name?"
		listing_clients
		client_name = gets.chomp
		puts chosen_animal
		puts client_name
		# current_pets(chosen_animal)
	end

	if user_input == '6'
		puts "What is the client name?"
	end

	# binding.pry

end







