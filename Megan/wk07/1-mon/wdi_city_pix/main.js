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


