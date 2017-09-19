puts 'Please enter your score'
number = gets.to_i

if number > 85
  puts 'your score is A'
elsif number > 70
  puts 'your score is B'
elsif number > 60
  puts 'your score is C'
elsif number > 50
  puts 'your score id D'
else
  puts 'you got F'
end
