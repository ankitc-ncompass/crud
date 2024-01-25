const { executeQuery } = require('../../utils/db');

getCustomerss={getCustomer : (req, res) => {
    executeQuery('select * from CUSTOMER',[],(err,results)=>{
        if(err){
            console.log(err);
    }else{
        res.send(results)
    }}
    )
    
}}

module.exports=getCustomerss;