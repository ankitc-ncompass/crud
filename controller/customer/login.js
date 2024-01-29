const { executeQuery } = require('../../utils/db');
const jwt = require('jsonwebtoken');

const login = async (req, res,next) => {
    try {
        const id = req.params.id;
        //console.log(id)
        // Query the database to check if the user exists
        const user = await getUserById(id);
        

        if (user) {
            // User found, generate JWT token
            const token = jwt.sign({ userId: user.ID, username: user.NAME }, 'secret', { expiresIn: '1h' });
            res.json({ token });
        } else {
            // User not found
            //res.status(401).json({ message: 'Invalid user ID.' });
            // Create an error object and pass it to the next middleware (error handler)
            const error = new Error('User not found');
            // error.statusCode = 401;
             throw error
        }
    } catch (error) {
        //console.log(error.stack);
        // res.status(500).json({ message: 'Internal Server Error' });
        next(error);
    }   
};

const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        executeQuery('SELECT * FROM CUSTOMER WHERE ID = ?', [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result[0]);
                console.log(result[0]);
            }
        });
    });
};

module.exports = login;