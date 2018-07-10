require 'pry'

# A
# a = ["Anil", "Erik", "Jonathan"]

# #return Erik
# a[1]

# #push name
# a.push("Megan")

#B
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# #return one
# # puts h[1]

# #return two
# # puts h[:two]

# #return 2
# # puts h["two"]

# #add
# h[3] = "Three"

# #add
# h[:four] = 4

#C

# is = {true => "It's true!", false => "It's false"}

# 1. "It's true!"
# 2. "It's false"
# 3. "It's false"
# 4. "It's true!" --> nil
# 5. nil

#D

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

#1. 
# puts users["Jonathan"][:twitter]

#2
# users["Erik"][:favorite_numbers].push(7)

#3
users["Megan"] = {
	:twitter => "megatron",
	:favorite_numbers => [7, 13, 12],
}

#4
users["Erik"][:favorite_numbers]

#5 
users["Erik"][:favorite_numbers].sort.first

#6
# users["Anil"][:favorite_numbers].each { |number| puts number if number.even? }

#7
common = users["Erik"][:favorite_numbers] & users["Jonathan"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Megan"][:favorite_numbers]

#8 How would you return an array containing all users' favorite numbers, 
# sorted, and excluding duplicates?

all_numbers_array = []

all_numbers_array.push(users["Erik"][:favorite_numbers]).push(users["Jonathan"][:favorite_numbers]).push(users["Anil"][:favorite_numbers]).push(users["Megan"][:favorite_numbers])
clean_numbers = all_numbers_array.flatten.sort.uniq


#trying to make this automtatic not hardcoded
# users.each do |person| 
# 	users[person][:favorite_numbers].map {|item| all_numbers.push(item) }
# end

p clean_numbers
# binding.pry
