const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://rivalheriyan2:rivalheriyan2@cluster0.bsxsvpw.mongodb.net/test";
const client = new MongoClient(uri);
let database;

async function connect() {
  try {
    await client.connect();
    database = client.db("TestData");
  } catch (err) {
    console.log(err);
  }
}

function getDatabase() {
  return database;
}

module.exports = {
  connect,
  getDatabase
};
