import { Joke } from "./Joke.js"
$(populateFav);
function populateFav() {
    let jokesArr = localStorage.getItem("ChuckNorisJokes") ? JSON.parse(localStorage.getItem("ChuckNorisJokes")) : []

    jokesArr.forEach(item => {
        const joke = new Joke(item.id, item.value, item.updateAt, item.category);
        joke.appendJoke(true)
    })
}