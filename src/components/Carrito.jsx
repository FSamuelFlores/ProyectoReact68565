import { useContext } from "react"
import Formulario from "./Formulario"
import { carritoContext } from "./CarritoContext"
import { app } from "../firebaseConfig";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";


const Carrito = () => {

const valor = useContext(carritoContext)

const handleClick = () => {

const nuevoProducto = {
    category: "muebles",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    id: 11,
    price: 1899.99,
    thumbnail: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
    title: "Annibale Colombo Bed"
    }

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    const miConsulta = addDoc(productosCollection, nuevoProducto)

    miConsulta
    .then(() => {
        console.log("Salio todo bien")
        toast.success("Producto agregado a la base de datos")
    })
    .catch(() => {
        console.log("Salio todo mal")
    })}

const handleClickTraer = () => {
    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
    const query = getDocs(productosCollection)

    query
    .then((resultadoDeLaConsulta) => {
        console.log("Salio todo bien")
        console.log(resultadoDeLaConsulta)
    })
    .catch(() => {
        console.log("Salio todo mal")
    })
}

return (
    <div>
        <h2>Carrito</h2>
        <p>Cantidad de productos: {valor.cantProd}</p>
        <p>Total: ${valor.totalPrecio}</p>
        <ul>
            {valor.carrito.map((item, indice) => {
            return (
            <li key={indice}>
                <p>{item.title} - unidad : ${item.price}</p>
            </li>
                )
            })}
        </ul>
    <Formulario />

    <button onClick={handleClick}>agregar producto a DB</button>
    <button onClick={handleClickTraer}>traer productos de DB</button>
    </div>
)
}

export default Carrito