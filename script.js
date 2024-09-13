$(document).ready(function() {
    // Show overlay when any card is clicked
    $(".card1, .card2, .card3, .card4, .card5").on("click", function() {
        $(".overlay").fadeIn(); // Show the overlay
    });

    // Hide overlay when the close button is clicked
    $(".close-overlay").on("click", function() {
        $(".overlay").fadeOut(); // Hide the overlay
    });

    // Optional: Hide overlay if the background is clicked
    $(".overlay").on("click", function(e) {
        if ($(e.target).is(".overlay")) {
            $(".overlay").fadeOut();
        }
    });
});
