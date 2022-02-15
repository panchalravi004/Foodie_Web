//For Bar
function show_bar(){
    var a =  document.getElementById("header");
    a.classList.toggle('active');
}
// for search 
function show_search(){
    var b =  document.getElementById("search");
    b.classList.toggle('active');
}
//show header on the top
$(document).ready(
    function()
    {
        $("#header").load("header/header.html");
        $("#footer").load("footer/footer.html");
        $("#offer-container").load("offers/offer.html");
        $("#product").load("products/product.html");
        $("#category").load("category/category.html");
    }
);