// function perform(fn) {
//     fn();
// }
// try {
//     perform(5);
// } catch (e) {
//     console.log(e.toString());
// }
// console.log(1000);

// setTimeout(() => console.log('Het 3s'), 3000);
// console.log('AAAA');

let i = 5;
setTimeout(() => ++i, 3000);
console.log(i);
