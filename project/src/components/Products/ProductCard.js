import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  img {
    margin-top:1vh;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;

 height:50%;
 
  p {
    
    margin: 0 1vw;
  }
  h4 {
   
    margin: 0 1vw;
  }
`

const AddToCartButton = styled.button`
  align-self: center;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <img src={product.photo} width="100%" height="50%"/>
      <CardInfo>
        <p>{product.name}</p>
        <h4>R${product.price},00</h4>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}
