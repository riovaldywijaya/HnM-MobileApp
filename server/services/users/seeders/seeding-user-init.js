const { MongoClient } = require('mongodb');
const docs = require('./user-init.json');

// const mongo_uri = 'mongodb://127.0.0.1:27017';
const mongo_uri = process.env.URI_MONGO_ATLAS;
// const mongo_uri = 'mongodb+srv://riovaldy1:JUBbJ6KNPEEuhJ7d@cluster0.6qrj7zn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(mongo_uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('p3_c2_db');
    const users = database.collection('users');

    const options = { ordered: true };
    const result = await users.insertMany(docs, options);
    console.log(result);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
