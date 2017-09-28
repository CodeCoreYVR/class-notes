class Car
  def initailize(model, type, capacity)
    @model, @type, @capacity = model, type, capacity
  end

  def self.max_speed
    200
  end

  def drive
    ignite_engine
    puts 'Car is driving'
  end

  def stop
    puts 'Car stopped!'
  end

  def park
    puts 'Parking car..'
  end

  private

  def pump_gas
    puts 'pumping gas'
  end

  def ignite_engine
    puts 'starting the car'
  end
end
