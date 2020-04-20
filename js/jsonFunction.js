var requestURL = 'https://raw.githubusercontent.com/oleh-turchyn/verstka/develop/js/poptours.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var poptours = request.response;
	//poptursHeader(tours);
	showTours(poptours);
};
var cards_wrapper = document.querySelector('.cards_wrapper');
var myCard = document.querySelectorAll('.card');
var myFrontSide = document.querySelectorAll('.front_side');
var myHeader = document.querySelectorAll('.tour_name');
var myList = document.querySelectorAll('.card_list');

function showTours(jsonObj) {
	var tours = jsonObj['tours'];

	for (var i = 0; i < tours.length; i++) {
		var description = tours[i].description;
		for (var j = 0; j < description.length; j++) {
			var listItem = document.querySelector('.card_list-item');
			listItem.textContent = description[j];
			myList[i].appendChild(listItem);
        }
        
		myHeader[i].textContent = tours[i].name;
		myFrontSide[i].appendChild(myHeader[i]);
		myFrontSide[i].appendChild(myList[i]);
		myCard[i].appendChild(myFrontSide[i]);
		cards_wrapper.appendChild(myCard[i]);
	}
}