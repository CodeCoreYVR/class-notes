puts 'Give me a number: '
number = gets.to_i

# if number > 1000
#   puts 'The number is huge'
# elsif number > 100
#   puts 'The number is large'
# elsif number > 10
#   puts 'The number is medium'
# else
#   puts 'The number is small'
# end


output = if number > 1000
           'The number is huge'
         elsif number > 100
           'The number is large'
         elsif number > 10
           'The number is medium'
         else
           'The number is small'
         end

puts output
