require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
	@number_bottles_page = 99
	@number_bottles_link = 99 - 1
	erb(:index)
end

get '/:number_bottles' do
	@number_bottles_page = params[:number_bottles].to_i
	@number_bottles_link = params[:number_bottles].to_i - 1
	erb(:index)
end

# get '/0' do
# 	erb(:index)
# end


# get '/hello/:name' do
#   # matches "GET /hello/foo" and "GET /hello/bar"
#   # params[:name] is 'foo' or 'bar'
#   "Hello #{params[:name]}!"
# end