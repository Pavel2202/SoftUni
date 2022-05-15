function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const line of input) {
        const data = line.split('|');

        const destination = data[0];
        const price = Number(data[1]);
        const status = data[2];

        let ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    }

    if (criteria == 'destination') {
        tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    }
    else if (criteria == 'price') {
        tickets.sort((a, b) => {
            return a.price - b.price;
        })
    }
    else {
        tickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    }

    return tickets;
}