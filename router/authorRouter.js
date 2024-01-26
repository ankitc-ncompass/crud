const express = require('express');
const app = express();
const router=express.Router();
const authorgetController=require('../controller/Author/select')
const authorinsertController=require('../controller/Author/insert')
const authorupdateController=require('../controller/Author/update')
const authordeleteController=require('../controller/Author/delete')
const validateAuthor= require('../utils/valiadator')



app.use('/',router);

router.get('/authordata',authorgetController.getAuthor)
router.post('/insertAuthor',validateAuthor.authorValidation,authorinsertController.insertAuthor)
router.patch('/updateAuthor',authorupdateController.updateAuthor)
router.delete("/deleteAuthor",authordeleteController.deleteAuthor)

module.exports=router;

