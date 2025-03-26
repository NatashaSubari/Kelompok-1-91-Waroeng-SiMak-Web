$(document).ready(function() {
    var carousel = $(".carousel"),
        currdeg  = 0;

    $(".next").on("click", function() { rotate("n"); });
    $(".prev").on("click", function() { rotate("p"); });

    function rotate(direction) {
        if (direction === "n") {
            currdeg -= 90;
        } else {
            currdeg += 90;
        }
        carousel.css({
            "transform": "rotateY(" + currdeg + "deg)",
            "transition": "transform 1s ease-in-out"
        });
    }
});