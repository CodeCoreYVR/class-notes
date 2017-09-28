class Rectangle
  def initialize(width, height)
    @width = width
    @height = height
  end

  attr_accessor :width, :height

  def area
    width * height
  end

  def is_square?
    width == height
  end

end
