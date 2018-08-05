var gifSearchForm = $('.gif-search')
var resultsSection = $('.results')
var offset = 0

function changeSearchBar() {
	$('.reset-button').removeClass('hide')
	$('.search-button').addClass('hide')
	$('input').addClass('hide')

	let gifToFind = $('input').val()
	let nowShowing = document.createElement("p")
	nowShowing.textContent = `Now showing results for ${gifToFind}`
	$('.search').append(nowShowing)
}

function findGifs (event) {
	event.preventDefault()
	let gifToFind = $('input').val()
 
	let options = {
      method: 'GET', 
      url: `http://api.giphy.com/v1/gifs/search?q=${gifToFind}&api_key=cyP752rRWWXCcFdQwxYv0TXjFFA4tOfD&offset=0&limit=10")`,
    }

    $.ajax(options).done(showResults);
    changeSearchBar()
}

function findMoreGifs () {
	offset = offset + 10
	let gifToFind = $('input').val()

	let options = {
      method: 'GET', 
      url: `http://api.giphy.com/v1/gifs/search?q=${gifToFind}&api_key=cyP752rRWWXCcFdQwxYv0TXjFFA4tOfD&offset=${offset}&limit=10")`,
    }

    $.ajax(options).done(showResults);
}

function showResults(data) {
	console.log(data)
	let results = data["data"]
	results.forEach(function (gif) {
		// let gifLink = document.createElement("a")
		let gifImage = document.createElement("img") 
		// gifLink.href = gif.url
		gifImage.src = gif.images.fixed_height_downsampled.url
		// gifLink.append(gifImage)
		$(".results").append(gifImage)
	})
}

function scrollTopReset (event) {
	event.preventDefault()
	window.scrollTo(0, 0);
}

gifSearchForm.submit(findGifs)
$('.top').click(scrollTopReset)
$('.reset-button').click(function() {
	location.reload()
})
$(window).on('scroll', function () {
	var scrollHeight = $(document).height()
  	var scrollPosition = $(window).height() + $(window).scrollTop()
  	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  		findMoreGifs()
  	}
 })

  






    