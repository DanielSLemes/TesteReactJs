import { Input, TextField } from '@material-ui/core';
import React from 'react'
import { FiltersContainer, InputContainer } from './styled';

const Filters = (props) => {
  return (
    <FiltersContainer>
      <h3>Filtros</h3>
      <InputContainer>
        <TextField
          fullWidth="bool"
          color="secondary"
          variant={"outlined"}
          label="Max"
          value={props.minFilter}
          type="number"

          placeholder="Digite um valor minímo"
          required
          onChange={props.onChangeMinFilter}>
        </TextField>
      </InputContainer>
      <InputContainer>
        <TextField
          fullWidth="bool"
          color="secondary"
          variant={"outlined"}
          label="maxFilter"
          value={props.maxFilter}
          type="number"
          placeholder="Digite um Valor máximo"
          required
          onChange={props.onChangeMaxFilter}>
        </TextField>
      </InputContainer>
      <InputContainer>
        <Input
          fullWidth="bool"
          color="secondary"
          variant={"outlined"}
          label="Max"
          value={props.nameFilter}
          type="text"
          placeholder="Pesquise por um nome"
          required
          onChange={props.onChangeNameFilter}>
        </Input>
      </InputContainer>
    </FiltersContainer>
  )
}
export default Filters;
