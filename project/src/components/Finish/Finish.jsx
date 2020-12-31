import { Button, Input, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "../../components/hooks/useForm";
import { BackConfig, DivBack, Form, InputConfig } from "./styled";
import Modal from "@material-ui/core/Modal";
import { AnimationBack } from "../../Animation/AnimationBack";
import { useHistory } from "react-router-dom";

const Finish = () => {
  
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };
  const onChangeCpf = (event) => {
    setCpf(event.target.value);
  };

  const Finish = () => {
      if(nome === "" && cpf === "") {
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
      setCpf("");
      setNome("");
      history.push("/");
    }
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
