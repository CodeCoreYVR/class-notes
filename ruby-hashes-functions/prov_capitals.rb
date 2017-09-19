hash = { 'BC' => 'Victoria', 'AB' => 'Edmonton', 'SK' => 'Regina' }

hash.each do |prov, capital|
  puts "The province is #{prov} and the capital is #{capital}"
end

hash.each_key do |k|
  puts k
end

hash.each_key { |k| puts k }
