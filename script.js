const lightning = document.getElementById('lightning');

function showLightning() {
    lightning.classList.remove('hidden');
    setTimeout(() => {
        lightning.classList.add('hidden');
    }, 200);
}

setInterval(showLightning, Math.random() * 3000 + 2000);
