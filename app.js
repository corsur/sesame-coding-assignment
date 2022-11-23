var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

const client = new mongodb.MongoClient('mongodb://localhost:27017');


async function main() {
    await client.connect();
    const db = client.db('couponUsernames');

    var app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__dirname, 'public')));

    app.post('/post-username', function (req, res) {
        console.log('in post-username')
        delete req.body._id; // for safety reasons
        db.collection('usernames').insertOne(req.body);
        res.send('Send code iamhuman to the following discord: https://discord.gg/hmJjzWBv');
    });

    console.log("listening on localhost:3000")
    app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
}
  
main()
  .then(console.log)
  .catch(console.error)
  //.finally(() => client.close());