my_array = [[1,2,3], [4,5,6], [7,8,9]]

# Solution 1
my_array.each do |x|
  x.each do |y|
    puts y * y
  end
end


# Solution 2
my_array.flatten.each do |x|
  puts x * x
end
