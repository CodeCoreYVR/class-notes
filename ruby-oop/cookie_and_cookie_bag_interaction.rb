require './cookie.rb'
require './cookie_bag.rb'

cb = CookieBag.new

c1 = Cookie.new 5, 6
c2 = Cookie.new 5, 7
c3 = Cookie.new 7, 8
c4 = Cookie.new 9, 10

cb.add c1
cb.add c2
cb.add c3
cb.add c4

cb.details

cb.take
cb.take
cb.take
cb.take
