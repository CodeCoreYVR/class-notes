names = []

loop do
  name = gets.chomp
  break if name == 'exit'
  names << name.capitalize
end

print names
