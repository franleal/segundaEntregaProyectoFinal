const config = require("../../config/config")
const contenedor = require("../../container/firebase")

const productos = new contenedor("products")


const crud = async () => {
    await config.initFirebase()
    await productos.save({title: "Papa", price: 200, thumbnail: "https://i.ibb.co/LzSXhvs/5ff3e6a0b703f-potatoes-food-supermarket-agriculture-JG7-QGNY.jpg"})
    // await productos.getAll()
    // await productos.getById("qA1wrmaL9rcUY4yHIEZH")
    // await productos.deleteById("qA1wrmaL9rcUY4yHIEZH")
    // await productos.deleteAll()
}

crud()