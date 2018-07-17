require 'pry'    
require 'sinatra'
require 'HTTParty'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/about' do
	erb :about
end


get '/movie_list' do
	@movie_input = params['movie_list']
	@grabbed_movies = HTTParty.get("http://www.omdbapi.com/?s=#{@movie_input}&apikey=2f6435d9")
	@movie_list = @grabbed_movies.parsed_response
	@movies_to_show = @movie_list["Search"]
	erb :movie_list
end

get '/:movie' do
	@movie_input = params[:movie]
	@movie_result = HTTParty.get("http://www.omdbapi.com/?t=#{@movie_input}&apikey=2f6435d9")
	@movie_result = @movie_result.parsed_response
	@movie_title = @movie_result["Title"]
	@director = @movie_result["Director"]
	@genre = @movie_result["Genre"]
	@poster = @movie_result["Poster"]
	@year = @movie_result["Year"]
	@plot = @movie_result["Plot"]
	erb :movie
end





