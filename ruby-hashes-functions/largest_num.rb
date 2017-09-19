def largest_num(*args)
  largest = args[0]
  args.each {|arg| largest = arg if arg > largest }
  largest
end

puts largest_num 1
puts largest_num 1, 5, 23, 6, 3
puts largest_num 5, 6
puts largest_num

def largest_num(*args)
  args.max
end

puts largest_num 1
puts largest_num 1, 5, 23, 6, 3
puts largest_num 5, 6
puts largest_num
