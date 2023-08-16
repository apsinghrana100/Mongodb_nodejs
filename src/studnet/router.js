const express = require("express");
const router = express.Router();
const stundetController = require('./controller');




//fetch all value from the collections.
router.get("/",stundetController.fetchData);


//insert user data to into the collections.
router.post("/addData", stundetController.addData);


//insert bulk data to into the collection;

router.post("/StudnetBulkaddData",stundetController.addBulkData);


//update a single value

router.patch("/updateRecord/:id" ,stundetController.updateData);

//deleting the records

router.delete("/deleteCollection/:id",stundetController.deleteDocument);

// fetch are record ,whose age is greater then 25;

router.post("/testing",(async(req,res)=>{
    const output = req.body;
    console.log(output);
    res.end();
}))



module.exports = router;