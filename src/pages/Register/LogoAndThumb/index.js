import React from "react";
import Template from "../Template";
import { useLogoAndThumb } from "./hooks";
import { Container, DivAlign, ThumbNail, Logo2 } from "./styles";

function LogoAndThumb() {
  const [handleUploadThumbail, handleUploadLogo] = useLogoAndThumb();

  return (
    <Template title="Imagens do estabelecimento" progress={50}>
      <Container>
        <DivAlign>
          <ThumbNail>
            <div className="row">
              <p>Clique aqui para alterar a imagem</p>
            </div>

            <input
              type="file"
              onChange={handleUploadThumbail}
              accept="image/*"
            />
          </ThumbNail>

          <Logo2>
            <div className="opacity" />

            <input type="file" onChange={handleUploadLogo} accept="image/*" />
          </Logo2>
        </DivAlign>
      </Container>
    </Template>
  );
}

export default LogoAndThumb;
