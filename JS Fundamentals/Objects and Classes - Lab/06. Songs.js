function solve(input) {
    let n = input[0];
    let printType = input[input.length - 1];

    class Song {
        constructor(type, name, duration) {
            this.type = type;
            this.name = name;
            this.duration = duration;
        }
    }

    let songs = [];

    for (let i = 1; i < input.length - 1; i++) {
        let data = input[i].split("_");

        let type = data[0];
        let name = data[1];
        let duration = data[2];

        let song = new Song(type, name, duration);

        songs.push(song);
    }

    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];

        if (printType == song.type || printType == "all") {
            console.log(song.name);
        }
    }
}