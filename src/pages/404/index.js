import React from "react";
import { Themes } from "../../utils/themes";
import { use404Page } from "./hooks";

import { Container, LinkHeader, Text, SubText } from "./styles";

function Page404() {
  const [timeout] = use404Page();

  return (
    <Container>
      <LinkHeader>
        Se o erro persistir,{" "}
        <a href="https://helpcenter.foodzilla.com.br">
          entre em contato conosco
        </a>
      </LinkHeader>
      <img src={Themes().image404} />
      <Text>Parece que algo deu errado</Text>
      <SubText>
        {timeout ? (
          <p>
            Se não foi redirecionado <a href="/">clique aqui</a>
          </p>
        ) : (
          "Você sera redirecinado em 10s..."
        )}
      </SubText>
    </Container>
  );
}

export default Page404;
