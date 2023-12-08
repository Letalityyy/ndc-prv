function toggleSVG() {
    const svgContainer = document.querySelector('.svg-container');
    const svg1 = svgContainer.querySelector('.svg1');
    const svg2 = svgContainer.querySelector('.svg2');
    const audio = document.getElementById('audio');

    if (svg1.style.display === 'block') {
        svg1.style.display = 'none';
        svg2.style.display = 'block';
        // Démarrez le son
        audio.play();
    } else {
        svg1.style.display = 'block';
        svg2.style.display = 'none';
        // Arrêtez le son
        audio.pause();
        audio.currentTime = 0; // Rembobinez le son au début
    }
}
function checkAndRedirect() {
    // Sélectionnez les cases à l'aide de leur ID
    const V2 = document.getElementById('V2');
    const V3 = document.getElementById('V3');
    const V6 = document.getElementById('V6');
    const V1 = document.getElementById('V1');
    const V4 = document.getElementById('V4');
    const V5 = document.getElementById('V5');
            if (V2.checked && V3.checked && V6.checked && !V1.checked && !V4.checked && !V6.checked) {
                // Redirigez l'utilisateur vers une nouvelle page
                window.location.href = 'transifin.html';
            } else {
                // Rechargez la page actuelle
                alert("Mauvaisse reponse");
                location.reload();
            }
}
function updateTextSize(size) {
    document.body.style.fontSize = size + 'px';
    document.getElementById('currentSize').innerText = size + 'px';
}