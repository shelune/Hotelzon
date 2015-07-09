/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/
"use strict";
$(document).ready(function () {
    var userPass = {
        user: ['user1', 'user2', 'user3'],
        pass: ['pass1', 'pass2', 'pass3']
    },
        username = $('input[name="username"]'),
        password = $('input[name="password"]'),
        containsArray = function () {
            var i;
            for (i = 0; i < userPass.user.length; i += 1) {
                if (username.val() === userPass.user[i] && password.val() === userPass.pass[i]) {
                    return true;
                }
            }
            return false;
        },
        checkValid = function () {
            if (containsArray()) {
                username.removeClass('box-shadow');
                password.removeClass('box-shadow');
                console.log("AUTHORIZED!");
            } else {
                username.addClass('box-shadow');
                password.addClass('box-shadow');
                console.log("FAIL");
            }
        };


    $('.login').click(function () {
        checkValid();
    });
    $('.right-login input').keypress(function (e) {
        if (e.which === 13) {
            checkValid();
        }
    });
    $(password).keypress(function (e) {
        if (username.val().length < 1 && password.val().length < 1) {
            console.log("EMPTY USERNAME!");
            username.addClass('box-shadow');
        }
    });
});
