function qs(selector) {
    return document.querySelector(selector);
}
qs('.solution-result').onclick = function () {
    let originalString = qs('.solution-input').value;
    originalString = originalString.trim();
    let wordsFromStrig = originalString.split(' ');
    let result = wordsFromStrig[0].length;
    for (let index = 0; index < wordsFromStrig.length; index++) {
        if (result > wordsFromStrig[index].length) {
            result = wordsFromStrig[index].length;
        }
    }
    qs('.solution-result').innerText = result;
}

qs('.dnk-solution-result').onclick = function () {
    let originalString = qs('.dnk-solution-input').value;
    originalString = originalString.toUpperCase();
    let result = '';

    /*! Сначала я делал так.... */
    /*     for (let index = 0; index < originalString.length; index++) {
    
            let x = originalString.substring(index, index + 1);
            console.log(x);
            if (x == 'T') {
                result += 'A';
    
            }
            if (x == 'A') {
                result += 'T';
    
            }
            if (x == 'G') {
                result += 'C';
    
            }
            if (x == 'C') {
                result += 'G';
    
            }
    
        } */
    /* А потом я узнал об этом..... :((( */
    for (const x of originalString) {

        if (x == 'T') {
            result += 'A';

        }
        if (x == 'A') {
            result += 'T';

        }
        if (x == 'G') {
            result += 'C';

        }
        if (x == 'C') {
            result += 'G';
        }
    }
    qs('.dnk-solution-result').innerText = result;
}