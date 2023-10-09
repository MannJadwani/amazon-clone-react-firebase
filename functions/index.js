const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')({origin:true})

const app = express();
app.use(cors);  //Cross Origin Resource Sharing
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hello');
  });


exports.app = functions.https.onRequest(app);