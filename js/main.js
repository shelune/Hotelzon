/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";
$(document).ready(function () {
    var userPass = {
        user: ['user1', 'user2', 'user3'],
        pass: ['pass1', 'pass2', 'pass3']
    },
        containsArray = function () {
            var username = $('input[name="username"]').val(),
                password = $('input[name="password"]').val(),
                i;
            for (i = 0; i < userPass.user.length; i += 1) {
                if (username === userPass.user[i] && password === userPass.pass[i]) {
                    return true;
                }
            }
            return false;
        },
        checkValid = function () {
            if (containsArray()) {
                console.log("AUTHORIZED!");
            } else {
                $('input[name="username"]').css("box-shadow", "inset 0 0 5px red");
                $('input[name="password"]').css("box-shadow", "inset 0 0 5px red");
                console.log("FAIL");
            }
        };


    $('button.login').click(function () {
        checkValid();
    });
    $('.right-login input').keypress(function (e) {
        if (e.which === 13) {
            checkValid();
        }
    });
});
