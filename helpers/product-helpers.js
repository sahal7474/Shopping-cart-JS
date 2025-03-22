const db = require('../config/connection')
let collection = require('../config/collections')
const { ObjectId } = require('mongodb');

module.exports={

    addProduct:(product,callback)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            console.log(data.insertedId.toString());
            callback(data.insertedId.toString())
        })
    },

    getAllProducts:() => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.PRODUCT_COLLECTION).find().toArray() // Convert the cursor to an array
            .then(data => {
                    resolve(data); // Resolve the promise with the data
                })
                .catch(err => {
                    reject(err); // Reject the promise with the error
                });
        });
    },

    deleteProducts:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:ObjectId.createFromHexString(productId)}).then((response)=>{
                resolve(response);
            })
        })
    },

    getProductDetails:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:ObjectId.createFromHexString(productId)}).then((product)=>{
                resolve(product)
            })
        })
    },

    updateProduct:(productId,product)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:ObjectId.createFromHexString(productId)},{
                $set:{
                    productName:product.productName,
                    category:product.category,
                    price:product.price,
                    description:product.description
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
    
}