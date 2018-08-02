/*
    Nous avons utilisé WAMP pour hebergé les données en SQL
    puis ce fichier a été exécuté en local en tant que "index.js"
*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nbanalytics'
});
var writeFile = require('write');

connection.connect();
 
connection.query("SELECT * FROM actions", function (error, results, fields) {
    if (error) throw error;

    var Actions = [];
    
    results.forEach(function(result) {
        var ActionX = new Object();
        fields.forEach(function(field) {
            ActionX[field.name] = result[field.name];
            
        }, this);
        Actions.push(ActionX);
    }, this);

    writeFile('actions.json', JSON.stringify(Actions), function(err) {
        if (err) console.log(err);
    });
    
});

connection.query("SELECT * FROM game", function (error, results, fields) {
    if (error) throw error;

    var Games = [];
    
    results.forEach(function(result) {
        var GameX = new Object();
        fields.forEach(function(field) {
            GameX[field.name] = result[field.name];
            
        }, this);
        Games.push(GameX);
    }, this);

    writeFile('games.json', JSON.stringify(Games), function(err) {
        if (err) console.log(err);
    });
    
});

connection.query("SELECT * FROM player", function (error, results, fields) {
    if (error) throw error;

    var Players = [];
    
    results.forEach(function(result) {
        var PlayerX = new Object();
        fields.forEach(function(field) {
            PlayerX[field.name] = result[field.name];
            
        }, this);
        Players.push(PlayerX);
    }, this);

    writeFile('players.json', JSON.stringify(Players), function(err) {
        if (err) console.log(err);
    });
    
});

connection.query("SELECT * FROM team", function (error, results, fields) {
    if (error) throw error;

    var Teams = [];
    
    results.forEach(function(result) {
        var TeamX = new Object();
        fields.forEach(function(field) {
            TeamX[field.name] = result[field.name];
            
        }, this);
        Teams.push(TeamX);
    }, this);

    writeFile('teams.json', JSON.stringify(Teams), function(err) {
        if (err) console.log(err);
    });
    
});
 
connection.end();