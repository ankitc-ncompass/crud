//require('dotenv').config()
const express = require('express');
const app = express();
const auth=require('./router/authorRouter')
const book=require('./router/bookRouter')
const customer=require('./router/customerRouter')
const { executeQuery, conn } = require('./utils/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth',auth)
app.use('/book',book)
app.use('/customer',customer)




app.listen(3000, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Server running on port 3000');
    }
});

conn.connect((err) => {
    if (!err) console.log('Database is connected');
});

app.get('/', (req, res) => {
    res.send('hello world');
});


