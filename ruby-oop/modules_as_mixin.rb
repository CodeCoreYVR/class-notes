# naming conventions and rule are the same for modules and classes
# key difference is that you can't make objects from modules
module HelperMethods
  def name_display
    name.squeeze(' ').capitalize
  end
end

class User
  attr_accessor :name
  include HelperMethods
end

class Car
  attr_accessor :name
  include HelperMethods
end
