import { Link } from "react-router-dom"
const ItemList = (props) => {
  return (
        <article className="cards-article" title={props.producto.title}>
          <h3 className="card-title">{props.producto.title}</h3>
          <img src={props.producto.thumbnail} alt={props.producto.title} className="cards-img" />
          <p className="cards-description">${props.producto.price}</p>
          <Link to={`/producto/${props.producto.id}`}>Ver Detalles</Link>
        </article>
  )
}
export default ItemList



