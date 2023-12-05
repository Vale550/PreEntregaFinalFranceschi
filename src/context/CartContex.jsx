import { createContext, useState } from "react";
import Item from "../Components/Item";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState ([])

    const addItem = (Item, quantity) =>{
        if (!isInCart (Item.id)){
            setCart(prev => [...prev, {...Item, quantity}])
        }else{
            console.log('El producto ya se agrego')
        }
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, item) => {
          return acc + item.quantity
        }, 0)
      }

    const removeItem = (itemId) =>{
        const cartUpdate = cart.filter(prod => prod.id !==itemId)
        setCart (cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, getTotalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}