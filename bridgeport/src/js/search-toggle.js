// Search Toggle
$(function() {
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $(".search-box").slideToggle("slow");
    });
});