const express = require('express');
const multer = require('multer');

function fileFilter(req, file, cb) {
    const { mimetype } = file;
    if (mimetype === 'image/png' || mimetype === 'image/jpeg') {
        return cb(null, true);
    }
    // cb(null, false);
    cb(new Error('Loi dinh dang file!'));
}

const limits = {
    fileSize: 100 * 1024
};

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public');
    },
    filename(req, file, cb) {
        cb(null, req.body.username + file.originalname);
    }
});

const upload = multer({ storage, fileFilter, limits }).single('avatar');

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

// app.use((err, req, res, next) => {
//     res.send('CO LOI');
// });

app.listen(3000, () => console.log('Server started!'));
