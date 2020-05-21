import {Joke} from "./Joke.js"
$(populateCategories);
function populateCategories(){
    let keys = Object.keys(localStorage);
    for(let key of keys) {
        let joke = JSON.parse(localStorage[key])
        joke = new Joke(joke.id, joke.value, joke.updateAt, joke.category);
        joke.appendJoke(true)
    }
       
}