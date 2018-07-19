require 'pry'    
require 'sinatra'
require 'HTTParty'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql)
	conn = PG.connect(dbname: 'omdb')
	movie = conn.exec(sql)
	conn.close
	return movie
end

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
	check_sql = "SELECT * FROM movies WHERE title = '#{ @movie_input }';"
	@result = run_sql(check_sql)
	if @result.count == 1
		@movie_result = @result.first 
	elsif @result.count == 0 
		@movie_result = HTTParty.get("http://www.omdbapi.com/?t=#{@movie_input}&apikey=2f6435d9")
		@movie_result = @movie_result.parsed_response
		add_sql = "INSERT INTO movies (title, director, genre, poster, year, plot) VALUES ('#{ @movie_result['Title'] }', '#{ @movie_result['Director'] }', '#{ @movie_result['Genre'] }', '#{ @movie_result['Poster'] }', '#{ @movie_result['Year'] }', '#{ @movie_result['Plot'] }');"
		run_sql(add_sql)
	end
	erb :movie
end






