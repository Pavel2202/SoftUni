function solve(width, height, color) {
    function calcArea() {
        return width * height;
    }

    color = color[0].toUpperCase() + color.slice(1);

    return {
        width, 
        height, 
        color,
        calcArea
    }
}
