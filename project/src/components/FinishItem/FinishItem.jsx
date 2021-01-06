import { Button } from "@material-ui/core";
import React from "react";
import { ItemContainer, DivButtom } from "./styled";

const FinishItem = (props) => {
    return (
        <ItemContainer>
            <img src={props.cartItem.photo} width="50%" height="30%" />
            <p>{props.cartItem.quantity} {props.cartItem.quantity === 1 ? <strong>Item</strong> : <strong>Itens</strong>}</p>
            <p>{props.cartItem.name}</p>
            <DivButtom>
                <Button variant="contained" color="secondary" onClick={() => props.onRemoveProductFromCart(props.cartItem.id)}>
                    Remover
      </Button>
            </DivButtom>
        </ItemContainer>
    )
}
export default FinishItem;
