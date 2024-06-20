import React from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div`
  font-family: "Barlow";
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;

const Price = styled.h2`
  font-weight: 600;
  font-weight: bolder;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RatingValue = styled.p`
  font-weight: normal;
  margin-right: 5rem;
`;

const RatingCount = styled.p`
  font-weight: normal;
`;

const PriceContainer = () => {
  return (
    <PriceWrapper>
      <Price>85.50₺</Price>
      <RatingContainer>
        <RatingValue>4.9</RatingValue>
        <RatingCount>(200)</RatingCount>
      </RatingContainer>
    </PriceWrapper>
  );
};

export default PriceContainer;
