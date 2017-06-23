const fs = require('fs');

// const duLieu = fs.readFileSync('data.txt', 'utf8');
// console.log(duLieu);

// fs.readFile('data.txt', 'utf8', (err, data) => {
//     console.log(data);
// });

// function binhPhuong(filename) {
//     const num = fs.readFileSync(filename, 'utf8');
//     return num * num;
// }

// console.log(binhPhuong('data.txt'));

function binhPhuong(filename, cb) {
    fs.readFile(filename, 'utf8', (err, data) => {
        //100 dong
        if (err) return cb(err, null);
        cb(null, data * data);
    });
}

binhPhuong('dat.txt', (error, result) => {
    if (error) console.log(error);
    console.log('Ket qua la: ' + result);
});
