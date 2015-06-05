$(document).ready(function() {
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function() {
        $('ryu-ready').hide();
        $('.ryu-still').show();
    });
    $('.ryu').mousedown(function() {
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show();
        //play hadouken sounds
        //show hadouken and animate from left to right
    });
    $('.ryu').mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
});
