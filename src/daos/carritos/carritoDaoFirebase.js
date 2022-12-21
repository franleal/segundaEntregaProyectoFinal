const config = require("../../config/config")
const contenedor = require("../../container/firebase")

const carritos = new contenedor("carritos")

const crud = async () => {
    await config.initFirebase()
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
    //await carritos.getById("BkbH848eWU3fMkG7w5Ax")
    //await carritos.deleteById("BkbH848eWU3fMkG7w5Ax")
    //await carritos.deleteAll()
}

crud()