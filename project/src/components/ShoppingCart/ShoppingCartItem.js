import { Button } from "@material-ui/core";
import React from "react";
import { ItemContainer } from "./styled";

const ShoppingCartItem = (props) => {
  return (
    <ItemContainer>

      <h3>{props.cartItem.quantity}{props.cartItem.quantity === 1 ? <strong > Item </strong> : <strong> Itens </strong>}</h3>
      <p>{props.cartItem.name}</p>
      <div>
        <h4 >Valor Únitario < strong ><em >{props.cartItem.price},00</em></strong></h4>
      </div>
      <Button variant="contained" color="secondary" onClick={() => props.onRemoveProductFromCart(props.cartItem.id)}>
        Remover
      </Button>
    </ItemContainer>
  )
}
export default ShoppingCartItem;
