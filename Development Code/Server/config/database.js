var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0-vuocy.mongodb.net/codeword')
.then(() => {
    console.log('DB Connected');
}, err => {
    console.log(err);
});
