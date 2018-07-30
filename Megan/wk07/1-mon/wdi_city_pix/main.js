citiesToAdd = ["NYC", "SF", "LA", "SYD", "ATX"]
classesToAdd = ["nyc", "sf", "la", "sydney", "austin"]

function addCities () {
	for (i=0;i<citiesToAdd.length;i++) {
		var newItem = document.createElement("option");       
		newItem.textContent = citiesToAdd[i]
		// newItem.classList.add(classesToAdd[i])                                         
		document.querySelector('select').appendChild(newItem);
	}
}

addCities();

var cityDropDown = document.querySelector('#city-type');
var body = document.querySelector('body')

cityDropDown.addEventListener('change', function(event) {
	body.className = ""
	for (i=0;i<classesToAdd.length;i++) {
		if (event.target.value === citiesToAdd[i]) {
			body.className = ""
			body.classList.add(classesToAdd[i])
		} else {
			console.log("whoops")
		}
	}
})


// cityDropDown.addEventListener('change', function(event) {
// 	if (event.target.value === "NYC") {
// 		body.className = ""
// 		body.classList.add('nyc')
// 	} else if (event.target.value === "SF") {
// 		body.className = ""
// 		body.classList.add('sf');
// 	} else if (event.target.value === "LA") {
// 		body.className = ""
// 		body.classList.add('la');
// 	} else if (event.target.value === "ATX") {
// 		body.className = ""
// 		body.classList.add('austin');
// 	} else if (event.target.value === "SYD") {
// 		body.className = ""
// 		body.classList.add('sydney');
// 	} else {
// 		console.log("whoops")
// 	}
// })





// .nyc {
//   background-image: url(../images/nyc.jpg)
// }
// .sf {
//   background-image: url(../images/sf.jpg)
// }
// .la {
//   background-image: url(../images/la.jpg)
// }
// .austin {
//   background-image: url(../images/austin.jpg)
// }
// .sydney {
//   background-image: url(../images/sydney.jpg)
// }