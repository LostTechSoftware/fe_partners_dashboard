import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import ReactCodeInput from "react-code-input";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  styledCodeInput,
  styledMobileCodeInput,
} from "../../utils/propsCodeInput";
import { useScreenMeasure } from "../../utils/isMobile";

import {
  Container,
  Button,
  ButtonText,
  Logo,
  DivAlign,
  ContainerInput,
  Label,
  InputName,
} from "./styles";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [codeInput, setCodeInput] = useState(true);
  const [isValidCode, setIsValidCode] = useState(false);
  const [token, setToken] = useState("");
  const [isMobile] = useScreenMeasure();
  const codeInputStyle = isMobile ? styledMobileCodeInput : styledCodeInput;

  useEffect(() => {
    if (!/^\d+$/g.test(token) || token.length !== 6)
      return setIsValidCode(false);
    if (/^\d+$/g.test(token) && token.length === 6) return setIsValidCode(true);
  }, [token]);

  async function onClickForgotPassword(event) {
    event.preventDefault();
    setLoading(true);
    try {
      await api.post("/restaurant/forgot_password", {
        email,
      });
      setCodeInput(true);
    } catch (error) {
      setLoading(false);
      toast.error("Parceiro não encontrado em nosso sistema");
    }
  }

  return (
    <Container>
      <DivAlign>
        <Logo src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg"></Logo>
        <Label>Qual seu email ?</Label>
        <ContainerInput>
          {codeInput ? (
            <ReactCodeInput
              value={token}
              onChange={(event) => {
                setToken(event);
              }}
              isValid={isValidCode}
              type="text"
              fields={6}
              {...codeInputStyle}
            />
          ) : (
            <InputName
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          )}
        </ContainerInput>
        <Button onClick={onClickForgotPassword}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </DivAlign>
    </Container>
  );
}
