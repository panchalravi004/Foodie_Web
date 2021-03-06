/*for background main image */
$(window).scroll(function () {
    if ($(this).scrollTop() > 15) {
        $(".offer").css({
            "border-bottom-left-radius": "30px",
            "border-bottom-right-radius": "30px"
        });
    }
    else {
        $(".offer").css({
            "border-bottom-left-radius": "10px",
            "border-bottom-right-radius": "10px"
        });
    }
    /* Category Before css*/
    if ($(this).scrollTop() > 50) {
        $(".category").append('<style>.category:before{height: 60%;border-bottom-left-radius: 50%;border-bottom-right-radius: 50%;}</style>');
    }
    else {
        $(".category").append('<style>.category:before{height:0%;border-bottom-left-radius:0%;border-bottom-right-radius:0%;}</style>');
    }
    /*for circle only */
    if ($(this).scrollTop() > 20) {
        // alert($(this).scrollTop() + " px");
        $(".product").append('<style>.product:before{clip-path: circle(' + ($(this).scrollTop() * 2) / 10 + 'rem at 50% 50%)}</style>');
        if ($(this).scrollTop() > 500) {
            $(".product").append('<style>.product:before{clip-path: circle(100rem at 50% 50%)}</style>');
        }
    }
    else {
        $(".product").append('<style>.product:before{clip-path: circle(20rem at 50% 50%)}</style>');
    }

})