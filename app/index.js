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
    .engine('ejs', require('express-ejs-extend')) // add this line
    .set('views', './views') // views folder
    .set('view engine', 'ejs') // view engine
    // routes
    .get('/', (req, res) => {
      // retrouver les teams
      db.collection('teams').find().toArray((err, teams) => {
        if (err) return console.log(err);
        // retrouver les Games
        db.collection('games').find().toArray((err, games) => {
          if (err) return console.log(err);
          // retrouver les Players
          db.collection('players').find().toArray((err, players) => {
            if (err) return console.log(err);
            // retrouver les Actions
            db.collection('actions').find().toArray((err, actions) => {
              if (err) return console.log(err);
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
      db.collection('teams').findOne({'TeamId':parseInt(req.params.TeamId)}, (err, team) => {
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
          db.collection('games').findOne({'GameId':parseInt(req.params.GameId)}, (err, game) => {
            if (err) return console.log(err);
            // find team 1
            db.collection('teams').findOne({'TeamId': parseInt(game.Team1Id)}, (err, team1) => {
              if (err) return console.log(err);
              db.collection('teams').findOne({'TeamId': parseInt(game.Team2Id)}, (err, team2) => {
                if (err) return console.log(err);
                db.collection('actions').find({'GameId': game.GameId}).toArray((err, actions) => {
                  if (err) return console.log(err)
                  db.collection('players').find({}).toArray((err, players) => {
                    if (err) return console.log(err)
                    res.render("pages/gameDetails", {"game": game, 'team1': team1, 'team2': team2, 'actions': actions, 'players': players});
                  })
                })
              })
            })
          })
        })
    .get("/actions", (req, res) => {
      db.collection('actions').find().toArray((err, actions) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/actions", {"actions": actions})
      })
    })
    .get("/actions/:id", (req, res) => {
      db.collection('actions').findOne({'_id': parseInt(req.params.id) }, (err, action) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/actionDetails", {"action": action})
      })
    })
    .get("/players", (req, res) => {
      db.collection('players').find().toArray((err, players) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/players", {"players": players})
      })
    })
    .get("/players/:PlayerId", (req, res) => {
      db.collection('players').findOne({'PlayerId':parseInt(req.params.PlayerId)}, (err, player) => {
        if (err) return console.log(err);
        // process team
        res.render("pages/playerDetails", {"player": player})
      })
    })

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
})
