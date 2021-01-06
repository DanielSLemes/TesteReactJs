import styled from 'styled-components';

export const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;
export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`
export const ShoppingCartContainer = styled.div`
  border: 1px solid black;
  padding: 8px;

  strong {
    color:red;
  }
`;

export const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`;
export const ItemContainer = styled.div`

  display:flex;
  flex-direction:column;
  p {
    margin: 0;
  }
  h3 {
    margin:0 auto;
  }
  h4 {
    width:100%;
  }
  strong {
    color:red;
  }
`;