import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  img {
    margin-top:1vh;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-around;

 height:50%;
 
  p {
    
    margin:  1vw;
  }
  h4 {
   
    margin: 0 1vw;
  }
`

export const AddToCartButton = styled.button`
  align-self: center;
`

export const ProductsContainer = styled.div`

`;

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`
