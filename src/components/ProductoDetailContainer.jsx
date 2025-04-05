import { useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import { carritoContext } from "./CarritoContext"
import toast from "react-hot-toast"
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { app } from "../firebaseConfig"

const ProductoDetailContainer = () => {

    const [producto, setResultado] = useState({})
    const params = useParams() 
    const valor = useContext(carritoContext)


    useEffect(() => {

        const idNum = parseInt (params.id)
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const miFiltro = query(productosCollection, where ("id", "==", idNum))
        const miConsulta = getDocs(miFiltro)


        miConsulta
            .then((respuesta) => {
                const productosFormato= []

                respuesta.docs.forEach((doc)=>{
                productosFormato.push(doc.data())

    })

    setResultado(productosFormato[0])
})
    .catch(() => {
            console.log("Salio todo mal")
            })
    }, [])


    const handleClick = async () => {
        
        const productoCarrito = producto
    

        const db = getFirestore(app)
        const carritoCollection = collection(db, "carrito")
        const miConsulta = addDoc(carritoCollection, productoCarrito)

        miConsulta
            .then(() => {
                valor.handleAgregar(producto)
                toast.success("Producto agregado al carrito")
            })
            .catch(() => {
                console.log("Salio todo mal")
            })


    
    }
    return(
        <div className="flex-grow product-detail">
        <h2>{producto.title} - ${producto.price}</h2>
        <img src={producto.thumbnail} alt={producto.title} />
        <p>{producto.description}</p>
        <button onClick={handleClick}>Agregar al Carrito</button>
    </div>
        
    )
}

export default ProductoDetailContainer