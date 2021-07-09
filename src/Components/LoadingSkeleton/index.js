import React from "react";
import {
  SkeletonContainer,
  FullBackground,
  Heading,
  Paragraph,
  Content,
} from "./styles";

export const LoadingSkeleton = ({
  repeat = 1,
  isLoading,
  containerHeight,
  containerWidth,
  hasBackground,
  hasHeading,
  hasParagraph,
  children,
  ...props
}) => {
  const renderSkeleton = () => {
    return (
      <SkeletonContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        {...props}
      >
        {hasBackground && <FullBackground />}
        {hasHeading || hasParagraph ? (
          <Content>
            {hasHeading && <Heading />}
            {hasParagraph && <Paragraph />}
          </Content>
        ) : null}
      </SkeletonContainer>
    );
  };

  return (
    <>
      {isLoading ? (
        Array.from({ length: repeat }, () => renderSkeleton())
      ) : (
        <>{children}</>
      )}
    </>
  );
};
