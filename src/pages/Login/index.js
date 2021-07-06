import React, { useState, createRef } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import ReCAPTCHA from "react-google-recaptcha";

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

export default function Login() {
  const history = useHistory();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const recaptchaRef = createRef();

  async function ClickForgotPassword() {
    history.push("/forgotpassword");
  }

  function onChange(value) {
    setToken(value);
  }

  async function tryLogin(event) {
    event.preventDefault();
    recaptchaRef.current.execute();
    setLoading(true);
    try {
      const response = await api.post("/restaurant/authenticate", {
        email,
        password,
      });

      const { token } = response.data;
      const {
        _id,
        name,
        avatar,
        telephone,
        uf,
        city,
        street,
        Number,
        delay,
        delayRemove,
      } = response.data.user;
      const restaurantLocation = JSON.stringify(
        response.data.user.location.coordinates
      );

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("_id", _id);
      sessionStorage.setItem("avatar", avatar);
      sessionStorage.setItem("restaurantName", name);
      sessionStorage.setItem("restaurantLocation", restaurantLocation);
      sessionStorage.setItem("delay", delay);
      sessionStorage.setItem("delayToWithdrawal", delayRemove);

      sessionStorage.setItem("restaurantPhone", telephone);
      sessionStorage.setItem(
        "restaurantAddress",
        `Rua ${street} nº${Number}, ${city} - ${uf}`
      );

      console.log("USER:");
      console.log(response.data.user);

      setLoading(false);
      history.push("/requests");
    } catch (error) {
      setLoading(false);
      toast.error("usúario ou senha incorretos, tente novamente!");
    }
  }

  return (
    <>
      <ContainerImage>
        <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Cooking-cuate.png"></Image>

        <Form onSubmit={tryLogin}>
          <Logo src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Logos/FoodZilla.svg"></Logo>
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
