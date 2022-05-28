class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        this.spaceAvailable -= spaceRequired;

        let plant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        };

        this.plants.push(plant);
        
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        let plant = this.plants.find(x => x.plantName == plantName);

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        if (!this.plants.some(x => x.plantName == plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        let plant = this.plants.find(x => x.plantName == plantName);

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(this.plants.indexOf(plant), 1);

        let quantity = plant.quantity;

        let storagePlant = {
            plantName,
            quantity
        };

        this.storage.push(storagePlant);

        let spaceRequired = plant.spaceRequired;

        this.spaceAvailable += spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let output = `The garden has ${this.spaceAvailable} free space left.\n`;

        this.plants.sort((a, b) => {
            return a.plantName.localeCompare(b.plantName);
        });

        let plantsInGarden = [];

        for (const plant of this.plants) {
            plantsInGarden.push(plant.plantName);
        }

        output += `Plants in the garden: ${plantsInGarden.join(', ')}\n`;

        if (this.storage.length == 0) {
            output += `Plants in storage: The storage is empty.`;
        }
        else {
            let storagePlantsOutput = [];

            for (const plant of this.storage) {
                storagePlantsOutput.push(`${plant.plantName} (${plant.quantity})`);
            }

            output += `Plants in storage: ${storagePlantsOutput.join(', ')}`;
        }

        return output;
    }
}