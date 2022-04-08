function solve(input) {
    let guests = [];

    let partyIndex = input.indexOf("PARTY");
    let invited = input.slice(0, partyIndex);
    let came = input.slice(partyIndex + 1, input.length);

    for (let guest of invited) {
        guests.push(guest);
    }

    for (let guest of came) {
        let index = guests.indexOf(guest);

        guests.splice(index, 1);
    }

    let vips = guests.filter(g => g.charCodeAt(0) >= 48 && g.charCodeAt(0) <= 57);

    for (let vip of vips) {
        let index = guests.indexOf(vip);
        guests.splice(index, 1);
    }

    console.log(guests.length + vips.length);

    for (let vip of vips) {
        console.log(vip);
    }

    for (let guest of guests) {
        console.log(guest);
    }
}