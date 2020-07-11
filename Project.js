" use strict ";
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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
console.log(personalMovieDB);


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if  (personalMovieDB.count>=10 && personalMovieDB.count<30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count>=30) {
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}