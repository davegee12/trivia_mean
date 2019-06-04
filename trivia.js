$(document).ready(function () {
    var container = document.getElementsByClassName('container')
    var sports = document.getElementById('sports');
    var music = document.getElementById('music');
    var animals = document.getElementById('animals');
    var que = document.createElement('p');

    // Music
    $.get("https://opentdb.com/api.php?amount=3&category=12",
        function (data) {
            var li = "";
            for (var i = 0; i < data.results.length; i++) {
                li += `<div class="col">${data.results[i].question}`;
                li += `<p>${data.results[i].incorrect_answers}${data.results[i].correct_answer}</p>`;
                li += `</div>`;
                li += `<br>`;
            }
            $(music).append(li);
        });
    // Sports
    $.get("https://opentdb.com/api.php?amount=3&category=21",
        function (data) {
            var li = "";
            for (var i = 0; i < data.results.length; i++) {
                li += `<div class="col">${data.results[i].question}`;
                li += `<p>${data.results[i].incorrect_answers}${data.results[i].correct_answer}</p>`;
                li += `</div>`;
                li += `<br>`;
            }
            $(sports).append(li);
        });
    // Animals
    $.get("https://opentdb.com/api.php?amount=3&category=27",
        function (data) {
            var li = "";
            for (var i = 0; i < data.results.length; i++) {
                li += `<div class="col">${data.results[i].question}`;
                li += `<p>${data.results[i].incorrect_answers}${data.results[i].correct_answer}</p>`;
                li += `</div>`;
                li += `<br>`;
            }
            $(animals).append(li);
        });
});


// question.innerHTML = `${data.results[i].question}`;
//                     category1.appendChild(question);
//                     console.log(data.results[i].question);