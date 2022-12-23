const contenedor = require("../../container/mongodb")
const config = require("../../config/config")

class ProductoDaoMongoDB extends contenedor {
    constructor() {
        super('productos',{
            timestamp:{type: Number, require: true, max: 100},
            title: {type: String, require: true, max: 100},
            price: {type: Number, require: true},
            thumbnail: {type: String, require: true, max: 100},
            descripcion:{type: String, max: 100},
            codigo:{type: Number, require: true, max: 100},
            stock:{type: Number, require: true, max: 100}
        })
    }
    
}

config.initMongoDB()
module.exports = ProductoDaoMongoDB

