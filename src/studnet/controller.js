
const {getDatabaseClient} = require('../../connection');

const { MongoClient, ObjectId } = require('mongodb');

const  databaseRelatedInformation= async ()=>{
    const client = await getDatabaseClient();
    // const db = client.db("abc"); // optimization
    return client.collection("xyz");
  }


//fetching student reccord from the collections.
exports.fetchData = (async(req,res)=>{
   
    const collection = await databaseRelatedInformation();
   
     try {
         const output = await collection.find().toArray();
         console.log(output);
         res.status(200).json(output);
     } catch (error) {
         console.error('Error inserting data:', error);
         throw error;
     }
 });


 // Adding single data into database.

 exports.addData = (async(req,res)=>{  
   
    const collection = await databaseRelatedInformation();
    const  {name,age} = req.body;
      try {
       const output = await collection.insertOne({"name":name,"age":age});
        console.log(output);
        res.status(200).send({msg:"Inserted Successfully",output});
      } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
      }
  });


  //adding multiple data into collection.
  exports.addBulkData = (async(req,res)=>{  
   
    const collection = await databaseRelatedInformation();
    const  BulkStudentData = req.body;
      try {
       const output = await collection.insertMany(BulkStudentData);
        console.log(output);
        res.status(200).send({msg:"Inserted Successfully",output});
      } catch (error) {
        console.error('Error inserting data:', error);
        throw error;
      }
  });



  //updating the single records
  exports.updateData = (async(request,response)=>{
        try {
            const collection = await databaseRelatedInformation();
            const output = await collection.updateOne({
               _id : new ObjectId(request.params.id) 
            },
            {
                $set:{
                    name:request.body.name
                }
            })
            response.status(200).json({msg:"update success",output});
        } catch (error) {
            console.log(error);
        }

  })


  //delete the record the form the database.

  exports.deleteDocument = (async(req,res)=>{
    const collection = await databaseRelatedInformation();
    try {
            const output =  await collection.deleteOne(
                {
                    _id : new ObjectId(req.params.id)
                });
                res.status(200).json({message: "Delete successfully",output});
    } catch (error) {
        console.log(error);
    }
  })


  //Search : - fetch the record of all student whose age is greater then 25;
  
  exports.searchAge = (async(req,res)=>{
    
  })