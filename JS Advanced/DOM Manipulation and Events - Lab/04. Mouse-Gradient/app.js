function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        const percent = Math.floor(e.offsetX / gradient.clientWidth * 100);
        const output = `${percent}%`;

        result.textContent = output;
    });
}