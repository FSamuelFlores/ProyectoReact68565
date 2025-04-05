import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, where, query} from "firebase/firestore";
import {app} from "../firebaseConfig";



const ItemListContainer = () => {

const [resultado, setResultado] = useState([])
const params = useParams ()

useEffect (()=>{

  const db = getFirestore(app)
  const productosCollection = collection(db, "productos")

  let miConsulta;
  

  if(params.id === undefined){

    miConsulta = getDocs(productosCollection)


  }else {
    const filtro = query (productosCollection, where("category", "==", params.id))
    miConsulta = getDocs(filtro)

}

  miConsulta
  .then((respuesta) => {
    const productosFormato= []

    respuesta.docs.forEach((doc)=>{
      productosFormato.push(doc.data())

    })

    setResultado(productosFormato)
  })

}, [params.id])

  return (
    <div className="grid-section">
        {resultado.map((producto) =>{
              return (
              <ItemList key={producto.id}
               producto={producto}/>
              )
    })}
    </div>
  )
}

export default ItemListContainer
