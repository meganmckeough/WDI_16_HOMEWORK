require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote'

#localhost:4567/

get '/' do
	erb(:index)
end

get '/stock' do
	@stock_input = params['stock']
	@stock_list = StockQuote::Stock.quote(@stock_input)
	@current_price = @stock_list.latest_price
	@company_name = @stock_list.company_name
	@previous_close = @stock_list.previous_close
	
	@time = Time.now
	erb(:stock)
end

get '/about' do 
	erb(:about)
end



