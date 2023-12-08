function toggleSVG() {
    const svgContainer = document.querySelector('.svg-container');
    const svg1 = svgContainer.querySelector('.svg1');
    const svg2 = svgContainer.querySelector('.svg2');

    if (svg1.style.display === 'block') {
        svg1.style.display = 'none';
        svg2.style.display = 'block';
    } else {
        svg1.style.display = 'block';
        svg2.style.display = 'none';
    }
}
function checkAndRedirect() {
    // Sélectionnez les cases à l'aide de leur ID
    const V2 = document.getElementById('V2');
    const V3 = document.getElementById('V3');
    const V6 = document.getElementById('V6');
            if (V2.checked && V3.checked && V6.checked) {
                // Redirigez l'utilisateur vers une nouvelle page
                window.location.href = 'transifin.html';
            } else {
                // Rechargez la page actuelle
                location.reload();
            }
}
function updateTextSize(size) {
    document.body.style.fontSize = size + 'px';
    document.getElementById('currentSize').innerText = size + 'px';
}