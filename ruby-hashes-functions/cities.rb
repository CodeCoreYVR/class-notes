hash = { 'BC' => ['Vancouver', 'Richmond'],  'AB' => ['Edmonton', 'Calgary'] }

hash.each do |prov, cities|
  # city_list = cities.join(', ')
  puts "#{prov}: #{cities.join(', ')}"
end
