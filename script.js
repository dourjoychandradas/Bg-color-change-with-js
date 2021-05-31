// JavaScript Document
let inputField = document.querySelector('input');

let body = document.querySelector('body');

let button = document.querySelector('button');

button.addEventListener('click', function() {
  body.style.backgroundColor =
    inputField.value;
})