import styled from 'styled-components';

export const Form= styled.form`
display:flex;
flex-direction:column;

align-items:center;

`
export const InputConfig = styled.div`
display:flex;
justify-content:center;
width:90%;
font-size:30px;
margin:2vh 0 2vh 0;
background-color: white;

`

export const BackConfig = styled.p`
display:flex;
justify-content:flex-start;
align-items:center;
height: 64px;
border-bottom:1px solid #FFFF; 
width: 100%;
margin-bottom:2vh;
`
export const DivBack = styled.div` 
border-radius: 0 0 10px 10px;
margin:0;
background-color:gray;
`









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
