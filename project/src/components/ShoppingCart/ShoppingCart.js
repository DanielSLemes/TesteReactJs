import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartListContainer, ShoppingCartContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const ShoppingCart = (props) => {

  const getTotalValue = () => {
    let totalValue = 0;
    for (let product of props.productsInCart) {
      totalValue += product.price * product.quantity;
    }
    return totalValue;
  };

  const history = useHistory();
  return (
    <ShoppingCartContainer>
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
      <h4>Valor total: < strong ><em >R${getTotalValue()},00</em></strong> </h4>
      {getTotalValue() === 0 ? (
        "Carrinho Vazio"
      ) : (
          <Button variant="contained" color="primary" onClick={() => history.push("/cliente")}>
            Finalizar Pedido
          </Button>
        )}
    </ShoppingCartContainer>
  );
};
export default ShoppingCart;
