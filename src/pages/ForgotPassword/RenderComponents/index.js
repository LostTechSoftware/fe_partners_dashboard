import React from "react";
import ReactCodeInput from "react-code-input";
import {
  styledCodeInput,
  styledMobileCodeInput,
} from "../../../utils/propsCodeInput";
import { useScreenMeasure } from "../../../utils/isMobile";
import { ForgotPasswordHooks } from "../hooks";

import {
  Label,
  InputName,
  LabelCodeInput,
  PasswordInput1,
  PasswordInput2,
  LabelPassword,
} from "../styles";

export const RenderComponents = ({
  showCodeInput,
  showResetPassword,
  token,
  setToken,
  isValidCode,
  email,
  setEmail,
  setNewPassword1,
  setNewPassword2,
  newPassword1,
  newPassword2,
}) => {
  const [isMobile] = useScreenMeasure();
  const codeInputStyle = isMobile ? styledMobileCodeInput : styledCodeInput;
  if (showCodeInput && !showResetPassword) {
    return (
      <>
        <LabelCodeInput>
          Insira o código de verificação que enviamos para o seu email
        </LabelCodeInput>
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
      </>
    );
  }
  if (showResetPassword) {
    return (
      <>
        <LabelPassword>Insira sua nova senha</LabelPassword>
        <PasswordInput1
          value={newPassword1}
          onChange={(event) => setNewPassword1(event.target.value)}
          type="password"
          placeholder="Nova senha"
        />
        <PasswordInput2
          value={newPassword2}
          onChange={(event) => setNewPassword2(event.target.value)}
          type="password"
          placeholder="Confirme a nova senha"
        />
      </>
    );
  }
  if (!showCodeInput && !showResetPassword) {
    return (
      <>
        <Label>Qual seu email ?</Label>
        <InputName
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </>
    );
  }
};
