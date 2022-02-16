//For Bar
function show_bar() {
    var a = document.getElementById("header");
    a.classList.toggle('active');
}
// for search 
function show_search() {
    var b = document.getElementById("search");
    b.classList.toggle('active');
}
//for sigin button click
function show_sigin() {
    var a = document.getElementById("sign-in");
    if (a.style.display = "none") {
        a.style.display = "flex"
    }
    else {
        a.style.display = "none"
    }
}
//for close signin
function close_signin() {
    var a = document.getElementById("sign-in");
    if (a.style.display = "flex") {
        a.style.display = "none"
    }
    else {
        a.style.display = "flex"
    }
}
//show header on the top
$(document).ready(
    function () {
        $("#header").load("header/header.html");
        $("#footer").load("footer/footer.html");
        $("#offer-container").load("offers/offer.html");
        $("#product").load("products/product.html");
        $("#category").load("category/category.html");
        $("#sign-in").load("signin/signin.html");
    }
);