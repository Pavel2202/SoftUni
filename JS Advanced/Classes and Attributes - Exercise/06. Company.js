class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (typeof username != 'string' || username == '' ||
            typeof salary != 'number' || salary < 0 ||
            typeof position != 'string' || position == '' ||
            typeof department != 'string' || department == '') {
                throw new Error('Invalid input!');
        }
        
        let tempEmployee = {
            username,
            salary,
            position,
        }

        if (this.departments[department]) {
            this.departments[department].push(tempEmployee);
        } else {
            this.departments[department] = [tempEmployee];
        }

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = { averageSalary: 0 };

        for (let department in this.departments) {
            const totalSalary = this.departments[department]
                .reduce((acc, value) => acc += (value.salary), 0);

            const currentAverage = totalSalary / this.departments[department].length;

            if (currentAverage > bestDepartment.averageSalary) {
                bestDepartment.averageSalary = currentAverage;
                bestDepartment.department = department;
            }
        }

        const sortedEmployees = this.departments[bestDepartment.department]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

        const employeesToPrint = [];

        for (let employee of sortedEmployees) {
            employeesToPrint.push(`${employee.username} ${employee.salary} ${employee.position}`);
        }

        return `Best Department is: ${bestDepartment.department}\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}\n${employeesToPrint.join('\n')}`;
    };
}