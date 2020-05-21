$(function(){
    //Click handler on radio
    $(".radio input[type='radio']").on("click", displayRadioHandler);
});

function displayRadioHandler(){
    let checkedID = $('.radio input[type="radio"]:checked').attr('id')
    hideAll()
    display(checkedID)
}

// Open and animate categories or search
function display(checkedID){
    let animationName = "animate__animated animate__slideInLeft"
    const animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd";
    if(checkedID === "categories-opt"){
        let $categories = $("#categories-labels");
        $categories.toggleClass("categories-labels--hidden " + animationName).one(animationend, function(){
            $categories.removeClass(animationName);
        });
    }
    if(checkedID === "search-opt"){
        let $search = $('#search-input');
        $search.toggleClass("search__input--hidden " + animationName).one(animationend, function(){
            $search.removeClass(animationName);
        });
    }
}

// Add hidden class to categories and search
function hideAll() {
    $('#search-input').addClass("search__input--hidden")
    $("#categories-labels").addClass("categories-labels--hidden")
}