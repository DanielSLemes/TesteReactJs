import React from 'react'
import { FiltersContainer, InputContainer } from './styled';

const Filters = (props) => {
    return (
     <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={props.minFilter}
            onChange={props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={props.maxFilter}
            onChange={props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={props.nameFilter}
            onChange={props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
    )
  
} 
export default Filters ;
