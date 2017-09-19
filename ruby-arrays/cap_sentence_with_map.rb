puts 'enter a sentence'

sentence = gets.chomp.split

cap_sentence = (sentence.map {|x| x.capitalize }).join(' ')

puts cap_sentence

# consice solution:
# puts gets.chomp.split.map {|x| x.capitalize }.join(' ')
