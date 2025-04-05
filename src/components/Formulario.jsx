import { useState } from "react"
import Input from "./Input"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import toast from "react-hot-toast"
import { app } from "../firebaseConfig"


function Formulario() {

    const [valorDelInputNombre, setValorDelInputNombre] = useState("")
    const [valorDelInputEmail, setValorDelInputEmail] = useState("")
    const [valorDelInputTelefono, setValorDelInputTelefono] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("El usuario escribio : " + valorDelInputNombre + " " + valorDelInputEmail + " " + valorDelInputTelefono)
    }

    const handleInputValueNombre = (data) => {
        setValorDelInputNombre(data)
    }
    const handleInputValueEmail = (data) => {
        setValorDelInputEmail(data)
    }
    const handleInputValueTelefono = (data) => {
        setValorDelInputTelefono(data)
    } 
    
    const handleClick = async () => {
    
    
        const db = getFirestore(app)
        const carritoCollection = collection(db, "carrito")
        const miConsulta = addDoc(carritoCollection, nuevoProducto)

        miConsulta
            .then(() => {
                valor.handleAgregar(producto)
                toast.success ("Producto agregado al carrito")
            })
            .catch(() => {
                console.log("Salio todo mal")
            })
        }


    return (
        <div>
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre" >Nombre</label>
                    <Input
                        onInputValue={handleInputValueNombre}
                    />
                </div>
                <div>
                    <label htmlFor="nombre" >Email</label>
                    <Input
                        onInputValue={handleInputValueEmail}
                    />
                </div>
                <div>
                    <label htmlFor="nombre" >Telefono</label>
                    <Input
                        onInputValue={handleInputValueTelefono}
                    />
                </div>
                <button onClick={handleClick}>Finalizar Compra</button>
            </form>
        </div>
        )
}
export default Formulario