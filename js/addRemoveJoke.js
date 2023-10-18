export function addRemoveJoke() {
    $(".heart").on("click", addRemoveJokeHandler);
}
const animationend = "animationend webkitAnimationEnd oanimationend MSAnimationEnd";
const filledHeart = "icon/filled-heart.svg";
const notFilledHeart = "icon/not-filled-heart.svg";

function addRemoveJokeHandler(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    animate("animate__heartBeat", $(this))
    let jokeBlock = $(this).parent().parent();
    let jokeId = jokeBlock.attr("id")
    // Chek if joke block id has id. If has -> favourite joke, if not -> found joke
    if (typeof jokeId !== typeof undefined && jokeId !== false) {
        removeFromFav(jokeId)
    } else {
        // Chek if img path is filled heart (filled becaues pictures changes before actions)
        if ($(this).attr("src") === filledHeart) {
            let jIndex = jokeBlock.index();
            addToFav(jIndex);
        }
    }
}
// Append joke to favourite block and store in local storage
function addToFav(jIndex) {
    let favJoke = window.jokes[(parseInt(jIndex, 10))];
    const jokesArr = localStorage.getItem("ChuckNorisJokes") ? JSON.parse(localStorage.getItem("ChuckNorisJokes")) : []

    if (!jokesArr.some(obj => obj.id === favJoke.id)) {
        favJoke.appendJoke(true);
        jokesArr.push(favJoke)
        localStorage.setItem("ChuckNorisJokes", JSON.stringify(jokesArr));
    }
}

// Remove joke from favourite block and local storage
function removeFromFav(jokeId) {
    $("#" + jokeId).addClass("animate__animated animate__backOutRight").one(animationend, function () { $(this).remove() });
    const jokesArr = localStorage.getItem("ChuckNorisJokes") ? JSON.parse(localStorage.getItem("ChuckNorisJokes")) : []

    jokesArr.filter(item => !item.id === jokeId)
    console.log(jokesArr)
    localStorage.setItem("ChuckNorisJokes", jokesArr);
}

// Change picture of heart (filled/not filled) and animate
function animate(animation, $image) {
    if ($image.attr("src") === notFilledHeart) {
        $image.attr("src", filledHeart);
    } else {
        $image.attr("src", notFilledHeart);
    }

    let animationName = "animate__animated " + animation;
    $image.addClass(animationName).one(animationend, function () {
        $image.removeClass(animationName)
    });
}

