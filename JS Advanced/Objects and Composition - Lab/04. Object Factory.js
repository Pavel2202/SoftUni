function factory(library, orders) {
    let result = [];

    for (let obj of orders) {
        let order = obj.template;

        obj.parts.forEach((part) => {
            order[part] = library[part];
        })

        result.push(order);
    }

    return result;
}