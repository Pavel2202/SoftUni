function solve(cards) {
    let output = [];
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    for (let currentCard of cards) {
        let face = currentCard.slice(0, currentCard.length - 1);
        let suit = currentCard.slice(currentCard.length - 1, currentCard.length);

        if (!faces.includes(face) || !suits[suit]) {
            console.log(`Invalid card: ${currentCard}`);
        }

        output.push(`${face}${suits[suit]}`);
    }

    console.log(output.join(' '));
}