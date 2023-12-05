import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { CartContext } from "../../context/CartContex";
import CartItem from "./CartItem";
import './Cart_css.css'

const Cart = () =>{
    const { cart,clearCart } = useContext(CartContext)

    return(
        <>
            {cart.map((prod) => <CartItem key={prod.id} producto={prod} />)}
            <center>
                <button className="btn" onClick={() => clearCart()}>Limpiar el carrito</button>
                    <Link to='/Checkout'><button className="btn2" >Checkout</button></Link>
                
            </center>
        </>
    )
}
export default Cart