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
  PartnerRegisterText,
  PartnerRegisterButton,
} from "./styles";

import { LoginHooks } from "./hooks";
import Card from "./Card";

export default function Login() {
  const [
    email,
    setEmail,
    password,
    setPassword,
    recaptchaRef,
    ClickForgotPassword,
    tryLogin,
    access,
    showLogin,
    setShowLogin,
    getMessageHour,
    ClickRegister,
  ] = LoginHooks();

  return (
    <>
      <ContainerImage>
        <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Cooking-cuate.png"></Image>

        {access.length && !showLogin ? (
          <Card
            getMessageHour={getMessageHour}
            setShowLogin={setShowLogin}
            items={access}
          />
        ) : (
          <>
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
                sitekey="6LeJfZsbAAAAAD0fXrsZvhAv8xPQg8Lkt10CAYhW"
                size="invisible"
              />
              <ForgotPassword>
                <p onClick={ClickForgotPassword}>Esqueceu a senha?</p>
              </ForgotPassword>

              <Button onSubmit={tryLogin} type="submit">
                <ButtonText>Logar</ButtonText>
              </Button>

              <PartnerRegisterText>
                Ainda não é parceiro do Foodzilla ?{" "}
                <PartnerRegisterButton onClick={ClickRegister}>
                  {" "}
                  Vire agora
                </PartnerRegisterButton>
              </PartnerRegisterText>
            </Form>
          </>
        )}
      </ContainerImage>
    </>
  );
}
