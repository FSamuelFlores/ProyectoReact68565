const ProductDetail = () => {

    return (
    <div className="flex-grow product-detail">
        <h2>{producto.title} - ${producto.price}</h2>
        <img src={producto.thumbnail} alt={producto.title} />
        <p>{producto.description}</p>
        <button onClick={handleClick}>Agregar al carrito</button>
    </div>
    )
}