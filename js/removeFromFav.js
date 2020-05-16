var $heart;
function removeFromFav(){
    $heart = find("#heart-filled")
    $heart.on("click", removeFromFavListener);
    animate("animate__heartBeat")
}   

function animate(animation){
    var $image = $heart.find("img")
    var animationName = "animate__animated " + animation;
    var animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd";
    $image.addClass(animationName).one(animationend, function(){
        $image.removeClass(animationName)
    });

    var str = "../icon/not-filled-heart.svg";
    if($image.attr("src") != str){
        $image.attr("src", str);
    }
}