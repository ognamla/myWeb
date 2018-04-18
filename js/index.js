
var myNav = document.getElementsByClassName("my-nav")[0];
var mySticky = myNav.offsetTop;


window.onscroll = function () {
    fixHeader();
};

function fixHeader() {
    console.log("ofset",myNav, window.pageYOffset, mySticky)
    if (window.pageYOffset >= mySticky) {
        myNav.classList.add("sticky");
    } else {
        myNav.classList.remove("sticky");
    }
};