import React from 'react';
import { Stack } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { formatCurrency } from '../utilities/formatCurrency.ts';
import storeItems from "./data/products.json"
import { WishContext } from '../context/Wish';
import { WishItem } from './WishItem';

export const WishCart=(props)=> {
    
const { closeWish,wishItems } = WishContext()


  return (
    <>
      

      <Offcanvas show={props.isWishOpen} onHide={()=>closeWish()} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WishList</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Stack gap={3}>
          {wishItems.map(item => (
            <WishItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              wishItems.reduce((total, cartItem) => {
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

(<WishCart />);