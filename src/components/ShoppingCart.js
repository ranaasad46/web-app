import React from 'react';
import { Stack } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../context/Cart';
import { formatCurrency } from '../utilities/formatCurrency.ts';
import storeItems from "./data/products.json"
import { CartItem } from './CartItem';

export const ShoppingCart=(props)=> {
    
const { closeCart,cartItems } = CartContext()


  return (
    <>
      

      <Offcanvas show={props.isOpen} onHide={()=>closeCart()} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

(<ShoppingCart />);