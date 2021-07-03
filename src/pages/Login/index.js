import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainButton from "../../Components/MainButton";
import api from "../../services/api";
import "./styles.css";

import {
  ContainerImage,
  Button,
  ButtonText,
  Image,
  InputName,
  InputPassword,
  LabelName,
  LabelPassword,
  Logo,
  Form,
} from "./styles";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  async function tryLogin(event) {
    event.preventDefault();
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
          <LabelName>Email</LabelName>
          <InputName
            onChange={(event) => setEmail(event.target.value)}
            placeholder="exemplo@email.com"
            value={email}
          ></InputName>
          <LabelPassword>Senha</LabelPassword>
          <InputPassword
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Insira sua senha aqui"
          ></InputPassword>

          <Button onSubmit={tryLogin} type="submit" loading={loading}>
            <ButtonText>Logar</ButtonText>
          </Button>
        </Form>
      </ContainerImage>
    </>
    // <div className="page login">
    //   <form onSubmit={tryLogin}>
    //     <input-
    //       type="text"
    //       placeholder="E-mail"
    //       value={email}
    //       onChange={(event) => setEmail(event.target.value)}
    //     />

    //     <input
    //       type="password"
    //       placeholder="Senha"
    // value={password}
    // onChange={(event) => setPassword(event.target.value)}
    //     />

    //     <MainButton type="submit" loading={loading}>
    //       Logar
    //     </MainButton>
    //   </form>
    // </div>
  );
}
