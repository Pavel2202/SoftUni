function solve(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    let output = ``;

    for (let room = 0; room < roomsPerFloor; room++) {
        output += `L` + floors + room + ` `;
    }

    console.log(output);

    output = ``;

    for (let floor = floors - 1; floor >= 1; floor--) {
        output = ``;
        for (let room = 0; room < roomsPerFloor; room++) {
            if (floor % 2 == 0) {
                output += `O` + floor + room + ` `;
            }
            else {
                output += `A` + floor + room + ` `;
            }
        }
        console.log(output);
    }
}