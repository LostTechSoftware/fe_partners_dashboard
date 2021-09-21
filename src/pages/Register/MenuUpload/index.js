import React from "react";
import Template from "../Template";
import { useMenuUpload } from "./hooks";
import { Container, DivAlign, ThumbNail, HeaderText } from "./styles";

function MenuUpload() {
  const [handleUploadThumbail] = useMenuUpload();

  return (
    <Template title="Envie o cardápio do estabelecimento" progress={50}>
      <Container>
        <DivAlign>
          <HeaderText>Cardápio do estabelecimento</HeaderText>
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
        </DivAlign>
      </Container>
    </Template>
  );
}

export default MenuUpload;
