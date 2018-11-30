    $(document).ready(function() {

	// These are desktop mode overrides as mystyle1.css was built for mobile
        if (!$.isMobile()) { 

	    // Arrow navagation from landing to next section, slideshow.
	    var myInfoId = $(".mbr-wowslider-container").first().attr("id");
	    var myArrow  = $('<div class="mbr-arrow hidden-sm-down" aria-hidden="true">' +
	                     '<a href="#'+myInfoId+'"> <i class="mbri-down mbr-iconfont"></i> </a>' +
	                     '</div>');
	    $("section.header8").append(myArrow);

	}

    });

