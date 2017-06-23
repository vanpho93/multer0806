const express = require('express');
const upload = require('./uploadConfig').single('avatar');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) return res.send('Co loi');
        console.log(req.file);
        res.send('upload thanh cong');
    });
});

app.listen(3000, () => console.log('Server started!'));
