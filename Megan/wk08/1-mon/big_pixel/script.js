var body = document.querySelector('body')
var setColorForm = document.querySelector('.color')

function setSample() {
	event.preventDefault()
	color = $('.color-input').val()
	$('.brush-box').css('background-color', `${color}`)
}

function setColor(event) {
	color = $('.color-input').val()
	$(event.target).css("background-color", `${color}`)
}

function createSquares() {
	for (i = 0; i < 1000; i++) {
		var square = document.createElement("div")
		square.classList.add('square')
		square.addEventListener('mouseover', setColor)
		body.appendChild(square)
	}
}

createSquares()

setColorForm.addEventListener('submit', setSample)

function showContent(movieDetails) {
	listOfMovies = movieDetails["Search"] // can also use .Search
  	// debugger
  	body.style = `background-image: url('${listOfMovies[0].Poster}')`
}

function searchMovies(event) {
    event.preventDefault();
    searchInput = $('.movie-input').val()

    let options = {
      method: 'GET', 
      url: `http://www.omdbapi.com/?s=${searchInput}&apikey=2f6435d9`,
      dataType: 'json',
    }

    $.ajax(options).done(showContent);
}

$('.omdb').submit(searchMovies)