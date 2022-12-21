const Contenedor = require('../../container/container')

class Productos extends Contenedor{
    constructor(){
        super('src/db/productos.json')
    }
}

module.exports = Productos