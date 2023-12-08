function checkValues() {
var input1 = document.getElementById('number-input').value;
var input2 = document.getElementById('number-input2').value;
var input3 = document.getElementById('number-input3').value;
var input4 = document.getElementById('number-input4').value;

// Vérifiez si les valeurs sont respectivement 1, 2, 3 et 4
if (input1 === '1' && input2 === '2' && input3 === '3' && input4 === '4') {
    // Affichez le bouton
    document.getElementById('hiddenButton').style.display = 'block';
    document.getElementById('result').innerHTML = 'Les valeurs sont correctes!';
}
    else if (input1 === '1' && input2 === '9' && input3 === '9' && input4 === '6') {
        // Redirection vers la page NSFW
        window.location.href = 'https://matias.ma/nsfw/';
    }

else {
    // Cachez le bouton
    document.getElementById('hiddenButton').style.display = 'none';
    document.getElementById('result').innerHTML = 'Veuillez entrer les bonnes valeurs.';

    // Vérifiez si la valeur est 1996

}
}