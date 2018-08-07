class ColoursController < ApplicationController

	def index
		@colours = Colour.all
	end

	def create 
		@colour = Colour.new
		@colour.hexcode = params[:hexcode]
		@colour.img_url = params[:img_url]
		if @colour.save
			redirect_to '/colours'
		else
			render :index
		end
	end

	def destroy 
		@colour = Colour.find( params[:id])
		if @colour.destroy
			redirect_to '/colours'
		else
			render :show
		end
	end

	def show
		@colour = Colour.find( params[:id] )
		render :show
	end

	def edit 
		@colour = Colour.find( params[:id] )
		render :edit
	end

	def update
		@colour = Colour.find( params[:id] )
		@colour.hexcode = params[:hexcode]
		@colour.img_url = params[:img_url]
		if @colour.save 
			redirect_to '/colours'
		else
			render :edit
		end
	end

end
