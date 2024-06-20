import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const OrderButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6rem;
`;

const OrderButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  font-family: "Barlow";
  font-size: large;
  font-weight: bold;
  width: 20rem;
  margin-top: 0;

  &:hover {
    background-color: #e0b313;
  }
  &:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const OrderButtonContainer = ({ handleOrderClick, isOrderButtonDisabled }) => {
  return (
    <OrderButtonWrapper>
      <OrderButton onClick={handleOrderClick} disabled={isOrderButtonDisabled}>
        SİPARİŞ VER
      </OrderButton>
    </OrderButtonWrapper>
  );
};

export default OrderButtonContainer;
