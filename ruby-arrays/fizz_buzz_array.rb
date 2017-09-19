result = []

for i in 1..100
  if i % 3 == 0 && i % 5 == 0
    result << "FIZZBUZZ"
  elsif i % 3 == 0
    result << 'FIZZ'
  elsif i % 5 == 0
    result << 'BUZZ'
  else
    result << i
  end
end

puts result
