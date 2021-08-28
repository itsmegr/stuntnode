const MongoClient = require("mongodb").MongoClient;
import mongodb from "mongodb"
let mongoClient: any;

const mongoConnect = (callback: () => void) => { 
  new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .connect()
    .then((client: any) => {
      console.log("Connected to MongoDB Operation");
      mongoClient = client;
      callback();
    })
    .catch((err: any) => {
      console.log("Mongodb", err.message);
    });
};
const getClient = () => {
  if (mongoClient) {
    return mongoClient;
  }
  throw "No Mongo Client Found";
};
const getMongoClient = getClient
export { mongoConnect, getMongoClient, mongodb };