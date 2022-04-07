function solve(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let movies = [];

    for (let line of input) {
        let data = line.split(" ");

        let command = data[0];
        let movieName;
        let date = " ";
        let director = " ";
        let index;

        if (command == "addMovie") {
            let nameArray = data.slice(1);

            movieName = nameArray.join(" ");

            let movie = new Movie(movieName, director, date);
            movies.push(movie);
        }

        if (data.includes("directedBy")) {
            index = data.indexOf("directedBy");
            data.splice(index, 1);

            let nameArray = data.slice(0, index);
            movieName = nameArray.join(" ");

            if (movies.filter(m => m.name == movieName).length <= 0) {
                continue;
            }

            let directorArray = data.slice(index, data.length);
            director = directorArray.join(" ");

            let movieIndex = movies.findIndex(m => m.name == movieName);
            movies[movieIndex].director = director;
        }
        else if (data.includes("onDate")) {
            index = data.indexOf("onDate");
            data.splice(index, 1);

            let nameArray = data.slice(0, index);
            movieName = nameArray.join(" ");

            if (movies.filter(m => m.name == movieName).length <= 0) {
                continue;
            }

            date = data[data.length - 1];

            let movieIndex = movies.findIndex(m => m.name == movieName);
            movies[movieIndex].date = date;
        }
    }

    for (let movie of movies) {
        if (movie.date == " " || movie.director == " ") {
            continue;
        }

        let json = JSON.stringify(movie);

        console.log(json);
    } 
}