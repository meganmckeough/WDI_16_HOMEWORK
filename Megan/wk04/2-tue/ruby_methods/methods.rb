require 'pry'

#Round 1
# words = ["hello", "what", "is", "up", "dude"]

# def lengths(array)
# 	length_array = []
# 	array.each do |word|
# 		length_of_word = word.length
# 		length_array.push(length_of_word) 
# 	end
# 	p length_array
# end

# lengths(words)  

#Round 2
# def transmogrifier(num1,num2,num3)
# 	result = (num1 * num2) ** num3
# 	puts result
# end

# transmogrifier(5,3,2)
# transmogrifier(5, 4, 3)
# transmogrifier(13, 12, 5)
# transmogrifier(42, 13, 7)

# 225
# 8000
# 92389579776
# 14466001271480793216

#Round 3
# def toonify(accent, sentence)
# 	if accent == 'daffy'
# 		toonified = sentence.gsub('s', 'th')
# 	elsif accent == 'elmer'
# 		toonified = sentence.gsub('r', 'w')
# 	else 
# 		puts sentence
# 	end
# 	puts toonified
# end

# toonify('elmer', 'really ridiculous dog')
# toonify('daffy', 'so you smell like sausage')
# toonify('bugs', 'hello there')

#Round 4
# def word_reverse(words)
# 	reversed = words.split(' ').reverse.join(' ')
# 	puts reversed
# end

# word_reverse('Hi there I bought a new car')

#Round 5
# split into words
# reverse each word
# rejoin words

# def letter_reverse(str)
# 	word_array = str.split
# 	new_str = ''
# 	word_array.each do |word|
# 		rev_word = word.reverse
# 		new_str += "#{rev_word} "
# 	end
# 	puts new_str
# end

# letter_reverse('Now I know what TV dinners are like')

#Round 6

def longest(arr) 
	arr_of_lengths = []
	arr.each do |word|
		length_word = word.length
		arr_of_lengths.push(length_word)
	end
	longest_word_length = arr_of_lengths.sort.pop
	arr.each do |word|
		if longest_word_length == word.length
			puts word
		end
	end
end

longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"

# binding.pry