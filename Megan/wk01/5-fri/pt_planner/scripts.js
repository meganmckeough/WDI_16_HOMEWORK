// This isn't how I wanted to do it and I know this isn't the shortest, cleanest or most scaleable way to do it!
// But I got it sort of working this way.
//BIG ISSUE - only works when going from CITY LOOP out. Not INTO CITY, or in to RICHMOND then back OUT. 

//hardcodes for testing
var origin = "Burnley";
var destination = "Tooronga";

//empty array to push station names for printing
var myJourney = [];

// I wanted to neaten things up but couldnt figure out how to parse arrays in arrays?
// var stationsBeforeRichmond = [alameinBeforeRichmond];
// var stationsAfterRichmond = [alameinAfterRichmond];

var alameinBeforeRichmond = ["Flinders Street"];
var alameinAfterRichmond = ["Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"];
var glenWaverleyBeforeRichmond = ["Flagstaff", "Melbourne Central", "Parliament"];
var glenWaverleyAfterRichmond = ["Richmond", "Kooyong", "Tooronga"];
var sandringhamBeforeRichmond = ["Southern Cross"];
var sandringhamAfterRichmond = ["Richmond", "South Yarra", "Prahran", "Windsor"];

function checkAlamein1 () {
	for (i = 0; i < alameinBeforeRichmond.length; i++) {
		if (origin == alameinBeforeRichmond[i]) {
			for (j = i; j < alameinBeforeRichmond.length; j++) {
				myJourney.push(alameinBeforeRichmond[j]);
			}
		} 
	}
}

function checkglenWaverley1 () {
	for (i = 0; i < glenWaverleyBeforeRichmond.length; i++) {
		if (origin == glenWaverleyBeforeRichmond[i]) {
			for (j = i; j < glenWaverleyBeforeRichmond.length; j++) {
				myJourney.push(glenWaverleyBeforeRichmond[j]);
			}
		}
	}
}

function checkSandringham1 () {
	for (i = 0; i < sandringhamBeforeRichmond.length; i++) {
		if (origin == sandringhamBeforeRichmond[i]) {
			for (j = i; j < sandringhamBeforeRichmond.length; j++) {
				myJourney.push(sandringhamBeforeRichmond[j]);
			}
		}
	}
}

//realised I needed to separate into two half functions (before Richmond, and after) so it would search all stations and print in order
function findFirstJourney () {
	checkAlamein1();
	checkglenWaverley1();
	checkSandringham1();
}


function checkAlamein2 () {
	for (i = 0; i < alameinAfterRichmond.length; i++) {
		if (destination == alameinAfterRichmond[i]) {
			for (j = 0; j < i + 1; j++) {
				myJourney.push(alameinAfterRichmond[j]);
			}
		}
	}
}

function checkGlenWaverley2 () {
	for (i = 0; i < glenWaverleyAfterRichmond.length; i++) {
		if (destination == glenWaverleyAfterRichmond[i]) {
			for (j = 0; j < i + 1; j++) {
				myJourney.push(glenWaverleyAfterRichmond[j]);
			}
		}
	}
}

function checkSandringham2 () {
	for (i = 0; i < sandringhamAfterRichmond.length; i++) {
		if (destination == sandringhamAfterRichmond[i]) {
			for (j = 0; j < i + 1; j++) {
				myJourney.push(sandringhamAfterRichmond[j]);
			}
		}
	}
}

function findSecondJourney () {
	checkAlamein2();
	checkGlenWaverley2();
	checkSandringham2();
}

findFirstJourney();
findSecondJourney();

// print final journey to console log
console.log(myJourney);


//this is me trying to search for strings. Wwould be good to know how this is done?
// var position1 = (alameinBeforeRichmond.search(origin));
// // var position2 = (alameinAfterRichmond.search(destination));
// myJourney.push(alameinBeforeRichmond[position1]);

// object array of train lines, intended to search for matching strings
// and push found elements to empty myJourney array - but couldnt get it to work.

// var trainLines = [
// 	{
// 		name: "Alamein",
// 		beforeRichmond: "Flinders Street",
// 		afterRichmond: ["Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"]
// 	},
// 	{
// 		name: "Glen Waverley",
// 		beforeRichmond: ["Flagstaff", "Melbourne Central", "Parliament"],
// 		afterRichmond: ["Richmond", "Kooyong", "Tooronga"]
// 	},
// 	{
// 		name: "Sandringham",
// 		beforeRichmond: "Southern Cross",
// 		afterRichmond: ["Richmond", "South Yarra", "Prahran", "Windsor"]
// 	},
// ];





// var alamein = ["Flinders", ]

// var beforeRichmond = ["Flinders Street" ,"Flagstaff", "Melbourne Central", "Parliament", "Southern Cross"];
