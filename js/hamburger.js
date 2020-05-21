$(function(){
    $(".hamburger").on("click", hamburgerHandler);
});

function hamburgerHandler(){
    toggleFav()
    $("body").on("click", closeFavHandler);
}
// Check if class of click = out of the favourite block then close favourite block
function closeFavHandler(e){
    if(e.target.className === "joke-finder joke-finder--not-active"){
        toggleFav()
    }
}
// Open or close favourite block
function toggleFav(){
    $(".hamburger").toggleClass("hamburger--active");
    $("#joke-finder").toggleClass("joke-finder--not-active");
    $("#favourite").toggleClass("favourite--hidden")
}