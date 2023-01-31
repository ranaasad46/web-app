import { useContext, useState } from "react";
import { createContext } from "react";
import { useWishLocalStorage } from "../components/useWishLocalStorage";

import { WishCart } from "../components/WishCart";

const CartWishContext = createContext();
export const WishContext = () => {
return useContext(CartWishContext);
};

export const WishContextProvider = (props) => {
    const [wishItems, setWishItems] = useWishLocalStorage("Wish-List-Lone-S-traders", []);
    const [isWishOpen, setIsWishOpen] = useState(false)
    // const totalCartItems = cartItem=[]
    const openWish = () => {
        // console.log("i am good");
        setIsWishOpen(true)
    }
    const closeWish = () => {
        
        setIsWishOpen(false)
        return isWishOpen;    
    }
    const WishQuantity = wishItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      )

    const getWishQuantity = (id) =>{
        return wishItems.find(item=>item.id === id)?.quantity||0
    }
    const increaseWishQuantity = (id) =>{
        setWishItems(currItems =>{
            if(currItems.find(item=> item.id === id )==null){
                return [...currItems, {id,quantity:1}]
            }
            else {
                return currItems.map(item =>{
                    if(item.id === id)
                    {
                        return {...item,quantity:parseInt(item.quantity)}
                    }
                    else
                    {
                        return item
                    }
                })
            }
        })
    } 
    const decreaseWishQuantity = (id) =>{
        setWishItems(currItems =>{
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
    const removeFromWish=(id)=>{
        setWishItems(currItems =>{
                return currItems.filter(item=>item.id!==id)
            
    })
    }

return (
<CartWishContext.Provider
value={{
openWish,closeWish,WishQuantity,getWishQuantity,increaseWishQuantity,decreaseWishQuantity,removeFromWish,wishItems
}}
>
{props.children}
<WishCart isWishOpen = {isWishOpen} />
</CartWishContext.Provider>
);
};