class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(x => x.name == name)) {
           return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.indexOf(x => x.name == name), 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participantOneName, participantTwoName) {
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(x => x.name == participantOneName) || !this.listOfParticipants.some(x => x.name == participantTwoName)) {
                throw new Error(`Invalid entered name/s.`);
            }

            let participantOne = this.listOfParticipants.find(x => x.name == participantOneName);
            let participantTwo = this.listOfParticipants.find(x => x.name == participantTwoName);

            if (participantOne.condition != participantTwo.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (participantOne.power > participantTwo.power) {
                participantOne.wins++;
                return `The ${participantOneName} is winner in the game ${typeOfGame}.`;
            }
            else if (participantOne.power < participantTwo.power) {
                participantTwo.wins++;
                return `The ${participantTwoName} is winner in the game ${typeOfGame}.`;
            }
            else {
                return `There is no winner.`;
            }
        }
        else {
            if (!this.listOfParticipants.some(x => x.name == participantOneName)) {
                throw new Error(`Invalid entered name/s.`);
            }

            let participant = this.listOfParticipants.find(x => x.name == participantOneName);

            participant.power += 20;

            return `The ${participantOneName} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;

        this.listOfParticipants.sort((a, b) => {
            return b.wins - a.wins;
        })

        for (const participant of this.listOfParticipants) {
            output += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
        }

        return output.trimEnd();
    }
}