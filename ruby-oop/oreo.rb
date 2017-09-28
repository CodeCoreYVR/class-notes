# this loads the `cookie.rb` file in memory and consquently loads the Cookie
# class in memory so we can use it here. Unlike the `load` method, using require
# will not load the class `Cookie.rb` if it's already loaded
require './cookie.rb'

# Ruby classes inherit form one class only, you can specify the name of the
# class to inherit from after the `<` symbol. If you don't specify a class to
# inherit from, then you will inherit from the `Object` class automatically.
# by inherting from a class you inhert all methods (public, private and class)
# you can change them if you want and you can add new ones too.
# in this case we call Oreo: child class or subclass
#              we call Cookie: parent class or superclass
class Oreo < Cookie
  attr_accessor :filling

  def initialize(sugar, butter, filling)
    super(sugar, butter)
    @filling = filling
  end

  # this overwrites the method that gets inherited from the Cookie class
  def details
    super # this calls the method `details` in the parent class
    puts "The filling is #{filling}"
  end

  def dip_in_milk
    puts 'Dipping Oreo cookie in milk'
  end

end
