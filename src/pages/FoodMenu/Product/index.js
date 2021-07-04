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

function Product({ action, rowId, reload, setReload }) {
  const [products, loading, pause] = useProduct({ rowId, reload, setReload });

  return (
    <Container>
      {loading ? (
        <Loading repeat={10} />
      ) : (
        products.map((product, index) => (
          <ProductContainer>
            <ProductImage
              url={
                product.avatar
                  ? product.avatar
                  : "https://serverem.s3.us-east-2.amazonaws.com/conjunto-de-mao-desenhada-bebidas-doodle_6997-2435.jpg"
              }
            >
              {product.paused ? (
                <Play onClick={() => pause(product._id, index)} />
              ) : (
                <Pause onClick={() => pause(product._id, index)} />
              )}

              <ButtonContainer>
                <Button onClick={() => action(product)} />
              </ButtonContainer>
            </ProductImage>
            <ProductTitle onClick={() => action(product)}>
              {product.title}
            </ProductTitle>
            <ProductBottom
              center={!product.OldPrice}
              onClick={() => action(product)}
            >
              <ProductPrice>
                {product.price.toLocaleString("pt-br", {
                  currency: "brl",
                  style: "currency",
                })}
              </ProductPrice>
              {product.OldPrice && (
                <ProductOldPrice>
                  {product.OldPrice.toLocaleString("pt-br", {
                    currency: "brl",
                    style: "currency",
                  })}
                </ProductOldPrice>
              )}
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
