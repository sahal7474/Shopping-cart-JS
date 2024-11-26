const mongoClient = require('mongodb').MongoClient

const state={
    db:null
}

module.exports.connect = function (done) {
    const url = 'mongodb://127.0.0.1:27017'; // Use 127.0.0.1
    const dbname = 'shopping';

    mongoClient.connect(url)
    .then(client => {
        state.db = client.db(dbname)
        done()
    })
    .catch(err => {
      done(err)
    });

}

module.exports.get=function(){
    return state.db
}