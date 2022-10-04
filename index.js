const express = require('express');
const app = express()
const router = express.Router();
const mongoClient = require('mongodb').MongoClient
const cors = require('cors');
app.listen(80, () => {
    console.log('running')
})
router.route('/')
    .get((req, res) => {
    res.send(dependency-check-report.html)
    }
