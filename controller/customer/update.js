const { executeQuery } = require('../../utils/db');

updateCustomers={updateCustomer: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME
    const startTime = performance.now();
    executeQuery('update CUSTOMER set NAME = ? where ID = ? ',[name, id],
    (err, result) => {
        const endTime=performance.now();
        if (!err) {
            res.send({
                success: true,
                message: "Data updated successfully",
                startTime:  performance.now(),
                endTime:performance.now() ,
                totalTime: endTime - startTime,
          });
        } else {
            console.error(err);
            res.status(500).send('Error updating data');
        }
    }
    )
}};

module.exports = updateCustomers;

