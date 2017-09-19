my_array = (1..10).to_a

my_array.each do |num|
  y = num * 5
  puts y
  puts num
end

my_array.each {|num| puts num }
