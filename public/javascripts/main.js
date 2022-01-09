// hover over card to display card details
let cardEl = document.querySelectorAll('.project-card');
let cardImageEl = document.querySelectorAll('.project-img');
let cardBodyEl = document.querySelectorAll('.project-card-body');

// add event listener to each card
cardImageEl.forEach(function (c) {
    c.addEventListener('mouseenter', function (e) {
        // display the card body of event
        $(e.target).siblings(".project-card-body").fadeIn();
    });
})
cardBodyEl.forEach(function (c) {
    c.addEventListener('mouseleave', function (e) {
        // display the card body of event
        $(e.target).fadeOut();
    });
})