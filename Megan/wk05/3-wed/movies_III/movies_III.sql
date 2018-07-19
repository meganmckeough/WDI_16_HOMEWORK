CREATE DATABASE omdb;  

CREATE TABLE movies (
	id SERIAL4 PRIMARY KEY, 
	title VARCHAR(400), 
	director VARCHAR(400),
	genre VARCHAR(100),
	poster VARCHAR(400),
	year VARCHAR(100),
	plot TEXT
);

INSERT INTO movies (title, director, genre, poster, year, plot) VALUES ('Jaws', 'BLah', 'blah', 'blah', 'blah', 'plot');

ALTER TABLE movies RENAME COLUMN "Title" TO "title";
ALTER TABLE movies RENAME COLUMN "Director" TO "director"
ALTER TABLE movies RENAME COLUMN "Genre" TO "genre";
ALTER TABLE movies RENAME COLUMN "Poster" TO "poster";
ALTER TABLE movies RENAME COLUMN "Year" TO "year";
ALTER TABLE movies RENAME COLUMN "Plot" TO "plot";
