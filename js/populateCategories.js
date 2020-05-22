$(populateCategories);
function populateCategories(){
    let url = "https://api.chucknorris.io/jokes/categories"
    $.ajax({
        type: 'GET',
        url: url,
        dataType: "json"
     }).done(function(data){
         let i = 0;
         console.log(data)
         data.forEach(element => {
             let category = '<input type="radio" id="radio'+i+'" name="radios"/><label class="categories-labels__item" for="radio'+i+'">'+element+'</label>'
             $(category).appendTo("#categories-labels");
             i++;
         });
        
     }).fail(function(){
         alert("Failed to get joke")
     });
}