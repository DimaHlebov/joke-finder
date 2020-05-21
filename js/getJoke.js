import { Joke } from "./Joke.js";
window.jokes = [];

$(function(){
    $('#get-btn').on("click", btnClickHandler);
});

function btnClickHandler(){
    // Before finding a joke remove existed
    $('#found-jokes').empty()
    window.jokes = []
    // Chek what radio chosen and getJoke
    let checkedId = $('.radio input[type="radio"]:checked').attr('id');
    if(checkedId == "categories-opt"){
        let category = $('.categories-labels input[type="radio"]:checked').next().text();
        if(category !== ""){
            getJoke("random?category="+category+"")
        }
    }else if(checkedId == "search-opt"){
        let query = $('#search-input').val()
        if(query !== ""){
            getJoke("search?query="+query+"")
        }
    }else{
        getJoke();
    }
}
// Get joke from api
function getJoke(param = "random"){
    let url = "https://api.chucknorris.io/jokes/" + param
    $.ajax({
        type: 'GET',
        url: url,
        dataType: "json"
     }).done(function(data){
        // Create object Joke and add to global array
        // Chek if json has attribute result, if not it's has arrays of jokes
        if(data.result === undefined){
           appendJoke(data)
        }else{
            data.result.forEach(j => {
                appendJoke(j)
            });
        }
     }).fail(function(){
        alert("Failed to get a joke")
     });
}

function appendJoke(j){
    let joke = new Joke(j.id, j.value, j.updated_at, j.categories);
    joke.appendJoke();
    jokes.push(joke);
}



