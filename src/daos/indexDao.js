import  dotenv  from 'dotenv'
dotenv.config()

let productosDAO
let carritoDAO

switch (process.env.VAL) {
    case 'json':
        const{default:productosDaoArchivo} = await import ('./productos/productosDaoFs')
        const{default:carritoDaoArchivo} = await import ('./carritos/carritoDaoFs')
        
        productosDAO =  new productosDaoArchivo()
        carritoDAO =  new carritoDaoArchivo()

        break;

    case 'firebase':
        const{default:productosDaoFirebase} = await import ('./productos/productosDaoFirebase')
        const{default:carritoDaoFirebase} = await import ('./carritos/carritoDaoFirebase')
        
        productosDAO =  new productosDaoFirebase()
        carritoDAO =  new carritoDaoFirebase()

        break;

    case 'mongodb':
        const{default:productosDaoMongoDB} = await import ('./productos/productosDaoMongoDB')
        const{default:carritoDaoMongoDB} = await import ('./carritos/carritoDaoMongoDb')
            
        productosDAO =  new productosDaoMongoDB()
        carritoDAO =  new carritoDaoMongoDB()
    
        break;
}