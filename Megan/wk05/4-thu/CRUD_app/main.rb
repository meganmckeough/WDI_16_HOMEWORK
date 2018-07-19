require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/book'

get '/' do
	@books = Book.all
 	erb :index
end

get '/books/new' do
	erb :new
end

post '/books' do
	# sql = "INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
	# run_sql(sql)
	book = Book.new
	book.title = params[:title]
	book.author = params[:author]
	book.genre = params[:genre]
	book.image_url = params[:image_url]
	book.rating = params[:rating]
	book.save
	redirect '/'
end

get '/books/:id' do
	@book = Book.find(params[:id])
	erb :book_details
end

get 'books/:id/edit' do
	@book = Book.find(params[:id])
	erb :edit
end

put '/books/:id' do
	book = Book.find(params[:id])
	book.title = params[:name]
	book.author = params[:author]
	book.genre = params[:genre]
	book.image_url = params[:image_url]
	book.rating = params[:rating]
	book.save
	redirect "/books/#{ params[:id] }"
end
