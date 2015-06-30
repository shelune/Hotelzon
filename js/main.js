$(document).ready(function() {
    var containsArray = function(elem, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (elem.join('') == arr[i].join('')) {
            return true;
        }
    }
    return false;
    };

    var userPass = [['user1', 'pass1'], ['user2', 'pass2'], ['user3', 'pass3']];
    $('button.login').click(function(){
        var username = $('input[name="username"]').val().toString();
        var password = $('input[name="password"]').val().toString();
        var test = [username, password];
        if (containsArray(test, userPass)) {
            alert("AUTHORIZED!");
        } else {
            $('input[name="username"]').css("box-shadow", "inset 0 0 5px red");
            $('input[name="password"]').css("box-shadow", "inset 0 0 5px red");
            alert("INCORRECT USERNAME OR PASSWORD!");
        }
    });
});