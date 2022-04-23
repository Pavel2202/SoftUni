function solve(first, second) {
    let smallest = 0;

    if (first < second) {
        smallest = first;
    }
    else {
        smallest = second;
    }

    let gcd = 0;

    for (let i = 1; i <= smallest; i++) {
        if (first % i == 0 && second % i == 0) {
            gdc = i;
        }
    }

    console.log(gdc);
}