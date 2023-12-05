import { Link } from 'react-router-dom'
import './CartItem_css.css'
import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../context/CartContex";

const CartItem = ({producto}) =>{

    const { cart,removeItem } = useContext(CartContext)

    return(
        <div className='background'>
            
            <img className='imagen' src={`http://localhost:5173/src/Imagenes/${producto.image}`} />
            <h2 className='txt'>Producto: {producto.title}</h2>
            <h2 className='txt'>Precio: {producto.price}</h2>
            <h2 className='txt'>Cantidad: {producto.quantity}</h2>
            <button className='btn3' onClick={() => removeItem(producto.id)}>Eliminar</button>

        </div>

    )
}
export default CartItem