var helloDAW1 = function () {
    $.get("get-ajax1.php",
            function (data) {
                $("body").html(data);
                //$("body").append(data);
            }
    );
};

var helloDAW2 = function () {
    //Esta sería la llamada "larga"
    /*$.ajax({
     type: "GET",
     url: "get-ajax.php",
     data: "name=Óscar&location=Pamplona",
     success: function(html){
     $("#resultsId").append(html);
     }
     
     });*/

    //Y esta es la forma abreviada
    $.get("get-ajax2.php",
            {name: "Óscar", location: "Pamplona"},
    function (data) {
        $("#resultsId").html(data);
    }
    );


};

//Esto es lo primero que se ejecuta
//Es lo mismo que: $( document ).ready(function() {
$(function () {
    $('body a').on('click', function () {
        helloDAW1();
    });
});
