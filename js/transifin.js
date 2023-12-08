document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loadingText = document.getElementById("loading-text");
        var solarSystemContainer = document.getElementById("solar-system-container");
        var hiddenButton = document.getElementById("hiddenButton");

        if (loadingText) {
            loadingText.style.display = "none";
        }

        if (solarSystemContainer) {
            solarSystemContainer.style.display = "flex";
        }

        if (hiddenButton) {
            hiddenButton.style.display = "block";
            hiddenButton.addEventListener("click", function() {
                // Rediriger vers la page "Fin"
                window.location.href = "fin.html"; // Assurez-vous de remplacer "fin.html" par le chemin de votre page finale
            });
        }
    }, 3000);
});
