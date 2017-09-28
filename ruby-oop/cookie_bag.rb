class CookieBag
  MAX_CAPACITY = 3

  def initialize
    @cookies = []
  end

  def add(cookie)
    if @cookies.count >= MAX_CAPACITY
      puts 'Bag is full'
    else
      @cookies << cookie
    end
  end

  def take
    if @cookies.count == 0
      puts 'Bag is empty'
    else
      @cookies.pop
    end
  end

  def details
    @cookies.each do |cookie|
      cookie.details
    end
  end


end
