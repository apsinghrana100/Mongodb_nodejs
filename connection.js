

const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://apsinghrana100:122333Ajay%401@cluster0.8vfjv3v.mongodb.net/Propelius_Mongodbcheetsheet?retryWrites=true&w=majority";


let client;
async function connectToDatabase(){
    try {
        
         client = await MongoClient.connect(connectionString);
         console.log("connetectd to database")
        
        return client;

    } catch (error) {
        console.error('Error connecting to the database:', error);
          throw error;
    }
        
}

async function getDatabaseClient() {
    if (!client) {
      await connectToDatabase();
    }
    return client.db("abc");
  }
  
  module.exports = { getDatabaseClient , connectToDatabase};