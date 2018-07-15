class Client

	def initialize (name = '', children = 0, age = 0)
		@name = name
		@children = children
		@age = age
		@pets = []
	end

	def add_pets(pet)
		@pets << pet 
	end

	def client_name()
		return @name
	end

end

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a list of pets.
