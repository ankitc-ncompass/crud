const { executeQuery } = require('../../utils/db');

deleteCustomers={deleteCustomer: (req, res) => {

    let id = req.body.ID;
    
    executeQuery('delete from Customer where ID = ? ',[id],
    (err, result) => {
        if (!err) {
            res.send('Data DELETED successfully');
        } else {
            console.error(err);
            res.status(500).send('Error deleted data');
        }
    }
    )
}}


module.exports = deleteCustomers;