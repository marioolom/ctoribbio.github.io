//Método1: AJAX por POST con $.ajax
//$(function() {
//    $("button").click(function() {
//        $.ajax({
//            type: "POST",
//            url: "post-ajax.php",
//            data: {name: "Óscar", location: "Pamplona"},
//            success: function(html, status) {
//                alert("Data: " + html + "\nWe can receive the status as well: " + status);
//            }
//        });
//    });
//});

//Método2: AJAX por POST con $.post
$(document).ready(function () {
    $("button").click(function () {
        $.post("post-ajax.php",
                {
                    name: "Óscar",
                    location: "Pamplona"
                },
        function (data, status) {
            alert("Data: " + data + "\nWe can receive the status as well: " + status);
        });
    });
});
