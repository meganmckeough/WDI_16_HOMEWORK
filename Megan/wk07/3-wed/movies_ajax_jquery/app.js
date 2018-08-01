var searchBtn = $('.submit')
var searchOptions = $('.search')
var reloadBtn = $('.reload')

function showContent(movieDetails) {
    searchOptions.addClass('hide')
    listOfMovies = movieDetails["Search"] // can also use .Search
    console.log(listOfMovies)
    for (i = 0; i < listOfMovies.length; i++) { //could also use a forEach loop
      var movieItem = document.createElement("p") // this could be a const
      var movieLink = document.createElement("a")
      movieLink.text = listOfMovies[i].Title   
      movieLink.href = `https://www.imdb.com/title/${listOfMovies[i].imdbID}` 
      movieLink.target = "_blank"
      movieItem.append(movieLink)                                    
      $('.results').append(movieItem);  

    }
    reloadBtn.removeClass('hide')
};

function searchMovies(event) {
    event.preventDefault();
    searchInput = $('input').val()

    let options = {
      method: 'GET', 
      url: `http://www.omdbapi.com/?s=${searchInput}&apikey=2f6435d9`,
      dataType: 'json',
    }

    $.ajax(options).done(showContent);
}

searchBtn.click(searchMovies)
reloadBtn.click(function(){
  location.reload();
})

