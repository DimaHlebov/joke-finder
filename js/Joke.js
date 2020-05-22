import { addRemoveJoke } from "./addRemoveJoke.js"
export class Joke{
    #filledHeart;
    #notFilledHeart;

    constructor(id, value, update, category){
        this.id = id;
        this.value = value;
        this.updateAt = update;
        let timeSince = Math.floor((new Date() - new Date(this.updateAt)) / 3600000);
        this.update = timeSince+" hours"
        this.category = category;
        this.#filledHeart = "icon/filled-heart.svg";
        this.#notFilledHeart = "icon/not-filled-heart.svg";
    }

    // For favourite joke generate one style, for found another
    generateDOM(isFav = false){
        let domCategory = "";
        let jokeStyle = "animate__animated animate__backInLeft";
        let id = ""
        let img = this.#notFilledHeart
        if(isFav === false){
            if(typeof this.category !== undefined && this.category.length > 0){
                domCategory = `<div class="joke__category">${this.category[0]}</div>`;
            }
            // If id exists in local storage render heart filled for found joke
            if (localStorage[this.id]) {
                img = this.#filledHeart
            }
            
        }else{
            jokeStyle = "joke-block--white joke-block--small animate__animated animate__backInRight";
            id = `id=${ this.id }`;
            img = this.#filledHeart
        }
        
        let domJoke = `<div ${id} class="joke-block ${jokeStyle}">
                            <div class="joke-block__heart"><img class="heart" src="${img}" alt="Add to favourite"></div>
                            <div class="joke-wrapper">
                                <div class="message">
                                <div class="message__circle"><img src="icon/message.svg" alt="Message icon"></div>
                                </div>
                                <div class="joke">
                                    <div class="joke__id">ID: <a href="https://api.chucknorris.io/jokes/${ this.id }">${this.id}</a></div>
                                    <p class="joke__text"> ${this.value} </p>
                                    <div class="update-wrapper">
                                        <div class="joke__update">Last update: ${this.update}</div> 
                                        ${domCategory} 
                                    </div>
                                </div>
                            </div>
                        </div>`;
        return domJoke;
    }

    // Create dom element and render joke depending on whether it's favourite, or found joke 
    appendJoke(isFav = false){
        if(isFav === false){
            $(this.generateDOM(isFav)).appendTo("#found-jokes");
        }else{
            $(this.generateDOM(isFav)).appendTo("#favourite");
        }
        // add handler to heart img
        addRemoveJoke();
    }

}
