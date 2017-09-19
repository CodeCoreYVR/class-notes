capitalized_sentence = []

puts 'Enter a sentence'
sentence = gets.chomp

uncapitalized_sentence = sentence.split

uncapitalized_sentence.each do |word|
  capitalized_sentence << word.capitalize
end

print capitalized_sentence.join(' ')
