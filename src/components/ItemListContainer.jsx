import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {} from "firebase/firestore";
import {app} from "../firebaseConfig";



const ItemListContainer = () => {

const [resultado, setResultado] = useState([])
const params = useParams ()

useEffect (()=>{
  
  fetch(params.id === undefined ? '/productos.json' : `/${params.id}.json` )
  .then((res) => {
    return res.json()
})
.then((res) => {
  setResultado(res)
});
}, [params.id])




  return (
    <div className="grid-section">
        {resultado.map((producto) =>{
              return (
              <ItemList key={producto.id} producto={producto}/>
              )
    })}
    </div>
  )
}

export default ItemListContainer
