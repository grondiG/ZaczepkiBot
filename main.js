const poke = () => {
    let pokesNum = 0;
    let pokes = document.querySelectorAll('span');
    pokes.forEach(poke => {
        if (poke.innerHTML == 'Odpowiedz na zaczepkę') {
            pokesNum++;
            poke.click();
        }
    });
    if (pokesNum > 0) {
        console.log(`klikneto ${pokesNum} zaczepek`);
        setTimeout(poke, 10000);
    }
    else if (pokesNum == 0) {
        setTimeout(poke, 2000);
    }
}
poke();
