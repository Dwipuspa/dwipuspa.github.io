// JavaScript Document
var slideIndex = 0,auto,i;
		var photo = document.getElementsByClassName("client-photo");
		var testi = document.getElementsByClassName("quotesign");
		var clients = document.getElementsByClassName("quotename");
		var dots = document.getElementsByClassName("dot");
		$('.clients').ready(function() {
			$('.comment').each(function(){
				var highestBox = 0;
				$('.quotesign', this).each(function(){
					if($(this).height() > highestBox) {
						highestBox = $(this).height(); 
					}
				});  
				$('.quotesign',this).height(highestBox);
			});
			autoslider();
		});
		function autoslider() {
		var i;
		for (i = 0; i < photo.length; i++) {
			photo[i].style.display = "none";
			testi[i].style.display = "none";
			clients[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > photo.length) {
			slideIndex = 1
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		photo[slideIndex - 1].style.display = "block";
		testi[slideIndex - 1].style.display = "block";
		clients[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
		auto = setTimeout(autoslider, 4000); // Change image every 2 seconds
		}
		function plusSlides(n) {
			showSlides(slideIndex += n);
		}
		function currentSlide(n) {
			clearTimeout(auto);
			showSlides(slideIndex = n);
		}
		function showSlides(n) {
			if (n > photo.length) {
				slideIndex = 1
			}
			if (n < 1) {
				slideIndex = photo.length
			}
			for (i = 0; i < photo.length; i++) {
				photo[i].style.display = "none";
				testi[i].style.display = "none";
				clients[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			photo[slideIndex - 1].style.display = "block";
			testi[slideIndex - 1].style.display = "block";
			clients[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
			auto = setTimeout(autoslider, 4000);
		}
		function myFunction() {
			var x = document.getElementById("myTopnav");
			if (x.className === "topnav clearfix") {
				x.className += " responsive";
			} else {
				x.className = "topnav clearfix";
			}
		}

$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  >= 50) {
        $('#navbar').addClass('fixed');
		} else {
			$('#navbar').removeClass('fixed');
		}
	
});