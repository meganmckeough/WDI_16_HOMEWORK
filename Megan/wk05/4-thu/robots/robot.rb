class Robot
	def create_id_no
		letters = ("A".."Z").to_a
		numbers = (1..9).to_a

		letter_rand = Array.new(3) do 
			letters.sample
		end

		number_rand = Array.new(3) do 
			numbers.sample
		end

		@id_no = [letter_rand, number_rand].flatten.join
	end

	def initialize
		create_id_no
		@mac_address = [rand(1..9), rand(1..9), rand(1..9)].join
	end

	def name 
		@id_no		
	end

	def reset 
		create_id_no
	end

	def mac_add 
		@mac_address
	end
end

# binding.pry

