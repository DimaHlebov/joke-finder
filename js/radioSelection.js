$(init);
var $checked, $categories, $search;

function init(){
    $(".radio input[type='radio']").on("click", displayRadioListener);
    $categories = $('#categories-labels');
    $search = $('#search-input');
}

function displayRadioListener(){
    $checked = $('.radio input[type="radio"]:checked');
    var checkedID = $checked.attr('id')
    hideAll()
    display(checkedID)
}

function display(checkedID){
    var animationName = "animate__animated animate__slideInLeft"
    var animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd";
    if(checkedID == "categories-opt"){
        $categories.toggleClass("categories-labels--hidden " + animationName).one(animationend, function(){
            $categories.removeClass(animationName)
        });
    }
    if(checkedID == "search-opt"){
        $search.toggleClass("search__input--hidden " + animationName).one(animationend, function(){
            $search.removeClass(animationName)
        });
    }
}

function hideAll() {
    $search.addClass("search__input--hidden")
    $categories.addClass("categories-labels--hidden")
}