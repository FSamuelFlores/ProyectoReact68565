import { createContext, useState } from "react"


export const carritoContext = createContext();

export const Provider = carritoContext.Provider;


const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [cantProd, setCantProd] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    const handleAgregar = (producto) => {

        const copia = [...carrito]
        
        copia.push(producto)
        setCarrito(copia)


        setCantProd(cantProd + 1)

        setTotalPrecio(totalPrecio + producto.price)

    }

    const handleEliminar = (producto) => {

    }

    const handleVaciar = () => {
        setCantProd(0);
        setTotalPrecio(0);
        setCarrito([]);
    }


    const valorDelContexto = {
        carrito,
        cantProd, 
        totalPrecio,
        handleAgregar,
        handleEliminar,
        handleVaciar,
    }


    return(
        <Provider value = {valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider
