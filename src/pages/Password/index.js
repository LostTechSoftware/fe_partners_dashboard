import React from "react";
import { useHistory } from "react-router";
import { Themes } from "../../utils/themes";
import { Logo } from "../Client/Card/styles";
import { usePassword } from "./hooks";

import {
  Container,
  Image,
  Form,
  LabelInput,
  Input,
  Button,
  Label,
  Other,
} from "./styles";

function Password() {
  const [password, setPassword, tryLogin, userName] = usePassword();
  const history = useHistory();

  return (
    <Container>
      <Image src="https://foodzilla-staging.s3.us-east-2.amazonaws.com/Images/Cooking-cuate.png" />
      <Form>
        <Logo src={Themes().logo} />
        <Label>Bem vindo(a) de volta, {userName}</Label>

        <LabelInput>Por favor, nos informe sua senha</LabelInput>

        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Insira sua senha aqui"
        />
        <Other onClick={() => history.push("/forgotpassword")}>
          <p>Esqueceu a senha?</p>
        </Other>

        <Button onClick={tryLogin}>
          <p>Continuar</p>
        </Button>
      </Form>
    </Container>
  );
}

export default Password;
