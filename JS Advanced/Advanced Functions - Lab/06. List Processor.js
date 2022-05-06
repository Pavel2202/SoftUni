function solve(input) {
    let result  =[];

    function manipulate() {
        return {
            add: (text) => {
                result.push(text);
            },
            remove: (text) => {
                result = result.filter(x => x != text);
            },
            print: () => {
                console.log(result.join(','));
            }
        }
    }

    let array = manipulate();

    input
        .map((x) => x.split(' '))
        .map(([command, value]) => array[command](value));
}