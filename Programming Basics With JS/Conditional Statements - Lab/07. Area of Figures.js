function solve(input){
    let figure = input[0];
    let area = 0;

    if (figure === "square"){
        let side = Number(input[1]);
        area = side * side;
    }
    else if (figure === "rectangle"){
        let lenght = Number(input[1]);
        let widght = Number(input[2]);
        area = lenght * widght;
    }
    else if (figure === "triangle"){
        let side = Number(input[1]);
        let height = Number(input[2]);
        area = (side * height) / 2;
    }
    else if (figure === "circle"){
        let radius = Number(input[1]);
        area = Math.pow(radius, 2) * Math.PI;
    }
    
    console.log(area.toFixed(3));
}