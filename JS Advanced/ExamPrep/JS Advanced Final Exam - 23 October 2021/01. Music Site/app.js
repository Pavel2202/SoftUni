window.addEventListener('load', solve);

function solve() {
    const addButton = document.querySelector('#add-btn');
    const songsCollection = document.querySelectorAll('.all-hits-container')[0];
    const savedSongs = document.querySelectorAll('.saved-container')[0];
    let totalLikes = 0;
    let likesParagraph = document.querySelector('.likes p');
    likesParagraph.textContent = `Total Likes: ${totalLikes}`;

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let genreInput = document.querySelector('#genre');
        let genre = genreInput.value;

        let nameInput = document.querySelector('#name');
        let name = nameInput.value;

        let authorInput = document.querySelector('#author');
        let author = authorInput.value;

        let dateInput = document.querySelector('#date');
        let date = dateInput.value;

        if (genre && name && author && date) {
            let songDiv = document.createElement('div');
            songDiv.classList.add('hits-info');

            let image = document.createElement('img');
            image.src = "./static/img/img.png";

            let genreHeader = document.createElement('h2');
            genreHeader.textContent = `Genre: ${genre}`;

            let nameHeader = document.createElement('h2');
            nameHeader.textContent = `Name: ${name}`;

            let authorHeader = document.createElement('h2');
            authorHeader.textContent = `Author: ${author}`;

            let dateHeader = document.createElement('h3');
            dateHeader.textContent = `Date: ${date}`;

            let saveSongButton = document.createElement('button');
            saveSongButton.textContent = 'Save song';
            saveSongButton.classList.add('save-btn');

            saveSongButton.addEventListener('click', (e) => {
                e.preventDefault();

                e.target.parentNode.remove();

                let savedSongDiv = document.createElement('div');
                savedSongDiv.classList.add('hits-info');

                let savedImage = document.createElement('img');
                savedImage.src = "./static/img/img.png";

                let savedGenreHeader = document.createElement('h2');
                savedGenreHeader.textContent = `Genre: ${genre}`;

                let savedNameHeader = document.createElement('h2');
                savedNameHeader.textContent = `Name: ${name}`;

                let savedAuthorHeader = document.createElement('h2');
                savedAuthorHeader.textContent = `Author: ${author}`;

                let savedDateHeader = document.createElement('h3');
                savedDateHeader.textContent = `Date: ${date}`;

                let savedDeleteButton = document.createElement('button');
                savedDeleteButton.textContent = 'Delete';
                savedDeleteButton.classList.add('delete-btn');

                savedDeleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.parentNode.remove();
                })

                savedSongDiv.appendChild(savedImage);
                savedSongDiv.appendChild(savedGenreHeader);
                savedSongDiv.appendChild(savedNameHeader);
                savedSongDiv.appendChild(savedAuthorHeader);
                savedSongDiv.appendChild(savedDateHeader);
                savedSongDiv.appendChild(savedDeleteButton);

                savedSongs.appendChild(savedSongDiv);
            })

            let likeSongButton = document.createElement('button');
            likeSongButton.textContent = 'Like song';
            likeSongButton.classList.add('like-btn');

            likeSongButton.addEventListener('click', (e) => {
                e.preventDefault();

                likeSongButton.disabled = true;

                totalLikes++;
                likesParagraph.textContent = `Total Likes: ${totalLikes}`;
            })

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');

            deleteButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentNode.remove();
            })

            songDiv.appendChild(image);
            songDiv.appendChild(genreHeader);
            songDiv.appendChild(nameHeader);
            songDiv.appendChild(authorHeader);
            songDiv.appendChild(dateHeader);
            songDiv.appendChild(saveSongButton);
            songDiv.appendChild(likeSongButton);
            songDiv.appendChild(deleteButton);

            songsCollection.appendChild(songDiv);

            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';
        }
    })
}