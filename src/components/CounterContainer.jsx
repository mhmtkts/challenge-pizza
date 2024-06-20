import React from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  font-size: 1.5rem;
  width: 2rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: "Barlow";

  &:hover {
    background-color: #e0b313;
  }
`;

const CounterInput = styled(Input)`
  width: 3rem;
  height: 4rem;
  font-size: large;
  font-family: "Barlow";
  text-align: center;
  border: 2px solid #faf7f2;
`;

const CounterContainer = ({ piece, incrementPiece, decrementPiece }) => {
  return (
    <CounterWrapper>
      <CounterButton onClick={decrementPiece}>-</CounterButton>
      <CounterInput type="text" value={piece} readOnly style={{ textAlign: "center" }} />
      <CounterButton onClick={incrementPiece}>+</CounterButton>
    </CounterWrapper>
  );
};

export default CounterContainer;
