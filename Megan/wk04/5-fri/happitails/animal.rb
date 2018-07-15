class Animal
	def initialize (name = '', age = 0, gender = '', species = '')
		@name = name
		@age = age
		@gender = gender
		@species = species
		@toys = []
	end

	def adding_toys (toy)
		@toys << toy
	end

	def animal_name()
		return @name
	end

end


