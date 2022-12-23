const contenedor = require("../../container/firebase")

class CarritoFirebase extends contenedor {
    constructor() {
        super('carrito', {
            productos:{type:[],required:true}
        })
    }
    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }

}
module.exports = CarritoFirebase

