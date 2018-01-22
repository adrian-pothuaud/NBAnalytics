module.exports = {
    "Create": function (db, newTeamObject) {
        db.collection('inserts').insertOne({a:1}, function(err, r) {
            
    },
    "List": function (db) {
        db.collection('teams').find().toArray((err, result) => {
            if (err) return console.log(err)
            // renders index.ejs
            return result
        })
    },
    "Search": function (db, teamId) {
        db.collection('teams').find( { "TeamId": teamId } ).toArray((err, result) => {
            if (err) return console.log(err)
            // renders index.ejs
            return result
        })
    },
    "Update": function (db, teamId, modificationsObject) {
        
    }
}