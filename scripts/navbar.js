window.onscroll = function() {updateNavbar()};

var navbar = document.getElementsByClassName("navbar-holster")[0];
var secondaryNavbar = document.getElementsByClassName("navbar-secondary")[0];
var logoimg = document.getElementById("testimg");

var sticky = navbar.offsetTop;
var secondaryNavbarEntryPoint = 500;

function updateNavbar() {
    if (logoimg === null) logoimg = document.getElementById("testimg");
    let rect = logoimg.getBoundingClientRect();
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        document.body.classList.add("sticky-navbar");
    } else {
        navbar.classList.remove("sticky");
        document.body.classList.remove("sticky-navbar");
    }
    if (window.pageYOffset > rect.x + 0.4 * rect.height) {
        secondaryNavbar.classList.remove("hidden");
        document.body.classList.add("sticky-navbar-secondary");
    } else {
        secondaryNavbar.classList.add("hidden");
        document.body.classList.remove("sticky-navbar-secondary");
    }
}