// let elem = document.querySelector(".about__text");
// let bg = document.querySelector(".about_item text");
// elem.onmouseover = function(){
//     this.style.color="black";
// }

// bg.onmouseout = function(){
//     this.style.backgroundColor = "pink";
// }
'esversion: 6';

let elem = document.querySelector("#text");
let text = document.querySelector(".about__text");
elem.onmouseover = function () {
	this.style.backgroundColor = "black";
	text.style.color = "white";
};

elem.onmouseout = function () {
	this.style.backgroundColor = "white";
	text.style.color = "#999";
};


$(document).ready(function () {
	$("header").removeClass("default");
	$(window).scroll(function () {
		var scrollPos = $(this).scrollTop();
		if ($(this).scrollTop() > 20) {
			$("header").addClass("default");
		} else {
			$("header").removeClass("default");
		}

	});

});


$(window).scroll(function () {
	var scrollDistance = $(window).scrollTop();
	$('.nav a.active').removeClass('active');
	$('.section').each(function (i) {
		if ($(this).position().top <= scrollDistance) {
			$('.nav a.active').removeClass('active');
			$('.nav a').eq(i).addClass('active');
		}
	});
}).scroll();

$(document).ready(function () {
	$(".menu-toggle").click(function () {
		$(".menu-toggle").toggleClass("active");
		$(".nav").toggleClass("active");
	});
});



$(function () {
	$('.reviews').slick({
		nextArrow: '<button type="button" class="slick-btn slick_next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick_prev"></button>',
		infinite: false
	});
});

// accordion

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active1");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

//tabs

// function setupTabs(){
// 	document.querySelectorAll(".tabs_button").forEach(button =>{
// 		button.addEventListener("click", ()=>{
// 			const sideBar = button.parentElement;
// 			const tabsContainer = sideBar.parentElement;
// 			const tabNumber = button.dataset.forTab;
// 			const tabsToActivate = 	tabsContainer.querySelector('tabs_content[data-tab="${}"');

// 			sideBar.querySelectorAll(".tabs_button").forEach(button =>{
// 				button.classList.remove(".tabs_button-active");
// 			});

// 			tabsContainer.querySelectorAll(".tabs_content").forEach(tab =>{
// 				tab.classList.remove(".tabs_button-active");
// 			});

// 			button.classList.add(".tabs_button-active");
// 			tabsToActivate.classList.add(".tabs_content-active");

// 		});
// 	});
// }

// document.addEventListener("DOMContentLoaded",()=> {
// 		setupTabs();

// 		document.querySelectorAll(".tabs").forEach(tabsContainer =>{
// 			tabsContainer.querySelector(".tabs_sidebar .tabs_button").click();
// 		});
// });

// let tab = function(){
// 	let tabNav = document.querySelectorAll(".tabs_button"),
// 		tabContent = document.querySelectorAll(".tabs_content"),
// 		tabName;
// 	tabNav.forEach(item=>{
// 		item.addEventListener('click',selectTabNav);
// 	});

// 	function selectTabNav(){
// 		tabNav.forEach(item=>{
// 			item.classList.remove("tabs_button-active");
// 		});
// 		this.classList.add("tabs_button-active");
// 		tabName=this.getAttribute("data-for-tab");
// 		selectTabContent(tabName);
// 	}

// 	function selectTabContent(tabName){
// 		tabContent.forEach(item=>{
// 			item.classList.contains(tabName)?
// 			 item.classList.add("tabs_content-active"):
// 			 item.classList.remove("tabs_content-active");
// 		});
// 	}


// };
// tab();




+
function () {

	document.querySelector('.tabs_button').classList.add('tabs_button-active');
	document.querySelector('.tabs_content').classList.add('tabs_content-active');

	function selectPanel(e) {
		var target = e.target.dataset.target;

		document.querySelectorAll('.tabs_button').forEach(el => el.classList.remove('tabs_button-active'));
		document.querySelectorAll('.tabs_content').forEach(el => el.classList.remove('tabs_content-active'));
		e.target.classList.add('tabs_button-active');
		//e.target.classList.add('tabs_content-active')
		console.log(document.querySelector('.' + target));
		document.querySelector('.' + target).classList.add('tabs_content-active');
	}

	document.querySelectorAll('.tabs_button').forEach(el => {
		el.addEventListener('click', selectPanel);
	});

}()


Array.from(document.querySelectorAll('.navigation_button')).forEach((item) => {
	item.onclick = () => {
		item.parentElement.parentElement.classList.toggle('change');
	}
});



var requestURL = 'https://raw.githubusercontent.com/oleh-turchyn/verstka/develop/js/poptours.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var poptours = request.response;
	//populateHeader(superHeroes);
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

		//   myArticle.appendChild(myH2);
		//   myArticle.appendChild(myPara1);
		//   myArticle.appendChild(myPara2);
		//   myArticle.appendChild(myPara3);
		//   myArticle.appendChild(myList);

		//   section.appendChild(myArticle);
		myHeader[i].textContent = tours[i].name;
		myFrontSide[i].appendChild(myHeader[i]);
		myFrontSide[i].appendChild(myList[i]);
		myCard[i].appendChild(myFrontSide[i]);
		cards_wrapper.appendChild(myCard[i]);
	}
}