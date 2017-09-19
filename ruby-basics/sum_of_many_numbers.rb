sum = 0

loop do
  print 'Enter a number: '
  input = gets.chomp
  if input == 'exit'
    break
  else
    sum += input.to_i
  end
end

puts sum
