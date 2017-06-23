const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public');
    },
    filename(req, file, cb) {
        cb(null, 'a.png');
    }
});

const upload = multer({ storage });

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/upload', upload.single('avatar'), (req, res) => res.send('upload thanh cong'));

app.listen(3000, () => console.log('Server started!'));
