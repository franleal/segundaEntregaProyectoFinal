const Contenedor = require('../../container/carrito')

class Carrito extends Contenedor{
    constructor(){
        super('src/db/carrito.json')
    }
}

module.exports = Carrito