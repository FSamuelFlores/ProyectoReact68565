import { useContext } from 'react'
import { carritoContext } from './CarritoContext'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {

  const valor = useContext(carritoContext)


  return (
    <NavLink viewTransition to="/carrito">
      <img src="/carrito.svg"alt="carrito-compras"/> {valor.cantProd}
    </NavLink>
  )
}

export default CartWidget
