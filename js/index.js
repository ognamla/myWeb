
var myNav = document.getElementsByClassName("my-nav")[0];
var mySticky = myNav.offsetTop;
var myNavHr = document.getElementsByClassName("my-nav-hr")[0];

window.onscroll = function () {
    fixHeader();
};

function fixHeader() {
    console.log("ofset",myNav, window.pageYOffset, mySticky, myNavHr)
    if (window.pageYOffset >= mySticky) {
        myNav.classList.add("sticky");
        myNavHr.style.display = "none";

    } else {
        myNav.classList.remove("sticky");
        myNavHr.style.display = "block";

    }
};