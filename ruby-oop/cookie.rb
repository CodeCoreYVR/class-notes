# to define a class in Ruby we use the reserved `class` keyword and then we
# give the class name. The class name must be a constant, meaning that it must
# start with a capital letter.
class Cookie

  def initialize(sugar_amount, butter_amount)
    @sugar = sugar_amount
    @butter = butter_amount
    puts 'about to create a Cookie object'
  end

  attr_reader :sugar # the name here has to match the name of the instance
                     # variable
  # is the same as doing:
  # def sugar
  #   @sugar
  # end
  attr_reader :butter

  # def change_sugar(new_amount)
  #   @sugar = new_amount
  # end

  # the `=` after the method name enables us to call the method name with `=`
  # after it with an argument as in:
  # c = Cookie.new 10, 15
  # c.sugar = 20
  # def sugar=(new_amount)
  #   @sugar = new_amount
  # end
  # the line below 👇 is equivalent to the line above
  attr_writer :sugar
  attr_writer :butter

  attr_accessor :flavour
  # is equivalent to:
  # attr_reader :flavour
  # attr_writer :flavour
  # def flavour
  #   @flavour
  # end
  # def flavour=(new_value)
  #   @flavour = new_value
  # end


  def details
    puts "This cookie has #{@sugar}g of sugar and #{@butter}g of butter with #{flavour} flavour"
  end

  # this defines an instance (or object) method called `bake` that can be called
  # on any instance (or object) of the Cookie class.
  # You can also call the method from within the class itself as in bake_n_eat
  # this is defined as a public method which means that you can call it outside
  def bake
    # this defines an instance variable called `bake_time` that is available in
    # any instance method (public or private) within this class. Each object (
    # instance) will have its own set of instance varibles.
    # instance variables are always initialized to `nil` so calling an instance
    # variable will never give you `undefined local variable` error
    @bake_time = rand(100)
    "Baking the cookie for #{@bake_time} minutes"
  end

  def bake_n_eat
    puts @bake_time
    puts bake
    puts eat
  end

  def self.info # can also do: def Cookie.info
    puts 'I\'m the Cookie class'
  end

  private

  # the eat method here is a private method meaning that only other instance
  # methods (public or private) can call this private method, but you can't
  # call it directly from outside the class (such as pry / other classes or
  # files)
  def eat
    'Eating the Cookie'
  end

end
