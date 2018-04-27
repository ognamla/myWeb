
var myNav = document.getElementsByClassName("my-nav")[0];
var myNavHr = document.getElementsByClassName("my-nav-hr")[0];
var skill = document.getElementById("skill");
window.onscroll = function () {
    fixHeader();
    progressBar();
};

function fixHeader() {
    if (window.pageYOffset >= myNav.offsetTop) {
        myNav.classList.add("sticky");
        myNavHr.style.display = "none";

    } else {
        myNav.classList.remove("sticky");
        myNavHr.style.display = "block";
    }
};

function progressBar() {
    if (window.pageYOffset >= skill.offsetHeight) {
        document.getElementsByClassName("swift")[0].style.webkitAnimationPlayState = "running";
        document.getElementsByClassName("js")[0].style.webkitAnimationPlayState = "running";
        document.getElementsByClassName("hc")[0].style.webkitAnimationPlayState = "running";
        document.getElementsByClassName("ci")[0].style.webkitAnimationPlayState = "running";
        document.getElementsByClassName("bi")[0].style.webkitAnimationPlayState = "running";
        document.getElementsByClassName("bi")[1].style.webkitAnimationPlayState = "running";
    };
};


function sendMail() {
    var contactName = document.getElementById("contact-name").value;
    var message = document.getElementById("contact-message").value;

    var subject = "&subject=" + "From " +  contactName;
    var body = "&body=" + message;

    var mail = "mailto:ognamla@gmail.com?";
    var link = mail + subject + body;
    // console.log(link)
    window.location.href = link;
};