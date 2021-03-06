import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { ProductsContainer, ProductsGrid, ProductsHeader } from "./styled";

const Products = (props) => {

  const [sort, setSort] = useState("DECRESCENTE");

  const getFilteredAndOrderedList = (props) => {
    return (props.products || [])
      .filter((product) =>
        props.maxFilter ? product.price < props.maxFilter : true
      )
      .filter((product) =>
        props.minFilter ? product.price > props.minFilter : true
      )
      .filter((product) =>
        props.nameFilter ? product.name.includes(props.nameFilter) : true
      )
      .sort((a, b) =>
        sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };
  const onChangeSort = (event) => {
    setSort(event.target.value);
  };
  const filteredAndOrderedList = getFilteredAndOrderedList(props);
  return (
    <ProductsContainer>
      <ProductsHeader>
        <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
        <label>
          Ordenação:
          <select value={sort} onChange={onChangeSort}>
            <option value={"CRESCENTE"}>Crescente</option>
            <option value={"DECRESCENTE"}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product) => {
          return (
            <ProductCard
              product={product}
              onAddProductToCart={props.onAddProductToCart}
              onRemoveProductFromCart={props.onRemoveProductFromCart}
            />
          );
        })}
      </ProductsGrid>
    </ProductsContainer>
  );
};
export default Products;
