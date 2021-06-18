"use strict";
var log = document.querySelector('#log');
var username = document.querySelector('#username');
log.innerHTML = '';
username.addEventListener('keyup', function (e) {
    log.innerHTML = e.target.value;
});
console.log(log.innerHTML);
console.log(username.value);
