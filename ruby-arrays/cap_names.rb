names = ['james', 'steve', 'tam', 'john', 'asia']
capitalized_names = []

names.each do |name|
  puts name.capitalize
  capitalized_names << name.capitalize
end

print names
print capitalized_names
