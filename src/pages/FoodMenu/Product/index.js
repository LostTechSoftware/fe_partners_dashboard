import React from "react";
import { Plus } from "react-feather";
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
  const [products, loading] = useProduct();

  return (
    <Container>
      {loading ? (
        <Loading repeat={10} />
      ) : (
        products.map((product) => (
          <ProductContainer onClick={action}>
            <ProductImage url="https://veja.abril.com.br/wp-content/uploads/2020/09/Whooper.jpg" />
            <ProductTitle>Hamburguer de Siri com Cheddar</ProductTitle>
            <ProductBottom>
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
