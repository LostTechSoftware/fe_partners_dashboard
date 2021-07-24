import React from "react";
import { useHistory } from "react-router";
import { Themes } from "../../../utils/themes";
import { useCard } from "./hooks";

import {
  Container,
  Image,
  ContentText,
  Name,
  Access,
  List,
  Label,
  Other,
  ContainerList,
  Logo,
} from "./styles";

function Card({ items, setShowLogin }) {
  const [obj] = useCard();
  const history = useHistory();

  return (
    <ContainerList>
      <Logo src={Themes().logo} />
      <Label>Bom dia, qual seu nome?</Label>
      <List>
        {items.map((item) => (
          <Container
            onClick={() => {
              history.push("/password");
              sessionStorage.setItem("userName", item.name);
              sessionStorage.setItem("userEmail", item.email);
            }}
          >
            <Image
              src={`https://avatars.dicebear.com/api/micah/${item.name}.svg`}
            />
            <ContentText>
              <Name>{item.name}</Name>
              <Access>{obj[item.level]}</Access>
            </ContentText>
          </Container>
        ))}
      </List>
      <Other>
        <p onClick={setShowLogin}>É outra pessoa?</p>
      </Other>
    </ContainerList>
  );
}

export default Card;
