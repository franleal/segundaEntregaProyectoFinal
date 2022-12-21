const config = require("../../config/config")
const contenedor = require("../../container/mongodb")


const productos = new contenedor("products", {
    timestamp:{type: Number, require: true, max: 100},
    title: {type: String, require: true, max: 100},
    price: {type: Number, require: true},
    thumbnail: {type: String, require: true, max: 100},
    descripcion:{type: String, max: 100},
    codigo:{type: Number, require: true, max: 100},
    stock:{type: Number, require: true, max: 100}
})

const crud = async () => {
    await config.initMongoDB()
    await productos.save({title: "Papa", price: 200, thumbnail: "https://i.ibb.co/LzSXhvs/5ff3e6a0b703f-potatoes-food-supermarket-agriculture-JG7-QGNY.jpg"})
    //await productos.getAll()
    //await productos.getById("639787392d55a93df2e44996")
    //await productos.deleteAll()
    //await productos.deleteById("63979d03f3b9d132c39460c5")
}

crud()