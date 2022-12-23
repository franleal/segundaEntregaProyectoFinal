//Modules - Class
require('dotenv').config()


const Carrito = require('./daos/carritos/carritoDaoFs')
const carritoMongoose = require(process.env.MONGODB_CART)
const carritoFirebaseContainer = require(process.env.FIREBASE_CART)
const Contenedor = require('./daos/productos/productosDaoFs')
const contenedorMongo = require(process.env.MONGODB)
const contenedorFirebase = require(process.env.FIREBASE) 



const express = require('express')
const { Router } = express
const app = express()


const productos = new Contenedor()
const carrito = new Carrito()
const carritoMongo = new carritoMongoose()
const carritoFirebase = new carritoFirebaseContainer()
const productosMongo = new contenedorMongo()
const productosFirebase = new contenedorFirebase()





//Routes
const productosRuta = Router()
const carritoRuta = Router()



//Admin
const admin = true

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/productos', productosRuta)
app.use('/api/carrito', carritoRuta)

const PORT = 8080

//Endpoints de productos
productosRuta.get('/', (req, res) => {
    productosFirebase.getAll()
    productosMongo.getAll()
    productos.getAll().then(response => {
        res.send(response)
    })
})

productosRuta.post('/', async (req, res) => {
    const producto = req.body;
    await productosFirebase.save(producto)
    await productosMongo.save(producto)
    await productos.save(producto)
    res.send({msj: `Product ${producto.title} has been added`})
})

productosRuta.delete('/:id', (req, res) => {
    const id = (req.params.id)
    productosMongo.deleteById(id)
    productos.deleteById(id)
    res.send({msj: `Product with ID ${id} was deleted`})
})

productosRuta.get('/:id', async (req, res) => {
    const id =(req.params.id)
    productosFirebase.getById(id)
    productosMongo.getById(id)
    productos.getById(id).then(response => {
        res.send(response)
    })
})

productosRuta.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = await productos.getById(id)
    const productoNuevo = {
        id: id,
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    };
    await productos.deleteById(id)
    await productos.save(productoNuevo)
    res.send({msj: `Product ${producto.title} has been updated`})
}) 


//Endpoints de carrito
carritoRuta.post('/', async (req, res) => {
    await carritoFirebase.save()
    await carritoMongo.save()
    res.send(await carrito.save())
})

carritoRuta.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    res.send(await carrito.deleteById(id))
})

carritoRuta.get('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    res.send(await carrito.getById(id))
})

carritoRuta.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id)
    const producto = req.body;
    res.send(await carrito.saveProduct(id, producto))
})

carritoRuta.delete('/:id/productos/:idProd', async (req, res) => {
    const idCarrito = parseInt(req.params.id)
    const idProducto = parseInt(req.params.idProd)
    res.send(await carrito.deleteProduct(idCarrito, idProducto))
})

//Manejo de errores
app.use((req, res, next) => {
    res.status(404).send({error: -2, descripcion: `Route ${req.url} method ${req.method} hasn't been implemented`});
});

const server = app.listen(PORT, ()=>{
    console.log(`Server started at: http://localhost:${server.address().port}`)
})
server.on("error", error => console.log(error))