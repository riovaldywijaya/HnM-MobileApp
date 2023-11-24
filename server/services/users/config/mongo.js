const { MongoClient } = require('mongodb');
// const mongo_uri = 'mongodb://127.0.0.1:27017';
const mongo_uri = process.env.URI_MONGO_ATLAS;

let db = null;

async function mongoInit() {
  try {
    const client = new MongoClient(mongo_uri);
    await client.connect();
    db = client.db('p3_c2_db');
    return db;
  } catch (err) {
    console.log(err);
    console.log('gagal connect ke server');
    throw err;
  }
}

function getDB() {
  return db;
}

module.exports = {
  mongoInit,
  getDB,
};
