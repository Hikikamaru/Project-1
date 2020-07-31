" use strict ";
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB = +prompt("Сколько фильмов вы посмотрели?");
        while (personalMovieDB == '' || personalMovieDB == null || isNaN(personalMovieDB)) {
            personalMovieDB = +prompt("Сколько фильмов вы посмотрели?");

        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function( privat){
        if(personalMovieDB.privat){
           
        }else{
            personalMovieDB.privat=true;
        }

    },
    writeYourGeners:()=> {
        for (let i = 1; i <= 3; i++) {

            let genre = prompt(`Ваш любимый жанр под номером${i}`);
            if (genre === '' || genre == null) {
                i--;
            }else{
                personalMovieDB.genres[i - 1] = genre;
            }
           
        }
        personalMovieDB.genres.forEach ((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
    };









