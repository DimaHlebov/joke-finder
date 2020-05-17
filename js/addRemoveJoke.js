$(init);
var $heart;
var $filledHeart;
var animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd"; 
function init(){
    $heart = $("#heart-n-filled")
    $heart.on("click", addToFavHendler);
}

function addToFavHendler(){
    animate("animate__heartBeat", $heart, "icon/filled-heart.svg")
    addToFav()
    $filledHeart = $("#heart-filled")
    $($filledHeart).on('click', removeFromFavHendler);
}
// Append joke to favourite block and store in local storage
function addToFav(){
    var htmlJoke = '<div id="joke1" class="joke-block joke-block--small joke-block--white animate__animated animate__backInRight">' +
                    '<div class="joke-block__heart" id="heart-filled"><img src="icon/filled-heart.svg" alt="Add to favourite"></div>' +
                    '<div class="joke-wrapper">' +
                        '<div class="message">' +
                           '<div class="message__circle"><img src="icon/message.svg" alt="Message icon"></div>' +
                        '</div>' +
                        '<div class="joke">' +
                            '<div class="joke__id">ID: <a href="#">XNaAxUduSw6zANDaIEab7A</a></div>' +
                            '<p class="joke__text">No one truly knows who\'s Chuck Norris\' real father. No one is biologically ' +
                                'strong enough for this. He must\'ve conceived himself.</p>' +
                            '<div class="joke__update">Last update: 1923 hours ago</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    $(htmlJoke).appendTo(".favourite").show();
}

// Change picture of heart (filled, not filled) and animate
function animate(animation, $heart, src){
    var $image = $heart.find("img")
    
    var animationName = "animate__animated " + animation;
    $image.addClass(animationName).one(animationend, function(){
        $image.removeClass(animationName)
    });
    
    if($image.attr("src") != src){
        $image.attr("src", src);
    }
}

// Remove from joke from favourite block and local storage
function removeFromFavHendler(){
    animate("animate__heartBeat", $filledHeart, "icon/not-filled-heart.svg")
    $("#joke1").addClass("animate__animated animate__backOutRight").one(animationend, function(){
        $(this).remove()
    });
}