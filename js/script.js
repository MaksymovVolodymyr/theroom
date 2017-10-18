$(document).ready(function() {
	$('.subgallary__img').click(function() {
		var $img = $(this).css('background-image');
		console.log($img);
		$('.main-gallery').css({'backgroundImage' : $img});
	});

	$('.games-wrapper').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $('.games__counter').text(i + '/' + slick.slideCount);
	});

	$('.games-wrapper').slick({
		slide: '.games-slide',
		arrows: true,
		dots: false
	});

	$('.subgallary').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $('.subgallary__counter').text(i + '/' + slick.slideCount);
	});

	$('.subgallary').slick({
		slide: '.subgallary-slide',
		arrows: true,
		dots: false
	});







	///start
	var pages = $(".sec").length,
      scrolling = false,
      curPage = 1;
  
  function pagination(page, movingUp) {
    scrolling = true;
    var diff = curPage - page,
        oldPage = curPage;
    curPage = page;
    $(".sec").removeClass("active small previous");
    $(".sec-" + page).addClass("active");
    $(".nav-btn").removeClass("active");
    $(".nav-page" + page).addClass("active");
    if (page > 1) {
      $(".sec-" + (page - 1)).addClass("previous");
      if (movingUp) {
        $(".sec-" + (page - 1)).hide();
        var hackPage = page;
        setTimeout(function() {
          $(".sec-" + (hackPage - 1)).show();
        }, 600);
      }
      while (--page) {
        $(".sec-" + page).addClass("small");
      }
    }
    console.log(diff)
    if (diff > 1) {
      for (var j = page + 1; j < oldPage; j++) {
        $(".sec-" + j + " .half").css("transition", "transform .7s ease-out");
      }
    }
    setTimeout(function() {
      scrolling = false;
      $(".sec .half").attr("style", "");
      $(".sec")
    }, 700);
  }
  
  function navigateUp() {
    if (curPage > 1) {
      curPage--;
      pagination(curPage, true);
    }
  }

  function navigateDown() {
    if (curPage < pages) {
      curPage++;
      pagination(curPage);
    }
  }
  
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  });
  
  $(document).on("click", ".scroll-btn", function() {
    if (scrolling) return;
    if ($(this).hasClass("up")) {
      navigateUp();
    } else {
      navigateDown();
    }
  });
  
  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });
  
  $(document).on("click", ".nav-btn:not(.active)", function() {
    if (scrolling) return;
    pagination(+$(this).attr("data-target"));
  });




	///end
	
});