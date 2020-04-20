
'esversion: 6';

let elem = document.querySelector("#text"); // зміна стилів для секції about
let text = document.querySelector(".about__text");
elem.onmouseover = function () {
	this.style.backgroundColor = "black";
	text.style.color = "white";
};

elem.onmouseout = function () {
	this.style.backgroundColor = "white";
	text.style.color = "#999";
};


$(document).ready(function () {   // ф-я для фіксації header
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


$(window).scroll(function () { // активація кнопок меню при скроллінгу
	var scrollDistance = $(window).scrollTop();
	$('.nav a.active').removeClass('active');
	$('.section').each(function (i) {
		if ($(this).position().top <= scrollDistance) {
			$('.nav a.active').removeClass('active');
			$('.nav a').eq(i).addClass('active');
		}
	});
}).scroll();

$(document).ready(function () { // активація кнопок меню при кліку
	$(".menu-toggle").click(function () {
		$(".menu-toggle").toggleClass("active");
		$(".nav").toggleClass("active");
	});
});



$(function () {   // зміна деяких параметрів для перемикання коментарів
	$('.reviews').slick({
		nextArrow: '<button type="button" class="slick-btn slick_next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick_prev"></button>',
		infinite: false
	});
});


+
function () {  // активні таби для пропозицій турів

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

// активні кнопки перемикання між сторонами карток
Array.from(document.querySelectorAll('.navigation_button')).forEach((item) => {
	item.onclick = () => {
		item.parentElement.parentElement.classList.toggle('change');
	}
});
