//Attempting to make it work regardless of direction (not just working one linear way)

//I gave up on this. I want to:
// 1. check whether the origin is before Richmond
// 2. check whether the destination is after Richmond
// 3. Run it to see whether it falls into one of these four categories for type of trip:
	// into & into
	// into & out of
	// out of and out of
	// out of and into
// 4. Then generate 4 functions that run it accordingly the show the correct station order based on direction.


//hardcodes for testing
var origin = "Flagstaff";
var destination = "Parliament";

//empty array to push station names for printing
var myJourney = [];


var intoRichmond = ["Flinders Street", "Southern Cross", "Flagstaff", "Melbourne Central", "Parliament"];
var outOfRichmond = ["Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie", "Kooyong", "Tooronga", "South Yarra", "Prahran", "Windsor"];

function findDirection () {
	for (i = 0; i < 40; i++) {
		if (origin == intoRichmond[i]) {
			console.log("into richmond");
		}
	}
}

findDirection();


// 	} else if (origin == outOfRichmond[i] && destination == outOfRichmond[i]) {
// 		console.log("2");
// 	} else if (origin == intoRichmond[i] && destination == outOfRichmond[i]) {
// 		console.log("3");
// 	} else if (origin == outOfRichmond[i] && destination == intoRichmond[i]) {
// 		console.log("4");
// 	}
// }


// 	function checkLeaveDirection () {
// 		for (i = 0; i < outOfRichmond.length; i++) {
// 			if (destination == outOfRichmond[i]) {
// 				var endAfterRichmond = true;
// 			} else {
// 				var endBeforeRichmond = true;
// 			}
// 		}
// 	}
	
// 	function findStations () {
// 		if (startBeforeRichmond === endBeforeRichmond) {
// 			console.log("option 1");
// 		} else if (startBeforeRichmond === endAfterRichmond) {
// 			console.log("option 2");
// 		} else if (startAfterRichmond === endAfterRichmond) {
// 			console.log("option 3");
// 		} else {
// 			console.log("option 4");
// 		}
// 	}

// 	findStations();
// }




// Code from previous version which works in one direction

// var alameinBeforeRichmond = ["Flinders Street"];
// var alameinAfterRichmond = ["Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
// var glenWaverleyBeforeRichmond = ["Flagstaff", "Melbourne Central", "Parliament"];
// var glenWaverleyAfterRichmond = ["Richmond", "Kooyong", "Tooronga"];
// var sandringhamBeforeRichmond = ["Southern Cross"];
// var sandringhamAfterRichmond = ["Richmond", "South Yarra", "Prahran", "Windsor"];

// function checkAlamein1 () {
// 	for (i = 0; i < alameinBeforeRichmond.length; i++) {
// 		if (origin == alameinBeforeRichmond[i]) {
// 			for (j = i; j < alameinBeforeRichmond.length; j++) {
// 				myJourney.push(alameinBeforeRichmond[j]);
// 			}
// 		} 
// 	}
// }

// function checkglenWaverley1 () {
// 	for (i = 0; i < glenWaverleyBeforeRichmond.length; i++) {
// 		if (origin == glenWaverleyBeforeRichmond[i]) {
// 			for (j = i; j < glenWaverleyBeforeRichmond.length; j++) {
// 				myJourney.push(glenWaverleyBeforeRichmond[j]);
// 			}
// 		}
// 	}
// }

// function checkSandringham1 () {
// 	for (i = 0; i < sandringhamBeforeRichmond.length; i++) {
// 		if (origin == sandringhamBeforeRichmond[i]) {
// 			for (j = i; j < sandringhamBeforeRichmond.length; j++) {
// 				myJourney.push(sandringhamBeforeRichmond[j]);
// 			}
// 		}
// 	}
// }

// //realised I needed to separate into two half functions (before Richmond, and after) so it would search all stations and print in order
// function findFirstJourney () {
// 	checkAlamein1();
// 	checkglenWaverley1();
// 	checkSandringham1();
// }


// function checkAlamein2 () {
// 	for (i = 0; i < alameinAfterRichmond.length; i++) {
// 		if (destination == alameinAfterRichmond[i]) {
// 			for (j = 0; j < i + 1; j++) {
// 				myJourney.push(alameinAfterRichmond[j]);
// 			}
// 		}
// 	}
// }

// function checkGlenWaverley2 () {
// 	for (i = 0; i < glenWaverleyAfterRichmond.length; i++) {
// 		if (destination == glenWaverleyAfterRichmond[i]) {
// 			for (j = 0; j < i + 1; j++) {
// 				myJourney.push(glenWaverleyAfterRichmond[j]);
// 			}
// 		}
// 	}
// }

// function checkSandringham2 () {
// 	for (i = 0; i < sandringhamAfterRichmond.length; i++) {
// 		if (destination == sandringhamAfterRichmond[i]) {
// 			for (j = 0; j < i + 1; j++) {
// 				myJourney.push(sandringhamAfterRichmond[j]);
// 			}
// 		}
// 	}
// }

// function findSecondJourney () {
// 	checkAlamein2();
// 	checkGlenWaverley2();
// 	checkSandringham2();
// }

// findFirstJourney();
// findSecondJourney();

// // print final journey to console log
// console.log(myJourney);


