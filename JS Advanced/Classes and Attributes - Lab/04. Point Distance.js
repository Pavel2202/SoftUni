class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        let a = pointOne.x - pointTwo.x;
        let b = pointOne.y - pointTwo.y;

        let c = Math.sqrt(a ** 2 + b ** 2);

        return c;
    }
}