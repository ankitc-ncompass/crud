const express = require('express');
const app = express();
const router=express.Router();
const bookgetController=require('../controller/Books/select')
const bookinsertController=require('../controller/Books/insert')
const bookupdateController=require('../controller/Books/update')
const bookdeleteController=require('../controller/Books/delete')



app.use('/',router);

router.get('/bookdata',bookgetController.getBook)
router.post('/insertBook',bookinsertController.insertBook)
router.patch('/updateBook',bookupdateController.updateBook)
router.delete("/deleteBook",bookdeleteController.deleteBook)

module.exports=router;

