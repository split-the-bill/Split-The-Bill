window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.attributes.add("sticky")
    } else {
        navbar.attributes.remove("sticky");
    }
}