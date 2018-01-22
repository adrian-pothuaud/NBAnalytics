// NPM Dependencies
const express = require('express')
const MongoClient = require('mongodb').MongoClient

// Constants
const PORT = process.env.PORT || 5000
const app = express()

// vars
var db

// db connection
MongoClient.connect("mongodb://owner:esilv123@ds123946.mlab.com:23946/nbanalytics", (err, database) => {
  if (err) return console.log(err)
  db = database.db('nbanalytics')
  // App configuration
  app
    .use(express.static('public')) // public folder
    .set('views', 'views') // views folder
    .set('view engine', 'ejs') // view engine
    // routes
    .get('/', (req, res) => {
      db.collection('teams').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('pages/index', {teams: result})
      })
    })
    .get('/home', (req, res) => {
      res.render("pages/home")
    })
    .get('/predictions', (req, res) => {
      res.render("pages/predictions")
    })
    .get("/about",function(req,res){
      res.render("pages/about")
    })
    .get("/contact",function(req,res){
      res.render("pages/contact")
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
})

  
