const config = require("../../config/config")
const contenedor = require("../../container/mongodb")

const carritos = new contenedor("carritos", {
    timestamp: {type: String, require: true, max: 100},
    productos: {type: Array, require: true}
})

const crud = async () => {
    await config.initMongoDB()
    await carritos.save({timestamp: 1669247247165,products: [{
        timestamp:1669247247165,
        title:"tomate",
        description:"verdura",
        code:463112,
        image:"https://i.ibb.co/W3fLgxV/tomato-facts.jpg",
        price:250,
        stock:30
    }]})
    //await carritos.getAll()
    //await carritos.getById("63978a0b5f16cfcd9378ba7b")
    //await carritos.deleteAll()
    //await carritos.deleteById("63978a0b5f16cfcd9378ba7b")
}

crud()