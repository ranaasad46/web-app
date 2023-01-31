import { Button, Stack } from "react-bootstrap"
import { CartContext } from "../context/Cart"
import { formatCurrency } from "../utilities/formatCurrency.ts"
// import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "./data/products.json"




export const CartItem=({ id, quantity }) =>{
  const { removeFromCart } = CartContext()
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={require(`${item.image}`)}
        style={{ width: "125px", height: "75px", objectFit: "cover" }} alt=""
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}