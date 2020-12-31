import React from "react";
import { AddToCartButton, CardContainer, CardInfo } from "./styled";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <CardContainer>
      <img src={product.photo} width="100%" height="50%" />
      <CardInfo>
        <p>{product.name}</p>
        <h4>R${product.price},00</h4>
        <AddToCartButton onClick={() => props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  );
};
export default ProductCard;
