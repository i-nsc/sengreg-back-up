function resetActive(event, percent, step) {
	$(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
	$(".progress-completed").text(percent + "%");



	$("div").each(function () {
		if ($(this).hasClass("activestep")) {
			$(this).removeClass("activestep");
		}
	});

	if (event.target.className == "col-md-2") {
		$(event.target).addClass("activestep");
	}
	else {
		$(event.target.parentNode).addClass("activestep");
	}

	hideSteps();
	showCurrentStepInfo(step);
}

function hideSteps() {
	$("div").each(function () {
		if ($(this).hasClass("activeStepInfo")) {
			$(this).removeClass("activeStepInfo");
			$(this).addClass("hiddenStepInfo");
		}
	});
}

function showCurrentStepInfo(step) {
	var id = "#" + step;
	$(id).addClass("activeStepInfo");
}

function stepMove(event, cur_step, des_step) {
	/*if ($('#step-2-nav-right').hasClass('disabled2') && cur_step == 3 && des_step == 4) {
		step2Tips(event);
		return;
	}*/
	window.location = "#top";
	var percent = 0;
	switch (des_step) {
		case '0':
			percent = 0;
			break;
		case '1':
			percent = 5;
			break;
		case '1-1':
			percent = 10;
			break;
		case '2':
			percent = 15;
			break;
		case '3':
			percent = 25;
			break;
		case '4':
			percent = 35;
			step2VideoSkippable = 1;
			break;
		case '5':
			percent = 45;
			break;
		case '6':
			percent = 55;
			step6Load(event);
			break;
		case '7':
			percent = 65;
			break;

		case '8':
			percent = 75;
			break;
		case '9':
			percent = 85;
			break;

		case '10':
			percent = 95;
			$(".progress-completed").css("color", "black");
			break;
		default:
			percent = 100;
			$(".progress-completed").css("color", "white");
			break;
	}

	$(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
	$(".progress-completed").text(percent + "%");

	var cur_nav_id = "#step-" + cur_step + "-nav";
	$(cur_nav_id).fadeOut("slow", "linear").addClass("hidden");

	var cur_id = "#step-" + cur_step;
	$(cur_id).fadeOut("slow", "linear").addClass("hidden");

	var des_nav_id = "#step-" + des_step + "-nav";
	$(des_nav_id).fadeIn("slow", "linear").removeClass("hidden");

	var dev_id = "#step-" + des_step;
	$(dev_id).fadeIn("slow", "linear").removeClass("hidden");
}

/*$("#step-2-video").on("ended", function() {
	$('#step-2-nav-right').removeClass("disabled2");
});

$('#step-2-video').click(function(){this.paused?this.play():this.pause();});

var video = document.getElementById('step-2-video');
var supposedCurrentTime = 0;
var maxTime = 0;
var step2VideoSkippable = 0;
video.addEventListener('timeupdate', function() {
	if (step2VideoSkippable == 0) {
	  if (!video.seeking) {
			supposedCurrentTime = video.currentTime;
			if (maxTime < video.currentTime) {
				maxTime = video.currentTime;
			}
	  }
	}
});
video.addEventListener('seeking', function() {
	if (step2VideoSkippable == 0) {	
	  var delta = video.currentTime - supposedCurrentTime;
	  if (delta > 0.01 && maxTime < video.currentTime) {
		video.currentTime = maxTime;
	  }
	}
});
video.addEventListener('ended', function() {
	supposedCurrentTime = 0;
});

function step2Pause(event) {
	video.pause();
}*/

/*$(document).ready(function(e) {
	var isIE = window.ActiveXObject || "ActiveXObject" in window;
	if (isIE) {
		$('.modal').removeClass('fade');
	}
});*/

function step2Low() {
	$('#step-2-video').attr('src', 'video/Dean_Welcome_Message_s.mp4');
}

function step3Low() {
	$('#step-3-video').attr('src', 'video/Reg_Course_Procedure_s.mp4');
}

var step2Skippable = 1;
function step2Tips(event) {
	if ($('#step-2-nav-right').hasClass('disabled2')) {
		if (step2Skippable == 1)
			$("#step-2-modal").modal("show");
		else
			alert("Please watch the video.");
	}
}


var video = document.getElementById('step-2-video');

function step2Pause(event) {
	video.pause();
}
var video2 = document.getElementById('step-3-video');
function step3Pause(event) {
	video2.pause();
}




var faq_icon_shake = 1;
function faq_icon_shake_delay() {
	faq_icon_shake = 1;
}
$('.activate-faq-div').hover(function () {
	if (faq_icon_shake == 1 && $('.activate-faq-box').css('display') == 'none') {
		$('.activate-faq-div').effect("shake", { distance: 5 }, 500);
		faq_icon_shake = 0;
		setTimeout(faq_icon_shake_delay, 500);
	}
});

$('.activate-faq-div').click(function () {
	if ($('.activate-faq-box').css('display') == 'none') {
		$('.activate-faq-box').css('display', 'block');
	} else
		$('.activate-faq-box').css('display', 'none');
});

function step2SkipCheck(event) {
	if ($('#optionsQ1-1').is(':checked') && $('#optionsQ1-2').is(':checked')) {
		$('#step-2-nav-right').removeClass("disabled2");
		stepMove(event, '3', '4');
	} else
		step2Skippable = 0;
	$("#step-2-modal").modal("hide");
}

$(window).resize(step6Load);
function step6Load(event) {
	$('.step-6-large').css('height', $('.container').width() * 25 / 32);
}

$('.step-6-small').click(function () {
	var clan_name = $(this).attr('title');
	if ($(window).width() < 768) {
		// $("#step-6-xs").modal("show");
		$('.step-6-large-2').fadeOut('fast', function () {
			$(this).attr('src', 'img/clan/CP_' + clan_name + '.jpg').fadeIn('fast');
		});

	} else {
		$('.step-6-large').fadeOut('fast', function () {
			$(this).attr('src', 'img/clan/CP_' + clan_name + '.jpg').fadeIn('fast');
		});
	}
});

function step7LeftBtn(type) {
	$('#step-7-cover-btn').removeClass("hidden");
	$('#step-7-video-btn').removeClass("hidden");
	$('#step-7-detail-btn').removeClass("hidden");
	$('#step-7-preview').addClass('hidden');
	if ($(window).width() < 768) {
		//$( "#step-7-small-box" ).toggle( "slide" );
		$("#step-7-small-box").fadeOut("slow", "linear").addClass('hidden');
		$('#step-7-view').fadeIn("slow", "linear").removeClass('hidden');
		window.location = "#step-7-box-top";
	} else {
		$('#step-7-view').removeClass('hidden');
	}

	$('.step-7-left-btn').removeClass("active");
	$('.step-7-detail-text').addClass("hidden");
	var btn_name = "#step-7-" + type + "-btn";
	$(btn_name).addClass("active");
	var soc_name = $(btn_name).attr('title');
	$('#step-7-cover-img').fadeOut('fast', function () {
		$(this).attr('src', 'img/ocamp/' + soc_name + '_ocamp_poster.jpg').fadeIn('fast');
	});
	$('#step-7-detail-' + type).removeClass("hidden");
	$('#step-7-cover').fadeIn("slow", "linear").removeClass("hidden");
	$('#step-7-cover-btn').addClass("active");
	$('#step-7-video-btn').removeClass("active");
	$('#step-7-detail').fadeOut("slow", "linear").addClass("hidden");
	$('#step-7-detail-btn').removeClass("active");
	//	if (type == 0) {
	//		$('#step-7-video-btn').addClass("hidden");
	//	} else if (type == 1) {
	//		$('#step-7-video-btn').addClass("hidden");
	//		$('#step-7-detail-btn').addClass("hidden");
	//	} else if (type == 5) {
	//		$('#step-7-detail-btn').addClass("hidden");
	//	$('#step-7-video-video').attr('src','video/ocamp/' + clan_name + '_480p.mp4');
	//	} else if (type == 6) {
	//		$('#step-7-detail-btn').addClass("hidden");
	//	$('#step-7-video-video').attr('src','video/ocamp/' + clan_name + '_480p.mp4');
	//	}
	if (type == 0) {
		$('#step-7-video-video').attr('src', 'video/ocamp/' + soc_name + '_480p.mp4');
	} else if (type == 4) {
		$('#step-7-video-btn').addClass("hidden");
	} else if (type == 5) {
		$('#step-7-video-video').attr('src', 'video/ocamp/' + soc_name + '_480p.mp4');
	} else if (type == 6) {
		$('#step-7-video-video').attr('src', 'video/ocamp/' + soc_name + '_480p.mp4');
	}
	$('#step-7-video').fadeOut("slow", "linear").addClass("hidden");
}

function step7RightBtn(type) {
	if (type == '0' && $('#step-7-cover').hasClass("hidden")) {
		$('#step-7-cover').fadeIn("slow", "linear").removeClass("hidden");
		$('#step-7-cover-btn').addClass("active");
		$('#step-7-video').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-video-btn').removeClass("active");
		$('#step-7-detail').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-detail-btn').removeClass("active");
	} else if (type == '1' && $('#step-7-video').hasClass("hidden")) {
		$('#step-7-cover').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-cover-btn').removeClass("active");
		$('#step-7-video').fadeIn("slow", "linear").removeClass("hidden");
		$('#step-7-video-btn').addClass("active");
		$('#step-7-detail').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-detail-btn').removeClass("active");
	} else if (type == '2' && $('#step-7-detail').hasClass("hidden")) {
		$('#step-7-cover').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-cover-btn').removeClass("active");
		$('#step-7-video').fadeOut("slow", "linear").addClass("hidden");
		$('#step-7-video-btn').removeClass("active");
		$('#step-7-detail').fadeIn("slow", "linear").removeClass("hidden");
		$('#step-7-detail-btn').addClass("active");
	}
}

function step7Back() {
	$("#step-7-view").fadeOut("slow", "linear").addClass('hidden');
	$('#step-7-small-box').fadeIn("slow", "linear").removeClass('hidden');
}


function step6LeftBtn(type) {
	$('#step-6-view').addClass('hidden');
	$('#step-6-cover-btn').removeClass("hidden");
	$('#step-6-detail-btn').removeClass("hidden");
	$('#step-6-preview').addClass('hidden');
	if ($(window).width() < 768) {
		// 	//$( "#step-7-small-box" ).toggle( "slide" );
		// 	// $("#step-6-small-box").fadeOut("slow", "linear").addClass('hidden');
		// 	$('#step-6-view').fadeIn("slow", "linear").removeClass('hidden');
		window.location = "#step-6-cover";
	}
	// $('#step-6-view').removeClass('hidden');
	$('#step-6-view').fadeIn("slow", "linear").removeClass('hidden');

	$('.step-6-left-btn').removeClass("active");
	$('.step-6-detail-text').addClass("hidden");
	var btn_name = "#step-6-" + type + "-btn";
	$(btn_name).addClass("active");
	var clan_name = $(btn_name).attr('title');
	//$('#step-6-cover-img').fadeOut('fast', function(){
	//	$(this).attr('src','img/clan/CP_' + clan_name + '.jpg').fadeIn('fast');
	//});
	$('#step-6-detail-' + type).removeClass("hidden");
	$('#step-6-cover').fadeIn("slow", "linear").removeClass("hidden");
	$('#step-6-cover-btn').addClass("active");
	$('#step-6-detail').fadeOut("slow", "linear").addClass("hidden");
	$('#step-6-detail-btn').removeClass("active");
}

function step6RightBtn(type) {
	if (type == '0' && $('#step-6-cover').hasClass("hidden")) {
		$('#step-6-cover').fadeIn("slow", "linear").removeClass("hidden");
		$('#step-6-cover-btn').addClass("active");
		$('#step-6-detail').fadeOut("slow", "linear").addClass("hidden");
		$('#step-6-detail-btn').removeClass("active");
	} else if (type == '1' && $('#step-6-detail').hasClass("hidden")) {
		$('#step-6-cover').fadeOut("slow", "linear").addClass("hidden");
		$('#step-6-cover-btn').removeClass("active");
		$('#step-6-detail').fadeIn("slow", "linear").removeClass("hidden");
		$('#step-6-detail-btn').addClass("active");
	}
}

function step6Back() {
	$("#step-6-view").fadeOut("slow", "linear").addClass('hidden');
	$('#step-6-small-box').fadeIn("slow", "linear").removeClass('hidden');
}

var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var slideIndex = slides.length-1;

function plusSlides(diff) {
	slides[slideIndex].style.display = "none";
	dots[slideIndex].className = "dot";
	slideIndex = (slideIndex + diff + slides.length) % slides.length;
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className = "dot active1";
}

function showSlides() {
	plusSlides(1);
	setTimeout(showSlides, 5000); // Change image every 8 seconds
}

function gotoSlide(index) {
    plusSlides(index - slideIndex);
}
