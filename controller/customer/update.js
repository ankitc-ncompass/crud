const { executeQuery } = require('../../utils/db');
const jwt = require('jsonwebtoken');

const updateCustomers = {
    updateCustomer: (req, res) => {
        let id;
        const token = req.header('Authorization');

        try {
            // Use synchronous version of jwt.verify to throw an error if the token is invalid
            const decoded = jwt.verify(token, 'secret');
            id = decoded.userId;
            //console.log('User ID:', id);
        } catch (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        let name = req.body.NAME;
        const startTime = performance.now();
        executeQuery('update CUSTOMER set NAME = ? where ID = ? ',[name, id], (err, result) => {
            try{
            const endTime = performance.now();
            if (!err) {
                res.send({
                    success: true,
                    message: "Data updated successfully",
                    startTime:  performance.now(),
                    endTime: performance.now(),
                    totalTime: endTime - startTime,
                });
            } else {
                const error = new Error('Error updating data');
                throw error
            }}
            catch(err){
                next(err);
            }
        });
    }
};

module.exports = updateCustomers;
