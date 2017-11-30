# How to import data to a local MongoDB database ?
- run ```mongod```
- ```mongoimport -h localhost -d nbanalytics -c Actions --file Actions.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Game --file Game.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Player --file Player.json --type json```
- ```mongoimport -h localhost -d nbanalytics -c Team --file Team.json --type json
# How to import to mLab database ? 
```mongoimport -h ds123946.mlab.com:23946 -d nbanalytics -c <collection> -u <user> -p <password> --file <input file>```
