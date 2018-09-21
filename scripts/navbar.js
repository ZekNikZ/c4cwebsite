window.onscroll = function() {updateNavbar()};

var navbar = document.getElementsByClassName("navbar-holster")[0];
var secondaryNavbar = document.getElementsByClassName("navbar-secondary")[0];

var sticky = navbar.offsetTop;
var secondaryNavbarEntryPoint = 500;

function updateNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        document.body.classList.add("sticky-navbar");
    } else {
        navbar.classList.remove("sticky");
        document.body.classList.remove("sticky-navbar");
    }
    if (window.pageYOffset > secondaryNavbarEntryPoint) {
        secondaryNavbar.classList.remove("hidden");
        document.body.classList.add("sticky-navbar-secondary");
    } else {
        secondaryNavbar.classList.add("hidden");
        document.body.classList.remove("sticky-navbar-secondary");
    }
}