import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react"
import './ItemDetails.css'
import { CartContext } from "../context/CartContex";
import { useParams } from "react-router-dom"
import { db } from '../firebase/client'
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'

const ItemDetails = ({}) =>{

    const [quantityadded, setQuantityAdded] = useState (0)
  
    const [contador, setcontador] = useState (1)


    const {addItem} = useContext (CartContext)
  
    const { itemid } = useParams()

    const [producto, setproduct] = useState ([])

    useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(collection(db, "products"), itemid)
        const snapshot = await getDoc(productRef)

        if (snapshot.exists()) {
          setproduct({ ...snapshot.data(), id: snapshot.id })
        }
        } catch (error) {
          console.error(error)
        }
    };        
    fetchProduct()
  }, [itemid])

    const agregar = () =>{
      setQuantityAdded(contador)

      addItem(producto, contador)
    }

    const suma = () => {
      setcontador(contador + 1)
    }
    
    const resta = () => {
      contador > 0 && setcontador(contador - 1)
    }
    
        const func = () =>{
          agregar()
        }
    return(
      <>

        <div className="divcsss">
            <img className="imgcsss" src={`http://localhost:5173/src/Imagenes/${producto.image}`} />
            <h1 className="h2csss">Nombre:</h1>
            <h2  className="h2csss">{producto.title}</h2>
            <h1 className="h2csss">Precio:</h1>
            <h2  className="h2csss">{producto.price}</h2>

        </div>
        <div className="divcsss2">
            <button className="btnmenos" onClick={resta}>-</button>
            <p className="num">{contador}</p>
            <button className="btnmas" onClick={suma}>+</button>
            {
              quantityadded > 1 ? (<Link to='/cart'><button className="btncart">Terminar compra</button></Link>) : (<button onClick={func} className="btncart">Añadir al carrito</button>)
            }
        </div>
        </>

    )
}
export default ItemDetails