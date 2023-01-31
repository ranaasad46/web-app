import { Button, Stack } from "react-bootstrap"
import { CartContext } from "../context/Cart"
import { WishContext } from "../context/Wish"
import { formatCurrency } from "../utilities/formatCurrency.ts"
// import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "./data/products.json"




export const WishItem=({ id, quantity }) =>{
  const {increaseCartQuantity } = CartContext()
  const {removeFromWish} = WishContext()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={require(`${item.image}`)}
        style={{ width: "125px", height: "75px", objectFit: "cover" }} alt=""
      />
      <div className="me-auto">
        
      <Button
        variant="primary"
        size="sm"
        onClick={() => {increaseCartQuantity(item.id);removeFromWish(item.id)}}
      >
        
        Add to Cart
      </Button>
             
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      
      <Button
            variant="outline-danger"
            size="sm"
            onClick={() => removeFromWish(item.id)}
          > &times;
          </Button>
    </Stack>
  )
}