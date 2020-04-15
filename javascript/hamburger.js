//Jquery hamburger menu

$(document).ready(function () {
	$(".cross").hide();
	$(".mobile-navigation-bar").hide();
	$(".hamburger").click(function () {
		$(".mobile-navigation-bar").slideToggle("slow", function () {
			$(".hamburger").hide();
			$(".cross").show();
		});
	});

	$(".cross").click(function () {
		$(".mobile-navigation-bar").slideToggle("slow", function () {
			$(".cross").hide();
			$(".hamburger").show();
		});
	});
});