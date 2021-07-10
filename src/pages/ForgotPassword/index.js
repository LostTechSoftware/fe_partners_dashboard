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
    loading,
    setLoading,
    email,
    setEmail,
    showCodeInput,
    setShowCodeInput,
    isValidCode,
    setIsValidCode,
    token,
    setToken,
    password,
    setPassword,
    newPassword1,
    setNewPassword1,
    newPassword2,
    setNewPassword2,
    equalPassword1,
    setEqualPassword1,
    showResetPassword,
    setShowResetPassword,
    history,
    onClick,
    resetPassword,
    forgotPassword,
    disabledEmail,
    disabledToken,
    disabledPassword,
    passwordIsValid,
    validateEqualPassword,
  ] = ForgotPasswordHooks();
  return (
    <Container>
      <DivAlign>
        <Logo src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg"></Logo>
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
