import React from "react";
import ProductCard from "../Products/ProductCard";
import { ItemContainer } from "./styled";

const FinishItem = (props) => {
  return (
    <ItemContainer>
        <ProductCard 
        product={props.cartItem} width="20px"
        ShowAddButton= {false} 
        />
      <p>{props.cartItem.quantity}X</p>
      {/* <p>{props.cartItem.name}</p> */}
    </ItemContainer>
  )
}
export default FinishItem ;
