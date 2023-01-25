
// function n1(a, b){
// for ( let n = a +1; n < b; n += 1){
//     console.log(n)
//     }
// }
// n1(0, 46)
draw(4, 't');
function draw(width, symb) {
    let line = '';
    for (let i = 0; i < width; i += 1){
        line += symb; 
    }
    console.log(line);
};
