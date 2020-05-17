$(init);
var $btn, $radio, $checked;

function init(){
    $btn = $('#get-btn');
    $radio =  $(".radio input[type='radio']");
    $btn.on("click", btnClickHendler);
}

function btnClickHendler(){
    $checked = $('.radio input[type="radio"]:checked');
}

function getJoke(){
    url = "//api.chucknorris.io/jokes/random" 
    var getJoke = $.ajax({
        url: url,
        type: "GET", 
        data: {},
        dataType: "json",
        jsonp: "callback"
    });
    jqxhr.done(successHandler);
    jqxhr.fail(failureHandler);
}

function successHandler(){
    alert(data)
}
