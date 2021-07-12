import React from "react";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Themes } from "../../utils/themes";

import {
  ContainerImage,
  Button,
  ButtonText,
  Image,
  Logo,
  Form,
  ForgotPassword,
  Input,
  InputName,
  ContainerInput,
  Label,
} from "./styles";

import { LoginHooks } from "./hooks";

export default function Login() {
  const [
    history,
    token,
    setToken,
    email,
    setEmail,
    loading,
    setLoading,
    password,
    setPassword,
    recaptchaRef,
    ClickForgotPassword,
    onChange,
    tryLogin,
  ] = LoginHooks();

  return (
    <>
      <ContainerImage>
        <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Cooking-cuate.png"></Image>

        <Form onSubmit={tryLogin}>
          <Logo src={Themes().logo}></Logo>
          <Input>
            <ContainerInput>
              <Label>Email</Label>
              <InputName
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="exemplo@email.com"
              />
            </ContainerInput>
          </Input>
          <ContainerInput>
            <Label>Senha</Label>
            <InputName
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Insira sua senha aqui"
            />
          </ContainerInput>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lf77XkbAAAAAKRYz0QM-nmwIT4yengo3mKp2eES"
            onChange={onChange}
            size="invisible"
          />
          <ForgotPassword onClick={ClickForgotPassword}>
            Esqueci a senha
          </ForgotPassword>

          <Button onSubmit={tryLogin} type="submit" loading={loading}>
            <ButtonText>Logar</ButtonText>
          </Button>
        </Form>
      </ContainerImage>
    </>
  );
}
