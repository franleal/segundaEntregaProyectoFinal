const contenedor = require("../../container/mongodb")


class CarritoMongoDb extends contenedor {
    constructor() {
        super('carrito', {
            productos:{type:[], required:true}
        })
    }
    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }

}
module.exports = CarritoMongoDb