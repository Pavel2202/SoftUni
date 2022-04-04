function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(" ");

        let name = current[0];
        let age = Number(current[1]);

        
        let cat = new Cat(name, age);
        cat.meow();
    }
}