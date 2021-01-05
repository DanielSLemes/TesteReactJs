import React  from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { CartListContainer, ShoppingCartContainer } from "./styled";
import { useHistory } from "react-router-dom";

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
      {getTotalValue() === 0 ? (
        "Carrinho Vazio"
      ) : (
          <button onClick={() => history.push("/cliente")}>
            Finalizar Pedido
          </button>
        )}
    </ShoppingCartContainer>
  );
};
export default ShoppingCart;
