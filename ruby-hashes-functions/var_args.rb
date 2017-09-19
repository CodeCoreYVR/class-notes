# args will be an array, it could be an empty array if we pass no arguments to
# the method
def multiply(*args)
  result = 1
  args.each {|arg| result *= arg }
  result
end

puts multiply 3
puts multiply 3, 4, 5, 6, 67, 7,123,8 ,8,8,88,8,8
puts multiply
