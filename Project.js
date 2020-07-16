" use strict ";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const firsq = prompt("Один из последних просмотреных фильмов ?", ""),
            secondq = prompt("На сколько оцените его ?");
        personalMovieDB.movies[firsq] = secondq;
        if (firsq != null && secondq != null && firsq != '' && secondq != '' && firsq.length < 50) {
            personalMovieDB[firsq] = secondq;
            console.log("Done");

        } else {
            i--;
            console.log("Error");
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
/*function showMyDB() {
    if(personalMovieDB.private==false){
console.log(personalMovieDB);
    }
}*/

function writeYourGeners() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGeners();

