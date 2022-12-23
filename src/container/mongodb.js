const mongoose = require('mongoose')

class MongoDb {

    constructor(collection, schema){
        this.collection = mongoose.model(collection,schema)
    }

    async save(objeto){
        
        let doc = await this.collection.create(objeto)
        console.log(doc)
        console.log("Producto añadido a la base de datos mongoose")
        return doc
        
    }

    
    async getById(id){
        const elemento = await this.collection.findById(id)
        console.log('Elemento encontrado')
        console.log(elemento)
    }

    async getAll(){
        const listaElementos = await this.collection.find()
        console.log("Productos listados desde mongo database")
        console.log(listaElementos)
    }

    async deleteById(id){
        const eliminarElemento = await this.collection.deleteOne({_id: id})
        console.log(eliminarElemento)
    } 

    async deleteAll(){
        const eliminarElementos = await this.collection.deleteMany()
        console.log("Productos eliminados")
        console.log(eliminarElementos)
    }


}

module.exports = MongoDb