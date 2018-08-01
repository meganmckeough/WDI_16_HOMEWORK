//put everything in a function!?
//you can also call an anon function right away  - iife - reduce glboal - do this for library

// ES6 syntax

// searchBtn = document.querySelector('.submit')
// searchOptions = document.querySelector('.search')
// reloadBtn = document.querySelector('.reload')

//reduce globals
var app = {
  searchBtn: document.querySelector('.submit'),
  searchOptions: document.querySelector('.search'),
  reloadBtn: document.querySelector('.reload')
}

//put funct before you use it, show where the program starts
//house everything together inside a function

// defining the callback function that will happen
// if the request succeeds.
//call back has a signature, it will pass in a response but you have to store it
//check the JSON on the url page to see hierarchy

function showContent(movieDetails) {
    app.searchOptions.classList.add('hide')
    listOfMovies = movieDetails["Search"] // can also use .Search
    console.log(listOfMovies)
    for (i = 0; i < listOfMovies.length; i++) { //could also use a forEach loop
      var movieItem = document.createElement("p") // this could be a const
      var movieLink = document.createElement("a")
      movieLink.textContent = listOfMovies[i].Title   
      movieLink.href = `https://www.imdb.com/title/${listOfMovies[i].imdbID}` 
      movieLink.target = "_blank"
      movieItem.appendChild(movieLink)                                    
      document.querySelector('.results').appendChild(movieItem);  

    }
    app.reloadBtn.classList.remove('hide')
};

function searchMovies(event) {
    event.preventDefault();
    searchInput = document.querySelector('input').value

    $.ajax({  // look up different methods in jQuery documentation
    // What kind of request
    method: 'GET', // this is the default, not necessary

    // The URL for the request
    url: `http://www.omdbapi.com/?s=${searchInput}&apikey=2f6435d9`,

    // The type of data we want back
    dataType: 'json', //this is important, so jQuery knows what it is // can find this in Network in dev tools 
    
    // Code to run if the request succeeds; the JSON
    // response is passed to the function as an argument.
    }).done(showContent);
}

app.searchBtn.addEventListener('click', searchMovies)
app.reloadBtn.addEventListener('click', function(){
  location.reload();
})

// you can use select event listener
// use const for things that won't change

// const options = {  // look up different methods in jQuery documentation
//     // What kind of request
//     method: 'GET', // this is the default, not necessary

//     // The URL for the request
//     url: 'http://www.omdbapi.com/?s=' + searchInput + '&apikey=2f6435d9',

//     // The type of data we want back
//     dataType: 'json',
    
//     // Code to run if the request succeeds; the JSON
//     // response is passed to the function as an argument.
//     }

// and then put this inside brackets after ajax
// reduce globals as much as you can

// console.table

//NEW WAY TO WRITE FUNCTION
// var sayHello = name => console.log('hi' + name)  //can do this for one argument
// //on one line, don't need curly braces, just => 

// var increment = function(num) {
//   return num + 1
// }

// argument before => then what you are doing
// var increment = num => {
//   num + 1 // if it's one line, implicit return
// }

// var increment = num => num + 1 // if it's one line, implicit return