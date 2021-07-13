import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Themes } from "../../utils/themes";
import { RenderComponents } from "./RenderComponents";

import {
  Container,
  Button,
  ButtonText,
  Logo,
  DivAlign,
  ContainerInput,
  LabelInvalid,
} from "./styles";

import { ForgotPasswordHooks } from "./hooks";

export default function ForgotPassword() {
  const [
    email,
    setEmail,
    showCodeInput,
    isValidCode,
    token,
    setToken,
    newPassword1,
    setNewPassword1,
    newPassword2,
    setNewPassword2,
    equalPassword1,
    showResetPassword,
    onClick,
    disabledEmail,
    passwordIsValid,
    validateEqualPassword,
  ] = ForgotPasswordHooks();

  return (
    <Container>
      <DivAlign>
        <Logo
          src={Themes().logo}
          width={localStorage.getItem("theme") !== "dark" ? "40%" : "326px"}
        />
        <ContainerInput>
          {!passwordIsValid && (
            <LabelInvalid>
              A senha precisa conter 8 caracteres, maiúscula, minúscula e
              números
            </LabelInvalid>
          )}
          {!equalPassword1 && (
            <LabelInvalid>As senhas não coincidem</LabelInvalid>
          )}
          <RenderComponents
            newPassword1={newPassword1}
            newPassword2={newPassword2}
            setNewPassword1={setNewPassword1}
            setNewPassword2={setNewPassword2}
            token={token}
            setToken={setToken}
            isValidCode={isValidCode}
            email={email}
            setEmail={setEmail}
            showResetPassword={showResetPassword}
            showCodeInput={showCodeInput}
            validateEqualPassword={validateEqualPassword}
            passwordIsValid={passwordIsValid}
          />
        </ContainerInput>
        <Button
          disabled={disabledEmail || !equalPassword1 || !passwordIsValid}
          onClick={onClick}
        >
          <ButtonText>Continuar</ButtonText>
        </Button>
      </DivAlign>
    </Container>
  );
}
