const { executeQuery } = require('../../utils/db');
//const customerSchema = require('../../utils/valiadator')


insertCustomers={insertCustomer: (req, res) => {
    let id = req.body.ID;
    let name = req.body.NAME;
    let address=req.body.ADDRESS
    const startTime = performance.now();
    executeQuery('INSERT INTO CUSTOMER (ID, NAME, ADDRESS) VALUES(?,?,?)',[id,name,address],
    (err,results)=>{
        const endTime=performance.now();
        if(!err){
            res.send({
                success: true,
                message: "Data inserted successfully",
                startTime:  performance.now(),
                endTime:performance.now() ,
                totalTime: endTime - startTime,
          });
            
    }else{
        console.log(err);
        res.status(500).send("error while inserting data")
    }})
}
};

module.exports = insertCustomers;