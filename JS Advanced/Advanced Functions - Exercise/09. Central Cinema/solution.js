function solve() {
    let moviesTable = document.querySelector('section#movies ul');
    let archivedMoviesTable = document.querySelector('section#archive ul');
    let addMovieButton = document.querySelector('div#container button');
    let clearButton = document.querySelector('section#archive button');

    addMovieButton.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        let movieNameInput = document.querySelector('div#container input[placeholder="Name"]');
        let movieHallInput = document.querySelector('div#container input[placeholder="Hall"]');
        let movieTicketPriceInput = document.querySelector('div#container input[placeholder="Ticket Price"]');

        let movieName = movieNameInput.value;
        let movieHall = movieHallInput.value;
        movieTicketPrice = Number(movieTicketPriceInput.value);

        if (movieName.length > 0 && movieHall.length > 0 && movieTicketPrice > 0) {
            let movieLiElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = movieName;

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${movieHall}`;

            let divElement = document.createElement('div');

            let priceStrongElement = document.createElement('strong');
            priceStrongElement.textContent = `${movieTicketPrice.toFixed(2)}`;

            let inputElement = document.createElement('input');
            inputElement.placeholder = "Tickets Sold";

            let archiveButton = document.createElement('button');
            archiveButton.textContent = "Archive";
            archiveButton.addEventListener('click', archiveMovie);

            divElement.appendChild(priceStrongElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(archiveButton);

            movieLiElement.appendChild(spanElement);
            movieLiElement.appendChild(strongElement);
            movieLiElement.appendChild(divElement);

            moviesTable.appendChild(movieLiElement);

            function archiveMovie() {
                let soldTickets = Number(inputElement.value);
                let totalPrice = soldTickets * movieTicketPrice;

                if (soldTickets >= 0) {
                    movieLiElement.children[2].remove();
                    movieLiElement.children[1].textContent = `Total amount: ${totalPrice.toFixed(2)}`;
    
                    let deleteButton = document.createElement('button');
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener('click', (e) => {
                        e.target.parentNode.remove();
                    });
    
                    movieLiElement.appendChild(deleteButton);
    
                    archivedMoviesTable.appendChild(movieLiElement);
    
                    clearButton.addEventListener('click', () => {
                        let clearMovies = Array.from(archivedMoviesTable.children);
    
                        clearMovies.forEach(x => {
                            x.remove();
                        })
                    })
                }
            }
        }

        movieNameInput.value = '';
        movieHallInput.value = '';
        movieTicketPriceInput.value = '';
    }
}