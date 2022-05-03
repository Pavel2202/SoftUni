function lockedProfile() {
    const profiles = document.getElementsByClassName('profile');
    const hiddenDivs = document.querySelectorAll('div.profile div');

    for (let i = 0; i < profiles.length; i++) {
        let profile = profiles[i];

        let lockedRadioButton = profile.children[2];
        let unlockedRadioButton = profile.children[4];

        let showMoreButton = profile.children[profile.children.length - 1];

        showMoreButton.addEventListener('click', () => {
            const hiddenDiv = hiddenDivs[i];

            if (unlockedRadioButton.checked) {
                if (showMoreButton.textContent == 'Show more') {
                    hiddenDiv.id = '';
                    showMoreButton.textContent = 'Hide it';
                }   
                else if (showMoreButton.textContent == 'Hide it') {
                    hiddenDiv.id = `user${i + 1}HiddenFields`;
                    showMoreButton.textContent = 'Show more';
                }             
            }
        })

    }
}