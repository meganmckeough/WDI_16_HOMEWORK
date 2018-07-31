
searchBtn = document.querySelector('.submit')
searchOptions = document.querySelector('.search')
reloadBtn = document.querySelector('.reload')

// defining the callback function that will happen
// if the request succeeds.
function showContent(movieDetails) {
    searchOptions.classList.add('hide')
    listOfMovies = movieDetails["Search"]
    console.log(listOfMovies)
    for (i = 0; i < listOfMovies.length; i++) {
      var movieItem = document.createElement("p")
      var movieLink = document.createElement("a")
      movieLink.textContent = listOfMovies[i].Title   
      movieLink.href = 'https://www.imdb.com/title/' + listOfMovies[i].imdbID 
      movieLink.target = "_blank"
      movieItem.appendChild(movieLink)                                    
      document.querySelector('.results').appendChild(movieItem);  

    }
    reloadBtn.classList.remove('hide')
};

function searchMovies(event) {
    event.preventDefault();
    searchInput = document.querySelector('input').value

    $.ajax({
    // What kind of request
    method: 'GET',

    // The URL for the request
    url: 'http://www.omdbapi.com/?s=' + searchInput + '&apikey=2f6435d9',

    // The type of data we want back
    dataType: 'json',
    
    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    }).done(showContent);
}

searchBtn.addEventListener('click', searchMovies)
reloadBtn.addEventListener('click', function(){
  location.reload();
})
