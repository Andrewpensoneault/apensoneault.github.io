
function ClickTo(id) {
    var page = $("html, .content");
    page.animate({
        scrollTop: $("#" + id).offset().top
    }, 2000);

    return false;
}