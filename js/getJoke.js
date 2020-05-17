$(init);
var $btn, $radio, $checked;

function init(){
    $btn = $('#get-btn');
    $radio =  $(".radio input[type='radio']");
    $btn.on("click", btnClickHendler);
}

function btnClickHendler(){
    $checked = $('.radio input[type="radio"]:checked');
    getJoke()
}

function getJoke(){
    url = "//api.chucknorris.io/jokes/random" 
    $.ajax({
        url: url,
        type: "GET",
    });
    jqxhr.done(function( msg ) {
        
          alert( "Data Saved: " + msg );
        
        });
        
    jqxhr.fail(failureHandler);
}

function successHandler(){
    alert(msg)
}
