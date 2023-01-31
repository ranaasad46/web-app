
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

import { ShoppingCart } from "../components/ShoppingCart";
 import { useLocalStorage } from "../components/useCartLocalStorage";
let cartItem ={
    id:Number,
    quantity:Number
}
const ShoppingCartContext = createContext();
export const CartContext = ()=>{
    return useContext(ShoppingCartContext)
}

export const CartContextProvider = (props) =>{
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart-Lone-S-traders", []);
    const [isOpen, setIsOpen] = useState(false)
    // const totalCartItems = cartItem=[]
    const openCart = () => {
        // console.log("i am good");
        setIsOpen(true)
    }
    const closeCart = () => {
        
        setIsOpen(false)
        return isOpen;    
    }
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )

    const getItemQuantity = (id) =>{
        return cartItems.find(item=>item.id === id)?.quantity||0
    }
    const increaseCartQuantity = (id) =>{
        setCartItems(currItems =>{
            if(currItems.find(item=> item.id === id )==null){
                return [...currItems, {id,quantity:1}]
            }
            else {
                return currItems.map(item =>{
                    if(item.id === id)
                    {
                        return {...item,quantity:parseInt(item.quantity)+1}
                    }
                    else
                    {
                        return item
                    }
                })
            }
        })
    } 
    const decreaseCartQuantity = (id) =>{
        setCartItems(currItems =>{
            if(currItems.find(item=> item.id === id )?.quantity===1){
                return currItems.filter(item=>item.id!==id)
            }
            else {
                return currItems.map(item =>{
                    if(item.id === id)
                    {
                        return {...item,quantity:parseInt(item.quantity)-1}
                    }
                    else
                    {
                        return item
                    }
                })
            }
        })
    } 
    const removeFromCart=(id)=>{
        setCartItems(currItems =>{
                return currItems.filter(item=>item.id!==id)
            
    })
    }
    
    

    return(
        <ShoppingCartContext.Provider value={{cartItem,cartQuantity,cartItems,getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,openCart,closeCart}}>
            {props.children}
            <ShoppingCart isOpen = {isOpen} />
        </ShoppingCartContext.Provider>
    )
}