const dotenv = require('dotenv');
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, './config/.env') });
const express = require('express');
const app = express();
const auth=require('./router/authorRouter')
const book=require('./router/bookRouter')
const customer=require('./router/customerRouter')
const errHandler=require('./utils/errorHandler')
//const { executeQuery, conn } = require('./utils/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth',auth)
app.use('/book',book)
app.use('/customer',customer)
//app.use(errHandler);




app.listen(3000, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server running on port 3000');
    }
});

// conn.connect((err) => {
//     if (!err) console.log('Database is connected');
// });

app.get('/', (req, res) => {
    res.send('hello world');
});


