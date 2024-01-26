const express = require('express');
const app = express();
const router=express.Router();
const bookgetController=require('../controller/Books/select')
const bookinsertController=require('../controller/Books/insert')
const bookupdateController=require('../controller/Books/update')
const bookdeleteController=require('../controller/Books/delete')
const validateBook= require('../utils/valiadator')
const compressedData=require('../utils/compression')



app.use('/',router);

router.get('/bookdata',compressedData.compressedData,bookgetController.getBook)
//router.get('/bookdata',bookgetController.getBook)

router.post('/insertBook',validateBook.bookValidation,bookinsertController.insertBook)
router.patch('/updateBook',bookupdateController.updateBook)
router.delete("/deleteBook",bookdeleteController.deleteBook)

module.exports=router;

