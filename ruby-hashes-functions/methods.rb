def multiply(a, b)
  a * b
end

puts multiply(5, 6)
puts multiply 6, 7

def sum(a, b = 0)
  a + b
end

puts sum(5, 6)
puts sum 6, 7
puts sum 5

def greeting(name = nil)
  return 'Please provide a name' if name.nil?
  "Hello #{name.capitlize}"
end
