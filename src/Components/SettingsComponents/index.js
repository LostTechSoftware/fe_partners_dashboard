import React from "react";

import {
  Container,
  Row,
  LeftContainer,
  Title,
  Collapsable,
  ContainerCheckBox,
} from "./styles";

function SettingsComponents({
  children,
  title,
  defaultValue,
  zeroMargin,
  showCheckBox = true,
  onChange = () => console.log("Action não configurada"),
}) {
  return (
    <Container zeroMargin={zeroMargin} collapsed={false}>
      <Row>
        <LeftContainer>
          <ContainerCheckBox>
            {showCheckBox && (
              <label className="container">
                {defaultValue ? (
                  <input
                    onChange={onChange}
                    type="checkbox"
                    defaultChecked="checked"
                  />
                ) : (
                  <input onChange={onChange} type="checkbox" />
                )}
                <span className="checkmark" />
              </label>
            )}
          </ContainerCheckBox>
          <Title>{title}</Title>
        </LeftContainer>
      </Row>
      <Collapsable>{children}</Collapsable>
    </Container>
  );
}

export default SettingsComponents;
