const mongoose = require('mongoose')
const admin = require("firebase-admin");
const serviceAccount = require("../../backend-project-56d2d-firebase-adminsdk-39qet-5458e5904f.json");


async function initMongoDB() {
    try {
        const url = "mongodb://localhost:27017/ecommerce"
            mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Server MongoDB Iniciado")
    } catch (error) {
        console.log(error)
    }
}

async function initFirebase(){
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://backend-project-56d2d.firebaseio.com'
    });
    console.log("Server Firebase Iniciado")
}

module.exports = {initMongoDB, initFirebase}