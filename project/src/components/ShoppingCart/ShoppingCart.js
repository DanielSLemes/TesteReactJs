import React from "react";
import  ShoppingCartItem  from "./ShoppingCartItem";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`;

const ShoppingCart = (props) => {
  const getTotalValue = () => {
    let totalValue = 0;

    for (let product of props.productsInCart) {
      totalValue += product.price * product.quantity;
    }

    return totalValue;
  };

  return (
    <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {props.productsInCart.map((product) => {
          return (
            <ShoppingCartItem
              cartItem={product}
              onRemoveProductFromCart={props.onRemoveProductFromCart}
            />
          );
        })}
      </CartListContainer>
      <p>Valor total: R${getTotalValue()},00</p>
    </ShoppingCartContainer>
  );
}
export default ShoppingCart ;
