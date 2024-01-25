const { executeQuery } = require('../../utils/db');

insertCustomers={insertCustomer: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME;
    let address=req.body.ADDRESS

    executeQuery('INSERT INTO CUSTOMER (ID, NAME, ADDRESS) VALUES(?,?,?)',[id,name,address],
    (err,results)=>{
        if(!err){
            res.send("Data inserted successfully")
            
    }else{
        console.log(err);
        res.status(500).send("error while inserting data")
    }})
}
};

module.exports = insertCustomers;