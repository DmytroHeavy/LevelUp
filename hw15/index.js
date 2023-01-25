const out = document.querySelector(".answer p");
document.querySelector('.button').onclick = function() {
    let enteredText = document.querySelector('.input-box').value 
    enteredText = enteredText.trim();
    let oneWord = enteredText.split(' ');
    let result = oneWord[0].length;
    for (let i = 0; i < oneWord.length; i+=1) {
            if (result > oneWord[i].length) {
            result = oneWord[i].length;
        }
    }
    out.innerText = `"${enteredText}" -- > ${result}`;
}
