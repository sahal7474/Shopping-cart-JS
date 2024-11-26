const db = require('../config/connection')
let collection = require('../config/collections')

module.exports={

    addProduct:(product,callback)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            console.log(data.insertedId.toString());
            callback(data.insertedId.toString())
        })
    },

    getAllProducts: () => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).find().toArray() // Convert the cursor to an array
            .then(data => {
                    resolve(data); // Resolve the promise with the data
                })
                .catch(err => {
                    reject(err); // Reject the promise with the error
                });
        });
    }
    
}