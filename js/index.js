// javascript version

// function showHideTop() {
// 	var firstParagraph = document.getElementById("topParagraph");	
// 		if(firstParagraph.style.display == "none")
// 			{
// 			firstParagraph.style.display = "block";
// 			}
// 		else{
// 			firstParagraph.style.display = "none";
// 			}
// }

// function changeTextTop() {
// 	var firstReadLink = document.getElementById("readMoreLinkTop");
// 		if(document.getElementById("topParagraph").style.display == "none")
// 			{
// 			firstReadLink.innerHTML = "Read more >";
// 			}
// 		else{
// 			firstReadLink.innerHTML = "Read less <";
// 			}
// }

// function showHideBottom() {
// 	var secondParagraph = document.getElementById("bottomParagraph");
// 		if(secondParagraph.style.display == "none")
// 			{
// 			secondParagraph.style.display = "block";
// 			}
// 		else{
// 			secondParagraph.style.display = "none";
// 			}
// }

// function changeTextBottom() {
// 	var secondReadLink = document.getElementById("readMoreLinkBottom");
// 		if(document.getElementById("bottomParagraph").style.display == "none")
// 			{
// 			secondReadLink.innerHTML = "Read more >";
// 			}
// 		else{
// 			secondReadLink.innerHTML = "Read less <";
// 			}
// }

console.log('javascript file link to index.html');

$(document).ready(function () {
console.log('jquery is loaded');

$('#read-more-link-top').click(showHideTop);
$('#read-more-link-bottom').click(showHideBottom);

function showHideTop() {
	var topReadLink = $('#read-more-link-top');
	var firstParagraph = $(topReadLink).parent().find('.top-paragraph');

	if ($(firstParagraph).data('state') === 'hidden') {
		$(firstParagraph).data('state', 'show');
		$(firstParagraph).show();
		$(topReadLink).text('Read less <');
	} else {
		$(firstParagraph).data('state', 'hidden');
		$(firstParagraph).hide();
		$(topReadLink).text('Read more >');
	}
}

function showHideBottom() {
	var bottomReadLink = $('#read-more-link-bottom');
	var secondParagraph = $(bottomReadLink).parent().find('.bottom-paragraph');

	if ($(secondParagraph).data('state') === 'hidden') {
		$(secondParagraph).data('state', 'show');
		$(secondParagraph).slideDown();
		$(bottomReadLink).text('Read less <');
	} else {
		$(secondParagraph).data('state', 'hidden');
		$(secondParagraph).slideUp();
		$(bottomReadLink).text('Read more >');
	}
}
});