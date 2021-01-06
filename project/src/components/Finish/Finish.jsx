import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { BackConfig, DivBack, Form, InputConfig, DivMap } from "./styled";
import { AnimationBack } from "../../Animation/AnimationBack";
import { useHistory } from "react-router-dom";
import FinishItem from "../FinishItem/FinishItem";


const Finish = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    const products = localStorage.getItem("produtos")
    const parseProducts = JSON.parse(products)
    if (parseProducts) {
      setProductsInCart(parseProducts)
    }
  }, [])

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeCpf = (event) => {
    setCpf(event.target.value);
  };

  useEffect(() => {
    setNome(localStorage.getItem("Nome"))
    setCpf(localStorage.getItem("CPF"))
  }, [])

  const Finish = () => {
    if (nome === "" && cpf === "") {
      alert("preencha seu nome e Cpf");
      return;
    }
    if (nome === "") {
      alert("preencha seu nome");
      return;
    }
    if (cpf === "") {
      alert("preencha seu cpf");
      return;
    }
    if (nome && cpf) {
      alert("Muito Obrigado");
      localStorage.setItem("Nome", nome)
      localStorage.setItem("CPF", cpf)
      setCpf("");
      setNome("");
      history.push("/");
    }
  };
  const getTotalValue = () => {
    let totalValue = 0;
    for (let product of productsInCart) {
      totalValue += product.price * product.quantity;
    }
    return totalValue;
  };

  const onRemoveProductFromCart = (productId) => {
    const newProductsInCart = productsInCart
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);
    setProductsInCart(newProductsInCart);
  };
  const history = useHistory();
  return (
    <div>
      <DivBack>
        <BackConfig>
          <span onClick={() => history.push("/")}>
            <AnimationBack />
          </span>
        </BackConfig>
      </DivBack>
      <DivMap>
        {productsInCart.map((product) => {
          return (
            <FinishItem
              cartItem={product}
              onRemoveProductFromCart={onRemoveProductFromCart}
            />
          );
        })}
      </DivMap>

      <p>Valor total: R${getTotalValue()},00</p>
      <Form>
        <InputConfig>
          <TextField
            fullWidth="bool"
            variant={"outlined"}
            color="secondary"
            label="Nome"
            value={nome}
            type="text"
            placeholder="Digite seu nome"
            required
            onChange={onChangeNome}
          ></TextField>
        </InputConfig>
        <InputConfig>
          <TextField
            fullWidth="bool"
            variant={"outlined"}
            color="secondary"
            label="Cpf"
            value={cpf}
            type="number"
            placeholder="Digite seu cpf"
            required
            onChange={onChangeCpf}
          ></TextField>
        </InputConfig>
        <Button variant="contained" color="secondary" onClick={Finish}>
          Finalizar
        </Button>
      </Form>
    </div>
  );
};
export default Finish;
