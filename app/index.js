// NPM Dependencies
const express = require('express')
const MongoClient = require('mongodb').MongoClient

// Constants
const PORT = process.env.PORT || 5000
const app = express()

// vars
var db

// db connection
MongoClient.connect("mongodb://owner:esilv123@ds123946.mlab.com:23946/nbanalytics", (err, client) => {
  if (err) return console.log(err)
  db = client.db('nbanalytics')
  // App configuration
  app
    .use(express.static('public')) // public folder
    .set('views', 'views') // views folder
    .set('view engine', 'ejs') // view engine
    // routes
    .get('/', (req, res) => {
      // retrouver les teams
      db.collection('teams').find().toArray((err, teams) => {
        if (err) return console.log(err);
        console.log("Finding teams...");
        console.log(teams[0]);
        // retrouver les Games
        db.collection('games').find().toArray((err, games) => {
          if (err) return console.log(err);
          console.log("Finding games...");
          console.log(games[0]);
          // retrouver les Players
          db.collection('players').find().toArray((err, players) => {
            if (err) return console.log(err);
            console.log("Finding playes...");
            console.log(players[0]);
            // retrouver les Actions
            db.collection('actions').find().toArray((err, actions) => {
              if (err) return console.log(err);
              console.log("Finding actions...");
              console.log(actions[0]);
              // renders index.ejs
              res.render('pages/index', {
                'teams': teams,
                'actions': actions,
                'players': players,
                'games': games
              })
            })
          })
        })
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
    .get("/teams", (req, res) => {
      db.collection('teams').find().toArray((err, teams) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/teams", {"teams": teams})
      })
    })
    .get("/teams/:TeamId", (req, res) => {
      db.collection('teams').find({'TeamId':req.params.TeamId}).toArray((err, team) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/teamDetails", {"team": team})
      })
    })
    .get("/games", (req, res) => {
      db.collection('games').find().toArray((err, games) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/games", {"games": games})
      })
    })
    .get("/games/:GameId", (req, res) => {
      db.collection('teams').find({'GameId':req.params.GameId}).toArray((err, game) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/gameDetails", {"team": game})
      })
    })
    
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
})

  
