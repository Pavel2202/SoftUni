class Bank {
    #bankName

    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);

        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId == personalId);

        if (!customer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = amount;
        }
        else {
            customer.totalMoney += amount;
        }

        if (!customer.hasOwnProperty('transactions')) {
            customer.transactions = [];
        }

        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(x => x.personalId == personalId);

        if (!customer) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= amount;
        customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`);

        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(x => x.personalId == personalId);

        if (!customer) {
            throw new Error(`We have no customer with this ID!`);
        }

        let output = `Bank name: ${this.#bankName}\n`;
        output += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        output += `Customer ID: ${customer.personalId}\n`;
        output += `Total Money: ${customer.totalMoney}$\n`;
        output += `Transactions:\n`;

        for (let index = customer.transactions.length - 1; index >= 0; index--) {
            output += `${index + 1}. ${customer.transactions[index]}\n`;
        }

        return output.trimEnd();
    }
}