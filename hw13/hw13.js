const seatNumber = 'Введіть номер місця';
const seat = prompt(seatNumber);
// if (seat <= 36) {
//      compartment = parseInt((seat - 1) / 4 + 1);
// }
//     else {
//          compartment = parseInt((54 - seat) / 2 + 1);
//     } 
const compartment = seat <= 36 ? parseInt((seat - 1) / 4 + 1) : parseInt((54 - seat) / 2 + 1);
const topBottom = seat % 2 == 0 ? `Зверху` : `Знизу`;
const answer = `Ваше місце ${topBottom} в ${compartment} купе`;
alert(answer)