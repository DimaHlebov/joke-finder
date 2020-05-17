$(init);
var $hamburger, $jokeFinder, $favourite;
function init(){
    $hamburger = $(".hamburger");
    $jokeFinder = $("#joke-finder");
    $favourite = $("#favourite");
    $hamburger.on("click", hamburgerHendler);
    
}

function hamburgerHendler(){
    toggleFav()
    $("body").on("click", closeFavHendler);
}
// Check if class of click = out of the favourite block then close favourite block
function closeFavHendler(e){
    if(e.target.className == "joke-finder joke-finder--not-active"){
        toggleFav()
    }
}
// Open or close favourite block
function toggleFav(){
    $hamburger.toggleClass("hamburger--active");
    $jokeFinder.toggleClass("joke-finder--not-active");
    $favourite.toggleClass("favourite--hidden")
}