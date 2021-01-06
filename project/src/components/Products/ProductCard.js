import { Button } from "@material-ui/core";
import React from "react";
import { AddToCartButton, CardContainer, CardInfo } from "./styled";


const ProductCard = ({ ShowAddButton = true, product, ...props }) => {
  return (
    <CardContainer>
      <img src={product.photo} width="100%" height="50%" />
      <CardInfo>
        <p>{product.name}</p>
        <h4>R${product.price},00</h4>
        {ShowAddButton && <Button variant="contained" color="primary" onClick={() => props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </Button>}
      </CardInfo>
      {ShowAddButton ? false : <AddToCartButton onClick={() => props.onRemoveProductFromCart(product.id)}>
        Remover do carrinho
        </AddToCartButton>}
    </CardContainer>
  );
};
export default ProductCard;
