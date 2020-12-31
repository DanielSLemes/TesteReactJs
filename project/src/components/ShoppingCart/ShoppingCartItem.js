import React from "react";
import { ItemContainer } from "./styled";

const ShoppingCartItem = (props) => {
  return (
    <ItemContainer>
      <p>{props.cartItem.quantity}X</p>
      <p>{props.cartItem.name}</p>
     <button onClick={() =>props.onRemoveProductFromCart(props.cartItem.id)}>
        Remover
      </button> 
    </ItemContainer>
  )
}
export default ShoppingCartItem ;
