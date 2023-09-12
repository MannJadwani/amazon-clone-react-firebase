/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require('cors')

const stripe = require("stripe")('sk_test_51NpW2kSH364fmD4D3bQ5jdBoa8XJwniZpYyV3sFCkIV19TU18EwJhGs2FZhB1NcMxD2MvCohCmvnsyLiJ2PYlaH500hPNoWOAg')

// api 
const app = express();
//app config 

// middlewares
app.use(cors({origin:true}))
app.use(express.json())

//api routes

app.get('/',(request,response)=>{
    response.status(200).send(('hello world'))
})

// listen command 

exports.api = onRequest(app)