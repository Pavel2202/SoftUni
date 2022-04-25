function createAssemblyLine() {
    let assemblyLine = {
        hasClima: (object) => {
            object.temp = 21,
            object.tempSettings = 21,
            object.adjustTemp = () => {
                if (object.temp < object.tempSettings) {
                    object.temp++;
                }
                else if (object.temp > object.tempSettings) {
                    object.temp--;
                }
            }
        },
        hasAudio: (object) => {
            object.currentTrack = {
                name: null,
                artist: null
            },
            object.nowPlaying = () => {
                if (object.currentTrack.name != null && object.currentTrack.artist != null) {
                    console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                }
            }
        },
        hasParktronic: (object) => {
            object.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                }
                else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                }
                else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep! Beep!");
                }
                else {
                    console.log();
                }
            }
        } 
    }

    return assemblyLine;
}
