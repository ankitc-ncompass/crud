const express = require('express');
const app = express();
const router=express.Router();
const customergetController=require('../controller/customer/select')
const customerinsertController=require('../controller/customer/insert')
const customerupdateController=require('../controller/customer/update')
const customerdeleteController=require('../controller/customer/delete')
const validateCustomer= require('../utils/valiadator')
const compressedData=require('../utils/compression')



app.use('/',router);

router.get('/customerdata',customergetController.getCustomer)

//router.get('/customerdata',compressedData.compressedData,customergetController.getCustomer)
router.post('/insertcustomer',validateCustomer.customerValidation,customerinsertController.insertCustomer)
router.patch('/updatecustomer',customerupdateController.updateCustomer)
router.delete("/deletecustomer",customerdeleteController.deleteCustomer)

module.exports=router;


