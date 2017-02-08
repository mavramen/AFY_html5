
$(document).ready(function () {


    /* CSS */
    /*$("head").append('<title>Alice Fong Yu Alternative School</title>')
     .append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Montserrat:400italic,400">')
     .append('<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Philosopher|Arimo">')
     .append('<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">')
     .append('<link rel="stylesheet" href="assets/css/animate.css">')
     .append('<link rel="stylesheet" href="assets/css/magnific-popup.css">')
     .append('<link rel="stylesheet" href="assets/flexslider/flexslider.css">')
     .append('<link rel="stylesheet" href="assets/css/form-elements.css">')
     .append('<link rel="stylesheet" href="assets/css/style.css">')
     .append('<link rel="stylesheet" href="assets/css/media-queries.css">');*/



    /* <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->  */
//$("head").append('<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --><!-- WARNING: Respond.js does not work if you view the page via file:// --><!--[if lt IE 9]><script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>//<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->');

    $("#footer-container").load("footer.html");
    $("#nav-container").load("navigation.html", function () {
        var menu = ['home', 'about', 'community', /*'resources',*/ 'shopping', 'contact'];
        $("#top-navbar-ul>li").removeClass("active");
        $.each(menu, function (index, value) {
            //alert(index + ": " + value);
            if ($($('.navbar')).hasClass(value)) {
                $($("#top-navbar-ul>li")[index]).addClass("active");
            }
        });
    });

    
});

jQuery.fn.extend({
    loadDonate: function () {
        $("#donation-container").load("callToDonation.html");
    }
});