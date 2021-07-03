import React from "react";
import { Plus, Pause, Play } from "react-feather";
import { useProduct } from "./hooks";

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductBottom,
  ProductPrice,
  ProductOldPrice,
  AddProductButton,
  Text,
  ButtonContainer,
  Button,
} from "./styles";
import { LoadingSkeleton } from "../../../Components/LoadingSkeleton";

const renderLoading = () => {
  return (
    <ProductContainer>
      <LoadingSkeleton
        isLoading
        hasHeading
        containerHeight="100%"
        containerWidth="100%"
      />
    </ProductContainer>
  );
};

const Loading = ({ repeat = 1 }) => {
  return Array.from({ length: repeat }, () => renderLoading());
};

function Product({ action }) {
  const [products, loading, pause] = useProduct();

  return (
    <Container>
      {loading ? (
        <Loading repeat={10} />
      ) : (
        products.map((product, index) => (
          <ProductContainer>
            <ProductImage url="https://thumbs.dreamstime.com/b/hamburguer-isolado-no-fundo-branco-62255931.jpg">
              {index == 0 || index == 4 ? (
                <Play onClick={pause} />
              ) : (
                <Pause onClick={pause} />
              )}

              <ButtonContainer>
                <Button onClick={action} />
              </ButtonContainer>
            </ProductImage>
            <ProductTitle onClick={action}>
              Hamburguer de Siri com Cheddar
            </ProductTitle>
            <ProductBottom onClick={action}>
              <ProductPrice>R$ 19,99</ProductPrice>
              <ProductOldPrice>R$ 40,00</ProductOldPrice>
            </ProductBottom>
          </ProductContainer>
        ))
      )}

      <AddProductButton onClick={action}>
        <Plus size={70} color="#ffe115" />
        <Text>Adicionar produto</Text>
      </AddProductButton>
    </Container>
  );
}

export default Product;
