//hardcodes for testing
var origin = prompt("Origin station?");
var destination = prompt("Destination station?");

console.log("Origin: " + origin);
console.log("Destination: " + destination);

//hardcoding the interchange for now, ideally would have this generate based on includes("Richmond")
var trainLines = [
{
	name: "glenWaverley",
	stations: ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "East Richmond", "Burnley", "Hawthorn", "Glenferrie"],
	interchange: 3
},
{
	name: "alamein",
	stations: ["Flinders Street", "Richmond", "Kooyong", "Tooronga"],
	interchange: 1
},
{
	name: "sandringham",
	stations: ["Southern Cross", "Richmond", "South Yarra", "Prahran", "Windsor"],
	interchange: 1
}
];

//functions to find which line travelling on and index of station
function findStations (stop) {
	for (i = 0; i < trainLines.length; i++) {
		if (trainLines[i].stations.includes(stop)) {
			return trainLines[i].stations.indexOf(stop);			
		}
	}
};	

function findLines (stop) {
	for (j = 0; j < trainLines.length; j++) {
		if (trainLines[j].stations.includes(stop)) {	
			return trainLines[j];
		}
	}
};

//pushing journey to this array
var myJourneyArray = [];

//executing functions
var originIndex = findStations(origin);
var destinationIndex = findStations(destination);

var startingLine = findLines(origin);
var endLine = findLines(destination);


//printing to console the sliced stations and total stops based on 6 possible journey types
if (originIndex < destinationIndex && startingLine === endLine) {
	myJourneyArray.push(trainLines[i].stations.slice(originIndex, destinationIndex + 1));

} else if (originIndex > destinationIndex && startingLine === endLine) {
	myJourneyArray.push(trainLines[i].stations.slice(destinationIndex, originIndex + 1).reverse(" "));

} else if (originIndex > startingLine.interchange && destinationIndex < endLine.interchange) {
	myJourneyArray.push(startingLine.stations.slice(startingLine.interchange, originIndex + 1).reverse(" "));
	myJourneyArray.push(endLine.stations.slice(destinationIndex, endLine.interchange).reverse(" "));

} else if (originIndex < startingLine.interchange && destinationIndex > endLine.interchange) {
	myJourneyArray.push(startingLine.stations.slice(originIndex, startingLine.interchange));
	myJourneyArray.push(endLine.stations.slice(endLine.interchange, destinationIndex + 1));

} else if (originIndex < startingLine.interchange && destinationIndex < endLine.interchange) {
	myJourneyArray.push(startingLine.stations.slice(originIndex, startingLine.interchange));
	myJourneyArray.push(endLine.stations.slice(destinationIndex, endLine.interchange + 1).reverse(" "));

} else if (originIndex > startingLine.interchange && destinationIndex > endLine.interchange) {
	myJourneyArray.push(startingLine.stations.slice(startingLine.interchange + 1, originIndex + 1).reverse(" "));
	myJourneyArray.push(endLine.stations.slice(endLine.interchange, destinationIndex + 1));

} else {
	console.log("Maybe you should just drive to work");
};

//printing rest of information, two parts because of that array issue
if (startingLine === endLine) {
	console.log(myJourneyArray[0].join(" ---> "));
	console.log(myJourneyArray[0].length - 1 + " stops total");
} else {
	console.log(myJourneyArray[0].join(" ---> ") + " ---> " + myJourneyArray[1].join(" ---> "));
	console.log(myJourneyArray[0].length + myJourneyArray[1].length - 1 + " stops total");
}



			

	




