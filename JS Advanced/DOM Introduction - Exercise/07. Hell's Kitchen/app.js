function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let result = [];

      let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      for (let line of input) {
         let data = line.split(' - ');

         let restaurantName = data[0];

         let workersData = data[1].split(', ');
         let totalWorkers = workersData.length;

         let averageSalary = 0;
         let bestSalary = 0;

         let workers = [];

         if (result.some(x => x.restaurantName == restaurantName)) {
            let currentRestaurant = result.find(x => x.restaurantName == restaurantName);

            totalWorkers += currentRestaurant.workers.length;
            averageSalary = currentRestaurant.averageSalary * currentRestaurant.workers.length;
            bestSalary = currentRestaurant.bestSalary;
            workers = currentRestaurant.workers;
         }

         for (let workerData of workersData) {
            workerData = workerData.split(' ');

            let workerName = workerData[0];
            let workerSalary = Number(workerData[1]);

            let worker = {
               workerName,
               workerSalary
            };

            workers.push(worker);

            averageSalary += workerSalary;

            if (bestSalary < workerSalary) {
               bestSalary = workerSalary;
            }
         }

         averageSalary = averageSalary / totalWorkers;

         let restaurant = {
            restaurantName: restaurantName,
            averageSalary: averageSalary,
            bestSalary: bestSalary,
            workers: workers
         };

         if (result.some(x => x.restaurantName == restaurant.restaurantName)) {
            let index = result.findIndex(x => x.restaurantName == restaurant.restaurantName);

            result.splice(index, 1, restaurant);
         }
         else {
            result.push(restaurant);
         }

      }

      let sortedRestaurants = result.sort((a, b) => {
         let aAverageSalary = a.averageSalary;
         let bAverageSalary = b.averageSalary;

         return bAverageSalary - aAverageSalary;
      });

      let bestRestaurant = sortedRestaurants[0];

      let outputBestRestraurant = document.querySelector('#bestRestaurant p');
      outputBestRestraurant.textContent = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let outputBestWorkers = document.querySelector('#workers p');

      let sortedWorkers = bestRestaurant.workers.sort((a, b) => {
         return b.workerSalary - a.workerSalary;
      })

      for (let worker of sortedWorkers) {
         outputBestWorkers.textContent += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `
      }
   }
}