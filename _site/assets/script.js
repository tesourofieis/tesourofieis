// SCROLLSPY
$('body').scrollspy({ target: '#toc' })

// SCROLL

$(document).ready(function() {
    var pathname = window.location.pathname;

    $("#navlist a").each(function(index) {
        if (pathname.toUpperCase().indexOf($(this).text().toUpperCase()) != -1)
            $(this).addClass("current");
    });

    if ($("a.current").length == 0)
        $("a#index").addClass("current");
});