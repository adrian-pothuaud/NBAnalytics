# How to import data to a local MongoDB database ?
- run ```mongod```
- ```mongoimport -h localhost -d nbanalytics -c Actions --file Actions.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Game --file Game.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Player --file Player.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Team --file Team.json --type json
