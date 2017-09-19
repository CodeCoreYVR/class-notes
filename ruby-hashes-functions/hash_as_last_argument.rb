def my_method(hash)
  hash.keys.count
end

puts my_method({ a: 1, b: 2, c: 3 })
puts my_method a: 1, b: 2, c: 3

def my_method(a, b, hash)
  puts a
  puts b
  hash.keys.count
end

puts my_method(3, 4, { a: 1, b: 2, c: 3 })
puts my_method 3, 4, a: 1, b: 2, c: 3
